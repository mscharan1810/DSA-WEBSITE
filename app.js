/**
 * 33-Day DSA Tracker - Core Application Logic
 * Zero external runtime dependencies - 100% Vanilla JS
 */

(function () {
  'use strict';

  // LocalStorage Keys
  const STORAGE_KEY_COMPLETED = 'dsa_tracker_completed_v1';
  const STORAGE_KEY_STARRED = 'dsa_tracker_starred_v1';
  const STORAGE_KEY_NOTES = 'dsa_tracker_notes_v1';
  const STORAGE_KEY_COLLAPSED = 'dsa_tracker_collapsed_phases_v1';
  const STORAGE_KEY_DATES = 'dsa_tracker_completed_dates_v1';
  const STORAGE_KEY_THEME = 'dsa_tracker_theme_v1';
  const STORAGE_KEY_SYNC_KEY = 'dsa_tracker_sync_key_v1';
  const STORAGE_KEY_CUSTOM_FIREBASE = 'dsa_tracker_custom_firebase_v1';
  const STORAGE_KEY_LAST_SYNC = 'dsa_tracker_last_sync_v1';

  // Cloud Database Defaults (Custom Google Firebase Realtime Database)
  const DEFAULT_FIREBASE_RTDB = 'https://my-dsa-c9f6b-default-rtdb.firebaseio.com';
  const DEFAULT_SYNC_KEY = 'heap-coder-305';

  // Application State
  const state = {
    completed: new Set(),
    starred: new Set(),
    notes: {},
    completedDates: {}, // { [problemId]: "Sep 18, 2026" }
    collapsedPhases: new Set(),
    theme: 'light',
    currentCalendarDate: new Date(),
    // Cloud Sync State
    syncKey: '',
    customFirebaseUrl: '',
    lastSyncTime: null,
    syncStatus: 'local', // 'local' | 'syncing' | 'synced' | 'error' | 'offline'
    filters: {
      search: '',
      status: 'all',
      phase: 'all',
      topic: 'all',
      difficulty: 'all',
      platform: 'all',
      view: 'grouped' // 'grouped' | 'flat'
    }
  };

  // DOM Cache
  const elements = {
    problemsContainer: document.getElementById('problems-container'),
    overallPercentage: document.getElementById('overall-percentage'),
    progressCircle: document.getElementById('progress-circle'),
    statTotal: document.getElementById('stat-total'),
    statStreak: document.getElementById('stat-streak'),
    statToday: document.getElementById('stat-today'),
    statVeryEasy: document.getElementById('stat-very-easy'),
    statEasy: document.getElementById('stat-easy'),
    statMedium: document.getElementById('stat-medium'),
    streakCurrentCount: document.getElementById('streak-current-count'),
    streakMaxCount: document.getElementById('streak-max-count'),
    calendarMonthLabel: document.getElementById('calendar-month-label'),
    calendarDaysGrid: document.getElementById('calendar-days-grid'),
    calendarActiveDaysCount: document.getElementById('calendar-active-days-count'),
    btnPrevMonth: document.getElementById('btn-prev-month'),
    btnNextMonth: document.getElementById('btn-next-month'),
    calendarTooltip: document.getElementById('calendar-tooltip'),
    timelineBadge: document.getElementById('timeline-badge'),
    timelineProgressFill: document.getElementById('timeline-progress-fill'),
    resultsCount: document.getElementById('results-count'),

    // Theme Toggle & Save Status
    btnThemeToggle: document.getElementById('btn-theme-toggle'),
    themeIconMoon: document.getElementById('theme-icon-moon'),
    themeIconSun: document.getElementById('theme-icon-sun'),
    themeText: document.getElementById('theme-text'),
    saveStatusIndicator: document.getElementById('save-status-indicator'),
    saveStatusText: document.getElementById('save-status-text'),

    // Cloud Sync Elements
    btnOpenCloudSync: document.getElementById('btn-open-cloud-sync'),
    btnJumpToCloudSync: document.getElementById('btn-jump-to-cloud-sync'),
    modalCloudSync: document.getElementById('modal-cloud-sync'),
    cloudStatusBadge: document.getElementById('cloud-status-badge'),
    inputSyncKey: document.getElementById('input-sync-key'),
    btnGenerateSyncKey: document.getElementById('btn-generate-sync-key'),
    btnConnectSync: document.getElementById('btn-connect-sync'),
    btnForceSync: document.getElementById('btn-force-sync'),
    btnDisconnectSync: document.getElementById('btn-disconnect-sync'),
    syncStatStatus: document.getElementById('sync-stat-status'),
    syncStatTime: document.getElementById('sync-stat-time'),
    syncStatKey: document.getElementById('sync-stat-key'),
    syncConnectedActions: document.getElementById('sync-connected-actions'),
    qrCodeContainer: document.getElementById('qr-code-container'),
    inputShareLink: document.getElementById('input-share-link'),
    btnCopyShareLink: document.getElementById('btn-copy-share-link'),
    inputCustomFirebaseUrl: document.getElementById('input-custom-firebase-url'),
    btnSaveCustomFirebase: document.getElementById('btn-save-custom-firebase'),
    btnResetCustomFirebase: document.getElementById('btn-reset-custom-firebase'),
    firebaseStatusBadge: document.getElementById('firebase-status-badge'),
    firebaseTestFeedback: document.getElementById('firebase-test-feedback'),

    // Continue Learning Command Center
    continueSection: document.getElementById('continue-learning-section'),
    continueLastSolved: document.getElementById('continue-last-solved'),
    continuePhaseBadge: document.getElementById('continue-phase-badge'),
    continueProblemTitle: document.getElementById('continue-problem-title'),
    continueDiffBadge: document.getElementById('continue-diff-badge'),
    continueTopicBadge: document.getElementById('continue-topic-badge'),
    continuePatternBadge: document.getElementById('continue-pattern-badge'),
    continueSolveBtn: document.getElementById('continue-solve-btn'),
    continueMarkDoneBtn: document.getElementById('continue-mark-done-btn'),
    continueJumpBtn: document.getElementById('continue-jump-btn'),

    // Filter Elements
    searchInput: document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    statusPills: document.querySelectorAll('.status-pill'),
    filterPhase: document.getElementById('filter-phase'),
    filterTopic: document.getElementById('filter-topic'),
    filterDifficulty: document.getElementById('filter-difficulty'),
    filterPlatform: document.getElementById('filter-platform'),
    btnResetFilters: document.getElementById('btn-reset-filters'),
    viewGroupedBtn: document.getElementById('view-grouped-btn'),
    viewFlatBtn: document.getElementById('view-flat-btn'),

    // Modals
    modalGuides: document.getElementById('modal-guides'),
    btnOpenRules: document.getElementById('btn-open-rules'),
    btnOpenPatterns: document.getElementById('btn-open-patterns'),
    btnOpenToolkit: document.getElementById('btn-open-toolkit'),
    btnOpenData: document.getElementById('btn-open-data'),
    modalNotes: document.getElementById('modal-notes'),
    modalData: document.getElementById('modal-data'),
    noteModalTitle: document.getElementById('note-modal-title'),
    noteProblemId: document.getElementById('note-problem-id'),
    noteContent: document.getElementById('note-content'),
    btnSaveNote: document.getElementById('btn-save-note'),

    // Data Export/Import
    btnExportData: document.getElementById('btn-export-data'),
    importFileInput: document.getElementById('import-file-input'),
    btnResetAll: document.getElementById('btn-reset-all'),

    // Containers inside modal
    patternMapTbody: document.getElementById('pattern-map-tbody'),
    rulesListContainer: document.getElementById('rules-list-container'),
    routineListContainer: document.getElementById('routine-list-container'),
    toolkitSnippetsContainer: document.getElementById('toolkit-snippets-container'),
    stuckRulesContainer: document.getElementById('stuck-rules-container'),

    toastContainer: document.getElementById('toast-container'),
    confettiCanvas: document.getElementById('confetti-canvas')
  };

  /* ==========================================================================
     Initialization & Persistence
     ========================================================================== */
  function init() {
    loadState();
    checkUrlSyncParam();
    initTheme();
    calculateTimeline();
    populateModalData();
    bindEvents();
    render();
    updateMetrics();
    updateContinueLearning();
    initCloudSync();
  }

  function initTheme() {
    applyTheme(state.theme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (elements.themeText) {
      elements.themeText.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
    }
    if (elements.themeIconMoon && elements.themeIconSun) {
      if (theme === 'light') {
        elements.themeIconMoon.style.display = 'block';
        elements.themeIconSun.style.display = 'none';
      } else {
        elements.themeIconMoon.style.display = 'none';
        elements.themeIconSun.style.display = 'block';
      }
    }
  }

  function loadState() {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
      if (savedTheme) {
        state.theme = savedTheme;
      } else {
        state.theme = 'light'; // Default to Light Mode as requested
      }

      const savedCompleted = localStorage.getItem(STORAGE_KEY_COMPLETED);
      if (savedCompleted) {
        state.completed = new Set(JSON.parse(savedCompleted));
      }

      const savedStarred = localStorage.getItem(STORAGE_KEY_STARRED);
      if (savedStarred) {
        state.starred = new Set(JSON.parse(savedStarred));
      }

      const savedNotes = localStorage.getItem(STORAGE_KEY_NOTES);
      if (savedNotes) {
        state.notes = JSON.parse(savedNotes);
      }

      const savedDates = localStorage.getItem(STORAGE_KEY_DATES);
      if (savedDates) {
        state.completedDates = JSON.parse(savedDates);
      }

      const savedCollapsed = localStorage.getItem(STORAGE_KEY_COLLAPSED);
      if (savedCollapsed) {
        state.collapsedPhases = new Set(JSON.parse(savedCollapsed));
      }

      const savedSyncKey = localStorage.getItem(STORAGE_KEY_SYNC_KEY);
      if (savedSyncKey !== null) {
        state.syncKey = savedSyncKey === 'none' ? '' : savedSyncKey;
      } else if (DEFAULT_SYNC_KEY) {
        state.syncKey = DEFAULT_SYNC_KEY;
      }

      const savedCustomFirebase = localStorage.getItem(STORAGE_KEY_CUSTOM_FIREBASE);
      if (savedCustomFirebase !== null) {
        state.customFirebaseUrl = savedCustomFirebase === 'none' ? '' : savedCustomFirebase;
      } else if (DEFAULT_FIREBASE_RTDB) {
        state.customFirebaseUrl = DEFAULT_FIREBASE_RTDB;
      }

      const savedLastSync = localStorage.getItem(STORAGE_KEY_LAST_SYNC);
      if (savedLastSync) {
        state.lastSyncTime = savedLastSync;
      }
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
    }
  }

  function getNoteText(note) {
    if (!note) return '';
    if (typeof note === 'string') return note;
    if (typeof note.content === 'string') return note.content;
    if (typeof note.text === 'string') return note.text;
    const parts = [];
    if (note.whyPattern) parts.push(`Why this pattern:\n${note.whyPattern}`);
    if (note.keyVariables) parts.push(`Important Variables & Edge Cases:\n${note.keyVariables}`);
    if (note.complexity) parts.push(`Complexity:\n${note.complexity}`);
    return parts.join('\n\n');
  }

  function hasNoteContent(note) {
    return Boolean(getNoteText(note).trim());
  }

  function saveStateLocally() {
    try {
      localStorage.setItem(STORAGE_KEY_THEME, state.theme);
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(Array.from(state.completed)));
      localStorage.setItem(STORAGE_KEY_STARRED, JSON.stringify(Array.from(state.starred)));
      localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(state.notes));
      localStorage.setItem(STORAGE_KEY_DATES, JSON.stringify(state.completedDates));
      localStorage.setItem(STORAGE_KEY_COLLAPSED, JSON.stringify(Array.from(state.collapsedPhases)));
    } catch (e) {
      console.error('Error saving state to localStorage:', e);
    }
  }

  function saveState() {
    saveStateLocally();
    triggerSaveIndicator();
    if (state.syncKey) {
      scheduleCloudSync();
    }
  }

  function triggerSaveIndicator() {
    if (elements.saveStatusIndicator && elements.saveStatusText) {
      if (state.syncKey) {
        elements.saveStatusIndicator.classList.add('saving');
        elements.saveStatusText.textContent = 'Saving...';
      } else {
        elements.saveStatusIndicator.classList.add('saving');
        elements.saveStatusText.textContent = 'Saving locally...';
        setTimeout(() => {
          elements.saveStatusIndicator.classList.remove('saving');
          const now = new Date();
          const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          elements.saveStatusIndicator.className = 'save-status-pill local';
          elements.saveStatusText.textContent = `Local Only (${timeStr})`;
        }, 200);
      }
    }
  }

  /* ==========================================================================
     Cloud Sync & Cross-Device Engine (Free Google Firebase RTDB & Offline-First)
     ========================================================================== */
  let cloudSyncDebounceTimer = null;

  function sanitizeSyncKey(key) {
    if (!key) return '';
    return String(key).trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-').replace(/-+/g, '-');
  }

  function getFirebaseEndpoint(key) {
    const cleanKey = sanitizeSyncKey(key);
    let base = state.customFirebaseUrl && state.customFirebaseUrl.trim();
    if (!base) return null;
    base = base.replace(/\/+$/, '');
    return `${base}/dsa_sync/${cleanKey}.json`;
  }

  async function testFirebaseConnection(rawUrl) {
    if (!rawUrl) {
      return { ok: false, error: 'Please enter a Firebase Realtime Database URL' };
    }
    let url = rawUrl.trim().replace(/\/+$/, '');
    if (!url.startsWith('https://')) {
      return { ok: false, error: 'Firebase URL must start with https://' };
    }
    if (!url.includes('.firebaseio.com')) {
      return { ok: false, error: 'URL should end with .firebaseio.com (e.g. https://your-app-default-rtdb.firebaseio.com)' };
    }

    const testPingUrl = `${url}/dsa_sync/_connection_ping.json`;
    const startTime = Date.now();
    try {
      const putRes = await fetch(testPingUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ping: Date.now(), client: 'DSA Pattern Mastery Tracker' })
      });

      const latency = Date.now() - startTime;

      if (putRes.status === 401 || putRes.status === 403) {
        return {
          ok: false,
          warning: true,
          error: `⚠️ Permission Denied (HTTP ${putRes.status}): In Firebase Console → Realtime Database → Rules, set ".read": true, ".write": true.`
        };
      }

      if (putRes.status === 404) {
        return {
          ok: false,
          error: `❌ Database Not Found (HTTP 404): Make sure you created a "Realtime Database" (not Cloud Firestore) in Firebase Console.`
        };
      }

      if (!putRes.ok) {
        return {
          ok: false,
          error: `HTTP Error ${putRes.status}: Check your Firebase database URL.`
        };
      }

      // Cleanup test ping
      fetch(testPingUrl, { method: 'DELETE' }).catch(() => {});

      return {
        ok: true,
        latency: latency,
        message: `✅ Connected successfully! (${latency}ms latency) Database is ready for cloud sync.`
      };
    } catch (err) {
      return {
        ok: false,
        error: `Could not reach Firebase database. Check your internet connection and verify the URL is correct.`
      };
    }
  }

  function updateSyncStatus(status, text) {
    state.syncStatus = status;

    if (elements.saveStatusIndicator && elements.saveStatusText) {
      elements.saveStatusIndicator.className = 'save-status-pill';
      elements.saveStatusIndicator.classList.add(
        status === 'synced' ? 'synced' : 
        status === 'syncing' ? 'syncing' : 
        status === 'offline' ? 'offline' : 'local'
      );
      elements.saveStatusText.textContent = text || 'Local Only';
    }

    if (elements.cloudStatusBadge) {
      elements.cloudStatusBadge.className = 'sync-status-badge';
      if (status === 'synced') {
        elements.cloudStatusBadge.classList.add('connected');
        elements.cloudStatusBadge.textContent = 'Active & Synced 🟢';
      } else if (status === 'syncing') {
        elements.cloudStatusBadge.classList.add('syncing');
        elements.cloudStatusBadge.textContent = 'Syncing... 🔄';
      } else if (status === 'needs_db') {
        elements.cloudStatusBadge.classList.add('syncing');
        elements.cloudStatusBadge.textContent = 'Database Required ⚠️';
      } else if (status === 'error') {
        elements.cloudStatusBadge.classList.add('disconnected');
        elements.cloudStatusBadge.textContent = 'Sync Error ❌';
      } else if (status === 'offline') {
        elements.cloudStatusBadge.classList.add('syncing');
        elements.cloudStatusBadge.textContent = 'Offline (Queued)';
      } else if (state.syncKey && state.customFirebaseUrl) {
        elements.cloudStatusBadge.classList.add('connected');
        elements.cloudStatusBadge.textContent = 'Connected (Cloud)';
      } else {
        elements.cloudStatusBadge.classList.add('disconnected');
        elements.cloudStatusBadge.textContent = 'Local Only';
      }
    }

    if (elements.syncStatStatus) {
      if (status === 'synced') {
        elements.syncStatStatus.textContent = 'Active & Synced 🟢';
        elements.syncStatStatus.style.color = '#10b981';
      } else if (status === 'syncing') {
        elements.syncStatStatus.textContent = 'Syncing... 🔄';
        elements.syncStatStatus.style.color = '#f59e0b';
      } else if (status === 'needs_db') {
        elements.syncStatStatus.textContent = 'Database Not Linked ⚠️';
        elements.syncStatStatus.style.color = '#f59e0b';
      } else if (status === 'error') {
        elements.syncStatStatus.textContent = 'Sync Failed ❌';
        elements.syncStatStatus.style.color = '#ef4444';
      } else if (status === 'offline') {
        elements.syncStatStatus.textContent = 'Offline (Saved Locally) ⚠️';
        elements.syncStatStatus.style.color = '#f87171';
      } else if (state.syncKey && state.customFirebaseUrl) {
        elements.syncStatStatus.textContent = 'Ready to Sync 🟢';
        elements.syncStatStatus.style.color = '#10b981';
      } else if (state.syncKey) {
        elements.syncStatStatus.textContent = 'Database Required ⚠️';
        elements.syncStatStatus.style.color = '#f59e0b';
      } else {
        elements.syncStatStatus.textContent = 'Not Connected';
        elements.syncStatStatus.style.color = 'var(--text-secondary)';
      }
    }

    if (elements.syncStatTime) {
      elements.syncStatTime.textContent = state.lastSyncTime || '—';
    }
  }

  function getShareableLink() {
    if (!state.syncKey) return '';
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('sync', state.syncKey);
      if (state.customFirebaseUrl) {
        url.searchParams.set('db', state.customFirebaseUrl);
      }
      return url.toString();
    } catch (e) {
      const dbParam = state.customFirebaseUrl ? `&db=${encodeURIComponent(state.customFirebaseUrl)}` : '';
      return `${window.location.pathname}?sync=${encodeURIComponent(state.syncKey)}${dbParam}`;
    }
  }

  function renderQrCode(text, container) {
    if (!container) return;
    if (!text) {
      container.innerHTML = `<span style="font-size:0.75rem; color: #94a3b8; text-align: center;">Enter a sync key to generate QR code</span>`;
      return;
    }
    const encoded = encodeURIComponent(text);
    container.innerHTML = `
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&margin=0&data=${encoded}" 
           alt="Scan with phone camera to sync" 
           width="116" 
           height="116" 
           style="border-radius: 4px; display: block;" 
           onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\\'font-size:0.75rem;color:#64748b;text-align:center;padding:6px;\\'>Scan QR code on phone via live hosting or copy link below.</div>'" />
    `;
  }

  function updateSyncUI() {
    if (elements.inputSyncKey) {
      elements.inputSyncKey.value = state.syncKey || '';
    }

    if (elements.syncStatKey) {
      elements.syncStatKey.textContent = state.syncKey || 'None';
    }

    if (elements.inputCustomFirebaseUrl) {
      elements.inputCustomFirebaseUrl.value = state.customFirebaseUrl || '';
    }

    if (elements.btnResetCustomFirebase) {
      elements.btnResetCustomFirebase.style.display = state.customFirebaseUrl ? 'inline-flex' : 'none';
    }

    if (elements.firebaseStatusBadge) {
      elements.firebaseStatusBadge.className = 'sync-status-badge';
      if (state.customFirebaseUrl) {
        elements.firebaseStatusBadge.classList.add('connected');
        elements.firebaseStatusBadge.textContent = 'Linked 🟢';
      } else {
        elements.firebaseStatusBadge.classList.add('disconnected');
        elements.firebaseStatusBadge.textContent = 'Not Linked';
      }
    }

    if (elements.syncConnectedActions) {
      elements.syncConnectedActions.style.display = state.syncKey ? 'flex' : 'none';
    }

    if (elements.inputShareLink) {
      if (state.syncKey) {
        const link = getShareableLink();
        elements.inputShareLink.value = link;
        renderQrCode(link, elements.qrCodeContainer);
      } else {
        elements.inputShareLink.value = 'Connect a sync key above to generate your link';
        renderQrCode('', elements.qrCodeContainer);
      }
    }

    if (state.syncKey) {
      if (!state.customFirebaseUrl) {
        updateSyncStatus('needs_db', 'Database URL Required');
      } else if (state.lastSyncTime) {
        updateSyncStatus('synced', `Cloud Synced (${state.lastSyncTime})`);
      } else {
        updateSyncStatus('connected', `Cloud: ${state.syncKey}`);
      }
    } else {
      updateSyncStatus('local', 'Local Storage');
    }
  }

  function scheduleCloudSync() {
    if (!state.syncKey) return;
    if (!navigator.onLine) {
      updateSyncStatus('offline', 'Offline (Saved Locally)');
      return;
    }

    updateSyncStatus('syncing', 'Syncing...');
    if (cloudSyncDebounceTimer) clearTimeout(cloudSyncDebounceTimer);
    cloudSyncDebounceTimer = setTimeout(() => {
      pushToCloud(false);
    }, 450);
  }

  async function pushToCloud(isManual = false) {
    if (!state.syncKey) return;

    const endpoint = getFirebaseEndpoint(state.syncKey);
    if (!endpoint) {
      updateSyncStatus('needs_db', 'Database URL Required');
      return;
    }

    if (!navigator.onLine) {
      updateSyncStatus('offline', 'Offline (Saved Locally)');
      return;
    }

    try {
      updateSyncStatus('syncing', 'Syncing to Cloud...');

      const payload = {
        completed: Array.from(state.completed),
        starred: Array.from(state.starred),
        notes: state.notes,
        completedDates: state.completedDates,
        collapsedPhases: Array.from(state.collapsedPhases),
        theme: state.theme,
        updatedAt: new Date().toISOString(),
        updatedTimestamp: Date.now()
      };

      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      state.lastSyncTime = timeStr;
      localStorage.setItem(STORAGE_KEY_LAST_SYNC, timeStr);
      updateSyncStatus('synced', `Cloud Synced (${timeStr})`);

      if (isManual) {
        showToast(`Progress pushed to Cloud! (${timeStr})`, 'success');
      }
    } catch (err) {
      console.warn('Cloud Sync Push Error:', err);
      updateSyncStatus('error', 'Saved Locally (Cloud Error)');
      if (isManual) {
        showToast('Could not reach Firebase database. All progress is safely stored locally.', 'info');
      }
    }
  }

  async function pullFromCloud(isManual = false) {
    if (!state.syncKey) return;

    const endpoint = getFirebaseEndpoint(state.syncKey);
    if (!endpoint) {
      updateSyncStatus('needs_db', 'Database URL Required');
      if (isManual) {
        showToast('Please enter your Firebase Database URL above to sync', 'info');
      }
      return;
    }

    if (!navigator.onLine) {
      updateSyncStatus('offline', 'Offline (Saved Locally)');
      return;
    }

    try {
      updateSyncStatus('syncing', 'Checking Cloud Data...');

      const response = await fetch(endpoint);
      if (response.status === 401 || response.status === 403) {
        throw new Error('Permission denied (401). Set Firebase Rules to read: true, write: true.');
      }
      if (response.status === 404) {
        throw new Error('Database not found (404). Check your Firebase URL.');
      }
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      const data = await response.json();
      if (data && typeof data === 'object') {
        let hasNewData = false;

        // Smart Two-Way Union Merge
        if (Array.isArray(data.completed)) {
          data.completed.forEach(id => {
            if (!state.completed.has(id)) {
              state.completed.add(id);
              hasNewData = true;
            }
          });
        }

        if (Array.isArray(data.starred)) {
          data.starred.forEach(id => {
            if (!state.starred.has(id)) {
              state.starred.add(id);
              hasNewData = true;
            }
          });
        }

        if (data.completedDates && typeof data.completedDates === 'object') {
          Object.keys(data.completedDates).forEach(id => {
            if (!state.completedDates[id]) {
              state.completedDates[id] = data.completedDates[id];
              hasNewData = true;
            }
          });
        }

        if (data.notes && typeof data.notes === 'object') {
          Object.keys(data.notes).forEach(id => {
            if (!state.notes[id]) {
              state.notes[id] = data.notes[id];
              hasNewData = true;
            } else {
              const localText = getNoteText(state.notes[id]);
              const cloudText = getNoteText(data.notes[id]);
              if (localText !== cloudText) {
                const mergedText = localText.includes(cloudText)
                  ? localText
                  : cloudText.includes(localText)
                    ? cloudText
                    : `${localText}\n\n--- Cloud Note ---\n${cloudText}`;
                state.notes[id] = {
                  content: mergedText,
                  updatedAt: new Date().toISOString()
                };
                hasNewData = true;
              }
            }
          });
        }

        saveStateLocally();
        render();
        updateMetrics();
        updateContinueLearning();

        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        state.lastSyncTime = timeStr;
        localStorage.setItem(STORAGE_KEY_LAST_SYNC, timeStr);
        updateSyncStatus('synced', `Cloud Synced (${timeStr})`);

        if (isManual) {
          showToast(`Cloud data merged! (${state.completed.size} solved problems) 🎉`, 'success');
        }

        // Push back the merged reconciliation so cloud also receives any local items
        pushToCloud(false);
      } else {
        // No existing record in cloud under this key -> push current progress
        pushToCloud(false);
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        state.lastSyncTime = timeStr;
        localStorage.setItem(STORAGE_KEY_LAST_SYNC, timeStr);
        updateSyncStatus('synced', `Cloud Synced (${timeStr})`);
        if (isManual) {
          showToast(`Initialized cloud sync for "${state.syncKey}"!`, 'success');
        }
      }
    } catch (err) {
      console.warn('Cloud Sync Pull Error:', err);
      updateSyncStatus('error', 'Saved Locally');
      if (isManual) {
        showToast(err.message || 'Could not fetch cloud data. Progress is safely stored locally.', 'info');
      }
    }
  }

  function connectSyncKey(rawKey) {
    const clean = sanitizeSyncKey(rawKey);
    if (!clean || clean.length < 3) {
      showToast('Please enter a sync key with at least 3 characters', 'info');
      return;
    }

    state.syncKey = clean;
    localStorage.setItem(STORAGE_KEY_SYNC_KEY, clean);
    updateSyncUI();

    if (!state.customFirebaseUrl) {
      showToast(`Passphrase "${clean}" set! Paste your Firebase URL above to enable cloud sync.`, 'info');
      if (elements.inputCustomFirebaseUrl) {
        elements.inputCustomFirebaseUrl.focus();
      }
      return;
    }

    showToast(`Connecting to sync key "${clean}"...`, 'info');
    pullFromCloud(true);
  }

  function disconnectSync() {
    if (confirm('Disconnect Cloud Sync? Your progress will stay saved in this browser, but changes will no longer sync across devices.')) {
      state.syncKey = '';
      localStorage.setItem(STORAGE_KEY_SYNC_KEY, 'none');
      localStorage.removeItem(STORAGE_KEY_LAST_SYNC);
      state.lastSyncTime = null;
      updateSyncUI();
      showToast('Cloud Sync disconnected. Progress is stored locally.', 'info');
    }
  }

  function generateRandomSyncKey() {
    const prefixes = ['swift', 'algo', 'binary', 'matrix', 'heap', 'graph', 'ninja', 'logic', 'stack', 'prime'];
    const suffixes = ['master', 'coder', 'hero', 'solver', 'ace', 'wizard', 'champion', 'dev'];
    const p = prefixes[Math.floor(Math.random() * prefixes.length)];
    const s = suffixes[Math.floor(Math.random() * suffixes.length)];
    const n = Math.floor(100 + Math.random() * 900);
    return `${p}-${s}-${n}`;
  }

  function checkUrlSyncParam() {
    try {
      const params = new URLSearchParams(window.location.search);
      const syncVal = params.get('sync') || params.get('key');
      const dbVal = params.get('db');

      if (dbVal && dbVal.startsWith('https://')) {
        state.customFirebaseUrl = dbVal.trim().replace(/\/+$/, '');
        localStorage.setItem(STORAGE_KEY_CUSTOM_FIREBASE, state.customFirebaseUrl);
      }

      if (syncVal) {
        const clean = sanitizeSyncKey(syncVal);
        if (clean) {
          state.syncKey = clean;
          localStorage.setItem(STORAGE_KEY_SYNC_KEY, clean);
        }
      }
    } catch (e) {
      console.warn('URL sync check error:', e);
    }
  }

  function initCloudSync() {
    updateSyncUI();
    if (state.syncKey) {
      pullFromCloud(false);
    }
  }

  /* ==========================================================================
     Continue Learning Engine
     ========================================================================== */
  function updateContinueLearning() {
    if (!elements.continueSection) return;

    // 1. Find Next Unsolved Problem
    const nextProb = ROADMAP_DATA.problems.find(p => !state.completed.has(p.id));

    // 2. Find Last Solved Problem
    let lastSolved = null;
    for (let i = ROADMAP_DATA.problems.length - 1; i >= 0; i--) {
      const p = ROADMAP_DATA.problems[i];
      if (state.completed.has(p.id)) {
        lastSolved = p;
        break;
      }
    }

    if (elements.continueLastSolved) {
      if (lastSolved) {
        const solvedDate = state.completedDates[lastSolved.id] || 'Recently';
        elements.continueLastSolved.innerHTML = `Last Solved: <strong>${escapeHtml(lastSolved.title)}</strong> (${escapeHtml(solvedDate)})`;
      } else {
        elements.continueLastSolved.textContent = 'Last Solved: None yet — start with Day 1 below!';
      }
    }

    if (!nextProb) {
      // All problems completed!
      if (elements.continuePhaseBadge) elements.continuePhaseBadge.textContent = 'Sprint Goal Achieved!';
      if (elements.continueProblemTitle) elements.continueProblemTitle.textContent = '🎉 All 158 Problems Completed! Outstanding work!';
      if (elements.continueDiffBadge) elements.continueDiffBadge.style.display = 'none';
      if (elements.continueTopicBadge) elements.continueTopicBadge.style.display = 'none';
      if (elements.continuePatternBadge) elements.continuePatternBadge.style.display = 'none';
      if (elements.continueSolveBtn) elements.continueSolveBtn.style.display = 'none';
      if (elements.continueMarkDoneBtn) elements.continueMarkDoneBtn.style.display = 'none';
      if (elements.continueJumpBtn) elements.continueJumpBtn.style.display = 'none';
      return;
    }

    // Populate next problem
    if (elements.continuePhaseBadge) {
      elements.continuePhaseBadge.textContent = `Phase ${nextProb.phase}: ${nextProb.phaseTitle} • ${nextProb.day}`;
    }

    if (elements.continueProblemTitle) {
      elements.continueProblemTitle.textContent = nextProb.title;
    }

    if (elements.continueDiffBadge) {
      elements.continueDiffBadge.style.display = 'inline-block';
      const diffClass = nextProb.difficulty.toLowerCase().replace(/\s+/g, '-');
      elements.continueDiffBadge.className = `badge-difficulty ${diffClass}`;
      elements.continueDiffBadge.textContent = nextProb.difficulty;
    }

    if (elements.continueTopicBadge) {
      elements.continueTopicBadge.style.display = 'inline-block';
      elements.continueTopicBadge.textContent = nextProb.topic;
    }

    if (elements.continuePatternBadge) {
      elements.continuePatternBadge.style.display = 'inline-flex';
      elements.continuePatternBadge.innerHTML = `
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
        ${escapeHtml(nextProb.pattern)}
      `;
    }

    if (elements.continueSolveBtn) {
      elements.continueSolveBtn.style.display = 'inline-flex';
      elements.continueSolveBtn.href = nextProb.url;
      elements.continueSolveBtn.title = `Open ${nextProb.title} on ${nextProb.platform}`;
    }

    if (elements.continueMarkDoneBtn) {
      elements.continueMarkDoneBtn.style.display = 'inline-flex';
      elements.continueMarkDoneBtn.onclick = () => {
        handleToggleComplete(nextProb.id);
      };
    }

    if (elements.continueJumpBtn) {
      elements.continueJumpBtn.style.display = 'inline-flex';
      elements.continueJumpBtn.onclick = () => {
        jumpToProblem(nextProb.id);
      };
    }
  }

  function jumpToProblem(problemId) {
    // Make sure filter does not hide this problem
    if (state.filters.status === 'completed') {
      state.filters.status = 'all';
      elements.statusPills.forEach(p => p.classList.remove('active'));
      elements.statusPills[0].classList.add('active');
      render();
    }

    const row = document.getElementById(`row-${problemId}`);
    if (row) {
      const phaseGroup = row.closest('.phase-group');
      if (phaseGroup && phaseGroup.classList.contains('collapsed')) {
        phaseGroup.classList.remove('collapsed');
        state.collapsedPhases.delete(parseInt(phaseGroup.dataset.phaseId, 10));
        saveState();
      }
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
      row.classList.remove('highlight-pulse');
      void row.offsetWidth; // Trigger reflow for animation restart
      row.classList.add('highlight-pulse');
    }
  }

  /* ==========================================================================
     Timeline Calculation (Sep 18 - Oct 20)
     ========================================================================== */
  function calculateTimeline() {
    const startDate = new Date('2026-09-18T00:00:00');
    const endDate = new Date('2026-10-20T23:59:59');
    const today = new Date();

    const totalDays = 33;
    let dayNumber = 1;

    if (today >= startDate) {
      const diffTime = Math.abs(today - startDate);
      dayNumber = Math.min(totalDays, Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1);
    }

    const progressPct = Math.min(100, Math.max(3, (dayNumber / totalDays) * 100));

    if (elements.timelineBadge) {
      elements.timelineBadge.textContent = `Day ${dayNumber} of ${totalDays}`;
    }
    if (elements.timelineProgressFill) {
      elements.timelineProgressFill.style.width = `${progressPct.toFixed(1)}%`;
    }
  }

  /* ==========================================================================
     Metrics & Progress Ring
     ========================================================================== */
  function updateMetrics() {
    const totalProblems = ROADMAP_DATA.problems.length;
    const completedCount = state.completed.size;
    const percent = totalProblems > 0 ? Math.round((completedCount / totalProblems) * 100) : 0;

    // Overall text
    if (elements.overallPercentage) {
      elements.overallPercentage.textContent = `${percent}%`;
    }

    // Circle SVG animation
    if (elements.progressCircle) {
      const radius = 54;
      const circumference = 2 * Math.PI * radius; // 339.292
      const offset = circumference - (percent / 100) * circumference;
      elements.progressCircle.style.strokeDashoffset = offset;
    }

    // Stat boxes
    if (elements.statTotal) {
      elements.statTotal.textContent = `${completedCount} / ${totalProblems}`;
    }

    const todayStr = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    let todaySolved = 0;
    Object.keys(state.completedDates).forEach(id => {
      if (state.completed.has(id) && state.completedDates[id] === todayStr) {
        todaySolved++;
      }
    });

    if (elements.statToday) elements.statToday.textContent = todaySolved;

    let veryEasySolved = 0;
    let easySolved = 0;
    let mediumSolved = 0;

    ROADMAP_DATA.problems.forEach(prob => {
      if (state.completed.has(prob.id)) {
        if (prob.difficulty === 'Very Easy') veryEasySolved++;
        else if (prob.difficulty === 'Easy') easySolved++;
        else if (prob.difficulty === 'Medium' || prob.difficulty === 'Easy-Medium') mediumSolved++;
      }
    });

    if (elements.statVeryEasy) elements.statVeryEasy.textContent = veryEasySolved;
    if (elements.statEasy) elements.statEasy.textContent = easySolved;
    if (elements.statMedium) elements.statMedium.textContent = mediumSolved;

    updateCalendarUI();
  }

  /* ==========================================================================
     Submission Calendar & Streak Engine (LeetCode Style)
     ========================================================================== */
  function getYYYYMMDD(dateObj) {
    if (!dateObj || isNaN(dateObj.getTime())) return null;
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function parseFormattedDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return null;

    // 1. Check ISO format YYYY-MM-DD
    const isoMatch = dateStr.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (isoMatch) {
      const y = parseInt(isoMatch[1], 10);
      const m = String(parseInt(isoMatch[2], 10)).padStart(2, '0');
      const d = String(parseInt(isoMatch[3], 10)).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }

    // 2. Check Text format "Sep 20, 2026", "September 20, 2026"
    const months = {
      jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
      jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
      january: '01', february: '02', march: '03', april: '04', june: '06',
      july: '07', august: '08', september: '09', october: '10', november: '11', december: '12'
    };

    const textMatch = dateStr.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/);
    if (textMatch) {
      const mStr = textMatch[1].toLowerCase();
      const m = months[mStr];
      const d = String(parseInt(textMatch[2], 10)).padStart(2, '0');
      const y = textMatch[3];
      if (m) {
        return `${y}-${m}-${d}`;
      }
    }

    // Fallback using local Date constructor getters to avoid UTC displacement
    const dt = new Date(dateStr);
    if (isNaN(dt.getTime())) return null;
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, '0');
    const d = String(dt.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function getSolvesPerDateMap() {
    const map = {}; // { "YYYY-MM-DD": [ { id, title } ] }
    Object.keys(state.completedDates).forEach(id => {
      if (state.completed.has(id)) {
        const dateStr = state.completedDates[id];
        const normalizedKey = parseFormattedDate(dateStr);
        if (normalizedKey) {
          if (!map[normalizedKey]) map[normalizedKey] = [];
          const prob = ROADMAP_DATA.problems.find(p => p.id === id);
          map[normalizedKey].push({
            id: id,
            title: prob ? prob.title : id
          });
        }
      }
    });
    return map;
  }

  function calculateStreak() {
    const solvesMap = getSolvesPerDateMap();
    const dateKeys = Object.keys(solvesMap).filter(k => solvesMap[k].length > 0).sort();

    if (dateKeys.length === 0) {
      return { currentStreak: 0, maxStreak: 0, totalActiveDays: 0 };
    }

    const activeDaysSet = new Set(dateKeys);
    const totalActiveDays = activeDaysSet.size;

    // Calculate max streak with local dates
    let maxStreak = 0;
    let tempStreak = 0;
    const dates = dateKeys.map(k => {
      const parts = k.split('-');
      return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    }).sort((a, b) => a - b);

    if (dates.length > 0) {
      tempStreak = 1;
      maxStreak = 1;
      for (let i = 1; i < dates.length; i++) {
        const prev = dates[i - 1];
        const curr = dates[i];
        const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          tempStreak++;
        } else if (diffDays > 1) {
          tempStreak = 1;
        }
        if (tempStreak > maxStreak) {
          maxStreak = tempStreak;
        }
      }
    }

    // Calculate current streak ending today or yesterday using local dates
    const now = new Date();
    const todayKey = getYYYYMMDD(now);

    const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const yesterdayKey = getYYYYMMDD(yesterday);

    let currentStreak = 0;
    let checkDate = null;

    if (activeDaysSet.has(todayKey)) {
      checkDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (activeDaysSet.has(yesterdayKey)) {
      checkDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    }

    if (checkDate) {
      while (true) {
        const key = getYYYYMMDD(checkDate);
        if (activeDaysSet.has(key)) {
          currentStreak++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      }
    }

    return { currentStreak, maxStreak, totalActiveDays };
  }

  function updateCalendarUI() {
    const { currentStreak, maxStreak, totalActiveDays } = calculateStreak();

    if (elements.statStreak) {
      elements.statStreak.textContent = `🔥 ${currentStreak}`;
    }
    if (elements.streakCurrentCount) {
      elements.streakCurrentCount.textContent = `${currentStreak} Day${currentStreak === 1 ? '' : 's'}`;
    }
    if (elements.streakMaxCount) {
      elements.streakMaxCount.textContent = `${maxStreak} Day${maxStreak === 1 ? '' : 's'}`;
    }
    if (elements.calendarActiveDaysCount) {
      elements.calendarActiveDaysCount.textContent = totalActiveDays;
    }

    renderMonthCalendar();
  }

  function renderMonthCalendar() {
    if (!elements.calendarDaysGrid || !elements.calendarMonthLabel) return;

    if (!state.currentCalendarDate) {
      state.currentCalendarDate = new Date();
    }

    const targetDate = state.currentCalendarDate;
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth(); // 0 - 11

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    elements.calendarMonthLabel.textContent = `${monthNames[month]} ${year}`;

    const solvesMap = getSolvesPerDateMap();
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Sun
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    const todayKey = getYYYYMMDD(new Date());

    let gridHtml = '';

    // Empty padding slots for days before 1st of month
    for (let i = 0; i < firstDayIndex; i++) {
      gridHtml += `<div class="calendar-day empty-slot"></div>`;
    }

    // Days of month
    for (let day = 1; day <= totalDaysInMonth; day++) {
      const dateObj = new Date(year, month, day);
      const dateKey = getYYYYMMDD(dateObj);
      const solvedList = solvesMap[dateKey] || [];
      const count = solvedList.length;

      let levelClass = 'level-0';
      if (count === 1) levelClass = 'level-1';
      else if (count === 2) levelClass = 'level-2';
      else if (count >= 3 && count <= 4) levelClass = 'level-3';
      else if (count >= 5) levelClass = 'level-4';

      const isToday = (dateKey === todayKey);
      const formattedDateStr = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      const problemTitles = solvedList.map(p => p.title);

      gridHtml += `
        <div class="calendar-day ${levelClass} ${isToday ? 'today' : ''}"
             data-date="${escapeHtml(formattedDateStr)}"
             data-count="${count}"
             data-problems="${escapeHtml(JSON.stringify(problemTitles))}">
          ${day}
        </div>
      `;
    }

    elements.calendarDaysGrid.innerHTML = gridHtml;
  }

  /* ==========================================================================
     Filtering Logic
     ========================================================================== */
  function getFilteredProblems() {
    const { search, status, phase, topic, difficulty, platform } = state.filters;
    const query = search.trim().toLowerCase();

    return ROADMAP_DATA.problems.filter(prob => {
      // Search match
      if (query) {
        const matchesTitle = prob.title.toLowerCase().includes(query);
        const matchesPattern = prob.pattern.toLowerCase().includes(query);
        const matchesTopic = prob.topic.toLowerCase().includes(query);
        const matchesHint = prob.hint ? prob.hint.toLowerCase().includes(query) : false;
        if (!matchesTitle && !matchesPattern && !matchesTopic && !matchesHint) {
          return false;
        }
      }

      // Status match
      if (status === 'completed' && !state.completed.has(prob.id)) return false;
      if (status === 'pending' && state.completed.has(prob.id)) return false;
      if (status === 'starred' && !state.starred.has(prob.id)) return false;

      // Phase match
      if (phase !== 'all' && prob.phase !== parseInt(phase, 10)) return false;

      // Topic match
      if (topic !== 'all' && prob.topic.toLowerCase() !== topic.toLowerCase()) return false;

      // Difficulty match
      if (difficulty !== 'all' && prob.difficulty.toLowerCase() !== difficulty.toLowerCase()) return false;

      // Platform match
      if (platform !== 'all' && prob.platform.toLowerCase() !== platform.toLowerCase()) return false;

      return true;
    });
  }

  /* ==========================================================================
     Rendering Views
     ========================================================================== */
  function render() {
    const filtered = getFilteredProblems();

    if (elements.resultsCount) {
      elements.resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of ${ROADMAP_DATA.problems.length} problems`;
    }

    if (filtered.length === 0) {
      elements.problemsContainer.innerHTML = `
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h4>No matching problems found</h4>
          <p>Try clearing your search query or loosening your filter criteria.</p>
        </div>
      `;
      return;
    }

    if (state.filters.view === 'flat') {
      renderFlatView(filtered);
    } else {
      renderGroupedView(filtered);
    }
  }

  function renderGroupedView(problems) {
    // Group by phase
    const phaseMap = new Map();

    problems.forEach(prob => {
      if (!phaseMap.has(prob.phase)) {
        phaseMap.set(prob.phase, {
          phase: prob.phase,
          phaseTitle: prob.phaseTitle,
          day: prob.day,
          problems: []
        });
      }
      phaseMap.get(prob.phase).problems.push(prob);
    });

    let html = '';

    phaseMap.forEach((phaseData, phaseNumber) => {
      const isCollapsed = state.collapsedPhases.has(phaseNumber);
      const totalInPhase = ROADMAP_DATA.problems.filter(p => p.phase === phaseNumber).length;
      const completedInPhase = ROADMAP_DATA.problems.filter(p => p.phase === phaseNumber && state.completed.has(p.id)).length;
      const isPhaseDone = totalInPhase > 0 && completedInPhase === totalInPhase;
      const progressPercent = totalInPhase > 0 ? Math.round((completedInPhase / totalInPhase) * 100) : 0;

      html += `
        <div class="phase-group ${isPhaseDone ? 'completed' : ''} ${isCollapsed ? 'collapsed' : ''}" data-phase-id="${phaseNumber}">
          <div class="phase-header" data-toggle-collapse="${phaseNumber}">
            <div class="phase-title-left">
              <div class="phase-number">${phaseNumber}</div>
              <div class="phase-title-text">
                <h3>
                  ${escapeHtml(phaseData.phaseTitle)}
                  <span class="phase-day-badge">${escapeHtml(phaseData.day)}</span>
                </h3>
              </div>
            </div>

            <div class="phase-progress-right">
              <span class="phase-count-badge">${completedInPhase}/${totalInPhase} Solved</span>
              <div class="phase-progress-bar">
                <div class="phase-progress-fill" style="width: ${progressPercent}%;"></div>
              </div>
              <svg class="phase-collapse-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          <div class="phase-body">
            <div class="problem-list">
              ${phaseData.problems.map(prob => renderProblemRow(prob)).join('')}
            </div>
          </div>
        </div>
      `;
    });

    elements.problemsContainer.innerHTML = html;
  }

  function renderFlatView(problems) {
    let html = `
      <div class="phase-group" style="border-radius: var(--radius-lg);">
        <div class="problem-list">
          ${problems.map(prob => renderProblemRow(prob)).join('')}
        </div>
      </div>
    `;
    elements.problemsContainer.innerHTML = html;
  }

  function renderProblemRow(prob) {
    const isCompleted = state.completed.has(prob.id);
    const isStarred = state.starred.has(prob.id);
    const hasNotes = hasNoteContent(state.notes[prob.id]);
    const practiceDate = state.completedDates[prob.id];

    const diffClass = prob.difficulty.toLowerCase().replace(/\s+/g, '-');

    return `
      <div class="problem-row ${isCompleted ? 'completed' : ''}" id="row-${prob.id}">
        <!-- Checkbox -->
        <div class="checkbox-cell">
          <button
            class="custom-checkbox ${isCompleted ? 'checked' : ''}"
            data-action="toggle-complete"
            data-id="${prob.id}"
            title="${isCompleted ? 'Mark as unsolved' : 'Mark as solved'}"
            aria-label="Toggle completion"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
        </div>

        <!-- Star Bookmark -->
        <div>
          <button
            class="star-btn ${isStarred ? 'starred' : ''}"
            data-action="toggle-star"
            data-id="${prob.id}"
            title="${isStarred ? 'Remove bookmark' : 'Bookmark for revision'}"
            aria-label="Bookmark problem"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isStarred ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>
        </div>

        <!-- Title & Link -->
        <div class="problem-title">
          <a href="${escapeHtml(prob.url)}" target="_blank" rel="noopener noreferrer" title="Open problem on ${escapeHtml(prob.platform)}">
            ${escapeHtml(prob.title)}
            <svg class="external-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>

          ${prob.hint ? `
            <span class="hint-tooltip-icon" title="Clue: ${escapeHtml(prob.hint)}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </span>
          ` : ''}
        </div>

        <!-- Practiced Date -->
        <div class="date-cell">
          ${practiceDate ? `
            <span class="badge-date" title="Practiced on ${escapeHtml(practiceDate)}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              ${escapeHtml(practiceDate)}
            </span>
          ` : `
            <span class="badge-date empty" title="Not practiced yet">—</span>
          `}
        </div>

        <!-- Topic -->
        <div>
          <span class="badge-topic" title="Topic: ${escapeHtml(prob.topic)}">${escapeHtml(prob.topic)}</span>
        </div>

        <!-- Pattern -->
        <div>
          <span class="badge-pattern" title="Pattern: ${escapeHtml(prob.pattern)}">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            ${escapeHtml(prob.pattern)}
          </span>
        </div>

        <!-- Difficulty -->
        <div>
          <span class="badge-difficulty ${diffClass}">${escapeHtml(prob.difficulty)}</span>
        </div>

        <!-- Notes Button -->
        <div>
          <button
            class="note-btn ${hasNotes ? 'has-notes' : ''}"
            data-action="open-notes"
            data-id="${prob.id}"
            title="${hasNotes ? 'Edit pattern notes' : 'Add pattern notes'}"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            ${hasNotes ? 'Notes' : '+ Note'}
          </button>
        </div>
      </div>
    `;
  }

  /* ==========================================================================
     Modal Populators (Guide, Rules, Pattern Map, Toolkit)
     ========================================================================== */
  function populateModalData() {
    // 1. Pattern Map Table
    if (elements.patternMapTbody) {
      elements.patternMapTbody.innerHTML = ROADMAP_DATA.patternMap.map(row => `
        <tr>
          <td><strong>${escapeHtml(row.clue)}</strong></td>
          <td><code>${escapeHtml(row.pattern)}</code></td>
          <td style="font-family: var(--font-mono); color: #a5b4fc;">${escapeHtml(row.time)}</td>
          <td style="font-family: var(--font-mono); color: #94a3b8;">${escapeHtml(row.space)}</td>
        </tr>
      `).join('');
    }

    // 2. The 7-Step Rules
    if (elements.rulesListContainer) {
      elements.rulesListContainer.innerHTML = ROADMAP_DATA.rules.map(r => `
        <div class="rule-card">
          <div class="rule-number">${r.step}</div>
          <div class="rule-details">
            <h4>${escapeHtml(r.title)}</h4>
            <p>${escapeHtml(r.description)}</p>
          </div>
        </div>
      `).join('');
    }

    // 3. The 3-Hour Routine
    if (elements.routineListContainer) {
      elements.routineListContainer.innerHTML = ROADMAP_DATA.dailyRoutine.map(rt => `
        <div class="rule-card" style="border-left: 3px solid #6366f1;">
          <div class="rule-details" style="width: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <h4 style="margin: 0; color: #c7d2fe;">${escapeHtml(rt.label)}</h4>
              <span style="font-family: var(--font-mono); font-size: 0.78rem; background: rgba(99, 102, 241, 0.2); color: #a5b4fc; padding: 2px 8px; border-radius: var(--radius-full);">
                ${escapeHtml(rt.time)}
              </span>
            </div>
            <p>${escapeHtml(rt.description)}</p>
          </div>
        </div>
      `).join('');
    }

    // 4. Java Toolkit Snippets
    if (elements.toolkitSnippetsContainer) {
      elements.toolkitSnippetsContainer.innerHTML = ROADMAP_DATA.javaSnippets.map((snip, idx) => `
        <div class="snippet-card">
          <div class="snippet-header">
            <span>${escapeHtml(snip.title)}</span>
            <button class="copy-snippet-btn" data-snippet-index="${idx}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy
            </button>
          </div>
          <pre><code>${escapeHtml(snip.code)}</code></pre>
        </div>
      `).join('');
    }

    // 5. Stuck Mindset Rules
    if (elements.stuckRulesContainer) {
      elements.stuckRulesContainer.innerHTML = ROADMAP_DATA.attemptRule.map(ar => `
        <div class="rule-card" style="border-left: 3px solid #f59e0b;">
          <div class="rule-details">
            <h4 style="color: #fbbf24;">${escapeHtml(ar.attempt)}</h4>
            <p>${escapeHtml(ar.rule)}</p>
          </div>
        </div>
      `).join('');
    }
  }

  /* ==========================================================================
     Event Binding
     ========================================================================== */
  function bindEvents() {
    // Calendar Month Navigation
    if (elements.btnPrevMonth) {
      elements.btnPrevMonth.addEventListener('click', () => {
        if (!state.currentCalendarDate) state.currentCalendarDate = new Date();
        const y = state.currentCalendarDate.getFullYear();
        const m = state.currentCalendarDate.getMonth();
        state.currentCalendarDate = new Date(y, m - 1, 1);
        renderMonthCalendar();
      });
    }

    if (elements.btnNextMonth) {
      elements.btnNextMonth.addEventListener('click', () => {
        if (!state.currentCalendarDate) state.currentCalendarDate = new Date();
        const y = state.currentCalendarDate.getFullYear();
        const m = state.currentCalendarDate.getMonth();
        state.currentCalendarDate = new Date(y, m + 1, 1);
        renderMonthCalendar();
      });
    }

    // Calendar Hover Tooltip (LeetCode Mouseover / Mousemove / Mouseleave)
    if (elements.calendarDaysGrid && elements.calendarTooltip) {
      elements.calendarDaysGrid.addEventListener('mousemove', e => {
        const dayEl = e.target.closest('.calendar-day:not(.empty-slot)');
        if (!dayEl) {
          elements.calendarTooltip.style.display = 'none';
          return;
        }

        const dateStr = dayEl.dataset.date;
        const count = parseInt(dayEl.dataset.count, 10) || 0;
        let problems = [];
        try {
          problems = JSON.parse(dayEl.dataset.problems || '[]');
        } catch (err) {}

        let tooltipHtml = `
          <div class="tooltip-header">${escapeHtml(dateStr)}</div>
          <div class="tooltip-count">${count === 0 ? 'No problems solved' : `${count} problem${count === 1 ? '' : 's'} solved`}</div>
        `;

        if (problems.length > 0) {
          tooltipHtml += `<div class="tooltip-problems"><ul>`;
          problems.forEach(title => {
            tooltipHtml += `<li>${escapeHtml(title)}</li>`;
          });
          tooltipHtml += `</ul></div>`;
        }

        elements.calendarTooltip.innerHTML = tooltipHtml;
        elements.calendarTooltip.style.display = 'block';

        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const tooltipWidth = elements.calendarTooltip.offsetWidth || 220;
        const tooltipHeight = elements.calendarTooltip.offsetHeight || 80;

        let left = mouseX + 14;
        let top = mouseY + 14;

        if (left + tooltipWidth > window.innerWidth - 10) {
          left = mouseX - tooltipWidth - 10;
        }
        if (top + tooltipHeight > window.innerHeight - 10) {
          top = mouseY - tooltipHeight - 10;
        }

        elements.calendarTooltip.style.left = `${Math.max(10, left)}px`;
        elements.calendarTooltip.style.top = `${Math.max(10, top)}px`;
      });

      elements.calendarDaysGrid.addEventListener('mouseleave', () => {
        if (elements.calendarTooltip) {
          elements.calendarTooltip.style.display = 'none';
        }
      });
    }

    // Search input
    elements.searchInput.addEventListener('input', e => {
      state.filters.search = e.target.value;
      if (elements.searchClearBtn) {
        elements.searchClearBtn.style.display = e.target.value ? 'block' : 'none';
      }
      render();
    });

    if (elements.searchClearBtn) {
      elements.searchClearBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.filters.search = '';
        elements.searchClearBtn.style.display = 'none';
        render();
      });
    }

    // Theme toggle button
    if (elements.btnThemeToggle) {
      elements.btnThemeToggle.addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        applyTheme(state.theme);
        saveState();
        showToast(`Switched to ${state.theme === 'light' ? 'Light' : 'Dark'} mode`, 'info');
      });
    }

    // Status pills
    elements.statusPills.forEach(pill => {
      pill.addEventListener('click', () => {
        elements.statusPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.filters.status = pill.dataset.status;
        render();
      });
    });

    // Dropdowns
    elements.filterPhase.addEventListener('change', e => {
      state.filters.phase = e.target.value;
      render();
    });

    elements.filterTopic.addEventListener('change', e => {
      state.filters.topic = e.target.value;
      render();
    });

    elements.filterDifficulty.addEventListener('change', e => {
      state.filters.difficulty = e.target.value;
      render();
    });

    elements.filterPlatform.addEventListener('change', e => {
      state.filters.platform = e.target.value;
      render();
    });

    // Reset Filters
    elements.btnResetFilters.addEventListener('click', () => {
      elements.searchInput.value = '';
      if (elements.searchClearBtn) elements.searchClearBtn.style.display = 'none';

      elements.statusPills.forEach(p => p.classList.remove('active'));
      elements.statusPills[0].classList.add('active');

      elements.filterPhase.value = 'all';
      elements.filterTopic.value = 'all';
      elements.filterDifficulty.value = 'all';
      elements.filterPlatform.value = 'all';

      state.filters = {
        search: '',
        status: 'all',
        phase: 'all',
        topic: 'all',
        difficulty: 'all',
        platform: 'all',
        view: state.filters.view
      };

      render();
      showToast('Filters reset to default', 'info');
    });

    // View toggles
    elements.viewGroupedBtn.addEventListener('click', () => {
      elements.viewGroupedBtn.classList.add('active');
      elements.viewFlatBtn.classList.remove('active');
      state.filters.view = 'grouped';
      render();
    });

    elements.viewFlatBtn.addEventListener('click', () => {
      elements.viewFlatBtn.classList.add('active');
      elements.viewGroupedBtn.classList.remove('active');
      state.filters.view = 'flat';
      render();
    });

    // Problem list interactions (delegated)
    elements.problemsContainer.addEventListener('click', e => {
      // Toggle complete
      const toggleCompleteBtn = e.target.closest('[data-action="toggle-complete"]');
      if (toggleCompleteBtn) {
        const id = toggleCompleteBtn.dataset.id;
        handleToggleComplete(id);
        return;
      }

      // Toggle star
      const toggleStarBtn = e.target.closest('[data-action="toggle-star"]');
      if (toggleStarBtn) {
        const id = toggleStarBtn.dataset.id;
        handleToggleStar(id);
        return;
      }

      // Open notes
      const openNotesBtn = e.target.closest('[data-action="open-notes"]');
      if (openNotesBtn) {
        const id = openNotesBtn.dataset.id;
        handleOpenNotes(id);
        return;
      }

      // Collapse phase
      const phaseHeader = e.target.closest('[data-toggle-collapse]');
      if (phaseHeader) {
        const phaseNumber = parseInt(phaseHeader.dataset.toggleCollapse, 10);
        handleTogglePhaseCollapse(phaseNumber);
        return;
      }
    });

    // Modals Open
    elements.btnOpenRules.addEventListener('click', () => {
      switchTab('tab-rules');
      openModal(elements.modalGuides);
    });

    elements.btnOpenPatterns.addEventListener('click', () => {
      switchTab('tab-patterns');
      openModal(elements.modalGuides);
    });

    elements.btnOpenToolkit.addEventListener('click', () => {
      switchTab('tab-toolkit');
      openModal(elements.modalGuides);
    });

    elements.btnOpenData.addEventListener('click', () => {
      openModal(elements.modalData);
    });

    if (elements.btnOpenCloudSync) {
      elements.btnOpenCloudSync.addEventListener('click', () => {
        updateSyncUI();
        openModal(elements.modalCloudSync);
      });
    }

    if (elements.btnJumpToCloudSync) {
      elements.btnJumpToCloudSync.addEventListener('click', () => {
        closeModal(elements.modalData);
        updateSyncUI();
        openModal(elements.modalCloudSync);
      });
    }

    if (elements.saveStatusIndicator) {
      elements.saveStatusIndicator.addEventListener('click', () => {
        updateSyncUI();
        openModal(elements.modalCloudSync);
      });
    }

    // Modal Close buttons
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.closeModal;
        const modal = document.getElementById(modalId);
        if (modal) closeModal(modal);
      });
    });

    // Close modal on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    });

    // Tabs inside modal
    document.querySelectorAll('.modal-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        switchTab(tabBtn.dataset.tab);
      });
    });

    // Save Notes Form
    elements.btnSaveNote.addEventListener('click', () => {
      const id = elements.noteProblemId.value;
      if (!id) return;

      const content = elements.noteContent ? elements.noteContent.value.trim() : '';
      if (content) {
        state.notes[id] = {
          content: content,
          updatedAt: new Date().toISOString()
        };
      } else {
        delete state.notes[id];
      }

      saveState();
      closeModal(elements.modalNotes);
      render();
      showToast(content ? 'Notes saved!' : 'Notes cleared', 'success');
    });

    // Copy Java snippet to clipboard
    if (elements.toolkitSnippetsContainer) {
      elements.toolkitSnippetsContainer.addEventListener('click', e => {
        const copyBtn = e.target.closest('.copy-snippet-btn');
        if (copyBtn) {
          const idx = parseInt(copyBtn.dataset.snippetIndex, 10);
          const snippet = ROADMAP_DATA.javaSnippets[idx];
          if (snippet) {
            navigator.clipboard.writeText(snippet.code).then(() => {
              copyBtn.textContent = 'Copied!';
              setTimeout(() => {
                copyBtn.innerHTML = `
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg> Copy
                `;
              }, 1500);
            });
          }
        }
      });
    }

    // Export Data JSON
    elements.btnExportData.addEventListener('click', () => {
      const backup = {
        timestamp: new Date().toISOString(),
        theme: state.theme,
        completed: Array.from(state.completed),
        starred: Array.from(state.starred),
        completedDates: state.completedDates,
        notes: state.notes
      };

      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backup, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `dsa_tracker_backup_${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Progress exported to JSON!', 'success');
    });

    // Import Data JSON
    elements.importFileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = event => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported.completed)) {
            state.completed = new Set(imported.completed);
          }
          if (Array.isArray(imported.starred)) {
            state.starred = new Set(imported.starred);
          }
          if (imported.completedDates && typeof imported.completedDates === 'object') {
            state.completedDates = imported.completedDates;
          }
          if (imported.notes && typeof imported.notes === 'object') {
            state.notes = imported.notes;
          }
          if (imported.theme) {
            state.theme = imported.theme;
            applyTheme(state.theme);
          }

          saveState();
          render();
          updateMetrics();
          closeModal(elements.modalData);
          showToast('Progress restored successfully!', 'success');
        } catch (err) {
          alert('Invalid JSON backup file.');
        }
      };
      reader.readAsText(file);
      e.target.value = '';
    });

    // Reset All Data
    elements.btnResetAll.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all your completed problems, bookmarks, and notes? This cannot be undone.')) {
        state.completed.clear();
        state.starred.clear();
        state.completedDates = {};
        state.notes = {};
        saveState();
        render();
        updateMetrics();
        closeModal(elements.modalData);
        showToast('All progress reset.', 'info');
      }
    });

    // Global keyboard escape to close modal
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.open').forEach(modal => closeModal(modal));
      }
    });

    // Multi-tab real-time synchronization
    window.addEventListener('storage', e => {
      if (e.key && e.key.startsWith('dsa_tracker_')) {
        loadState();
        render();
        updateMetrics();
        updateContinueLearning();
        updateSyncUI();
      }
    });

    // Cloud Sync Modal Tabs
    document.querySelectorAll('[data-sync-tab]').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        const targetTab = tabBtn.dataset.syncTab;
        document.querySelectorAll('[data-sync-tab]').forEach(b => b.classList.remove('active'));
        tabBtn.classList.add('active');
        document.querySelectorAll('.sync-tab-pane').forEach(pane => {
          pane.style.display = pane.id === targetTab ? 'block' : 'none';
        });
      });
    });

    // Connect Sync Key
    if (elements.btnConnectSync && elements.inputSyncKey) {
      elements.btnConnectSync.addEventListener('click', () => {
        connectSyncKey(elements.inputSyncKey.value);
      });

      elements.inputSyncKey.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
          connectSyncKey(elements.inputSyncKey.value);
        }
      });
    }

    // Generate Sync Key
    if (elements.btnGenerateSyncKey && elements.inputSyncKey) {
      elements.btnGenerateSyncKey.addEventListener('click', () => {
        const generated = generateRandomSyncKey();
        elements.inputSyncKey.value = generated;
        connectSyncKey(generated);
      });
    }

    // Force Sync Now
    if (elements.btnForceSync) {
      elements.btnForceSync.addEventListener('click', () => {
        pullFromCloud(true);
      });
    }

    // Disconnect Sync
    if (elements.btnDisconnectSync) {
      elements.btnDisconnectSync.addEventListener('click', () => {
        disconnectSync();
      });
    }

    // Copy Share Link
    if (elements.btnCopyShareLink && elements.inputShareLink) {
      elements.btnCopyShareLink.addEventListener('click', () => {
        const link = elements.inputShareLink.value;
        if (!link || link.startsWith('Connect a sync key')) {
          showToast('Please connect a sync key first', 'info');
          return;
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(link).then(() => {
            showToast('Shareable sync link copied to clipboard! 📋', 'success');
          }).catch(() => {
            elements.inputShareLink.select();
            document.execCommand('copy');
            showToast('Link copied to clipboard! 📋', 'success');
          });
        } else {
          elements.inputShareLink.select();
          document.execCommand('copy');
          showToast('Link copied to clipboard! 📋', 'success');
        }
      });
    }

    // Custom Firebase URL Save & Reset with Live Connection Testing
    if (elements.btnSaveCustomFirebase && elements.inputCustomFirebaseUrl) {
      elements.btnSaveCustomFirebase.addEventListener('click', async () => {
        const url = elements.inputCustomFirebaseUrl.value.trim();
        if (!url) {
          showToast('Please enter your Firebase Database URL', 'info');
          return;
        }

        if (elements.firebaseTestFeedback) {
          elements.firebaseTestFeedback.style.display = 'flex';
          elements.firebaseTestFeedback.className = 'firebase-test-feedback testing';
          elements.firebaseTestFeedback.innerHTML = 'Testing connection to Firebase... ⏳';
        }

        const result = await testFirebaseConnection(url);

        if (elements.firebaseTestFeedback) {
          elements.firebaseTestFeedback.style.display = 'flex';
          if (result.ok) {
            elements.firebaseTestFeedback.className = 'firebase-test-feedback success';
            elements.firebaseTestFeedback.innerHTML = result.message;
          } else if (result.warning) {
            elements.firebaseTestFeedback.className = 'firebase-test-feedback warning';
            elements.firebaseTestFeedback.innerHTML = result.error;
          } else {
            elements.firebaseTestFeedback.className = 'firebase-test-feedback error';
            elements.firebaseTestFeedback.innerHTML = result.error;
          }
        }

        if (result.ok) {
          state.customFirebaseUrl = url.replace(/\/+$/, '');
          localStorage.setItem(STORAGE_KEY_CUSTOM_FIREBASE, state.customFirebaseUrl);
          updateSyncUI();
          showToast('Firebase Database connected successfully! 🎉', 'success');

          if (state.syncKey) {
            pullFromCloud(true);
          }
        } else {
          showToast(result.error || 'Connection failed', 'info');
        }
      });
    }

    if (elements.btnResetCustomFirebase && elements.inputCustomFirebaseUrl) {
      elements.btnResetCustomFirebase.addEventListener('click', () => {
        if (confirm('Disconnect Firebase Database URL? Your progress will remain saved locally on this computer.')) {
          state.customFirebaseUrl = '';
          elements.inputCustomFirebaseUrl.value = '';
          localStorage.setItem(STORAGE_KEY_CUSTOM_FIREBASE, 'none');
          if (elements.firebaseTestFeedback) {
            elements.firebaseTestFeedback.style.display = 'none';
          }
          updateSyncUI();
          showToast('Firebase Database disconnected', 'info');
        }
      });
    }

    // Auto-sync when returning to tab or re-connecting to internet
    window.addEventListener('focus', () => {
      if (state.syncKey && navigator.onLine) {
        pullFromCloud(false);
      }
    });

    window.addEventListener('online', () => {
      if (state.syncKey) {
        updateSyncStatus('synced', 'Back Online');
        pushToCloud(false);
      }
    });

    window.addEventListener('offline', () => {
      if (state.syncKey) {
        updateSyncStatus('offline', 'Offline (Saved Locally)');
      }
    });
  }

  /* ==========================================================================
     Actions Handlers
     ========================================================================== */
  function handleToggleComplete(id) {
    const isNowCompleted = !state.completed.has(id);
    const prob = ROADMAP_DATA.problems.find(p => p.id === id);

    if (isNowCompleted) {
      state.completed.add(id);
      const todayFormatted = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      state.completedDates[id] = todayFormatted;

      triggerConfetti();
      showToast(`Completed: ${prob ? prob.title : 'Problem'}! 🎉 (Saved on ${todayFormatted})`, 'success');

      // Check if entire phase is completed!
      if (prob) {
        const allInPhase = ROADMAP_DATA.problems.filter(p => p.phase === prob.phase);
        const allDone = allInPhase.every(p => state.completed.has(p.id));
        if (allDone) {
          triggerBigMilestoneConfetti();
          showToast(`Milestone: Phase ${prob.phase} (${prob.phaseTitle}) 100% Complete! 🏆`, 'success');
        }
      }
    } else {
      state.completed.delete(id);
      delete state.completedDates[id];
    }

    saveState();
    updateMetrics();
    updateContinueLearning();

    // Re-render row or whole view to preserve layout state
    if (state.filters.status !== 'all') {
      render();
    } else {
      const row = document.getElementById(`row-${id}`);
      if (row) {
        const checkbox = row.querySelector('.custom-checkbox');
        const dateCell = row.querySelector('.date-cell');

        if (isNowCompleted) {
          row.classList.add('completed');
          checkbox.classList.add('checked');
          checkbox.title = 'Mark as unsolved';

          if (dateCell) {
            dateCell.innerHTML = `
              <span class="badge-date" title="Practiced on ${escapeHtml(state.completedDates[id])}">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                ${escapeHtml(state.completedDates[id])}
              </span>
            `;
          }
        } else {
          row.classList.remove('completed');
          checkbox.classList.remove('checked');
          checkbox.title = 'Mark as solved';

          if (dateCell) {
            dateCell.innerHTML = `<span class="badge-date empty" title="Not practiced yet">—</span>`;
          }
        }

        // Update Phase header if grouped
        if (prob && state.filters.view === 'grouped') {
          const phaseGroup = row.closest('.phase-group');
          if (phaseGroup) {
            const totalInPhase = ROADMAP_DATA.problems.filter(p => p.phase === prob.phase).length;
            const completedInPhase = ROADMAP_DATA.problems.filter(p => p.phase === prob.phase && state.completed.has(p.id)).length;
            const isPhaseDone = totalInPhase > 0 && completedInPhase === totalInPhase;
            const progressPercent = totalInPhase > 0 ? Math.round((completedInPhase / totalInPhase) * 100) : 0;

            if (isPhaseDone) phaseGroup.classList.add('completed');
            else phaseGroup.classList.remove('completed');

            const countBadge = phaseGroup.querySelector('.phase-count-badge');
            if (countBadge) countBadge.textContent = `${completedInPhase}/${totalInPhase} Solved`;

            const fill = phaseGroup.querySelector('.phase-progress-fill');
            if (fill) fill.style.width = `${progressPercent}%`;
          }
        }
      } else {
        render();
      }
    }
  }

  function handleToggleStar(id) {
    if (state.starred.has(id)) {
      state.starred.delete(id);
      showToast('Removed from bookmarks', 'info');
    } else {
      state.starred.add(id);
      showToast('Bookmarked for pattern revision! ★', 'success');
    }

    saveState();

    if (state.filters.status === 'starred') {
      render();
    } else {
      const row = document.getElementById(`row-${id}`);
      if (row) {
        const starBtn = row.querySelector('.star-btn');
        const isStarred = state.starred.has(id);
        if (isStarred) {
          starBtn.classList.add('starred');
          starBtn.querySelector('svg').setAttribute('fill', 'currentColor');
        } else {
          starBtn.classList.remove('starred');
          starBtn.querySelector('svg').setAttribute('fill', 'none');
        }
      } else {
        render();
      }
    }
  }

  function handleOpenNotes(id) {
    const prob = ROADMAP_DATA.problems.find(p => p.id === id);
    if (!prob) return;

    elements.noteModalTitle.textContent = prob.title;
    elements.noteProblemId.value = prob.id;

    if (elements.noteContent) {
      elements.noteContent.value = getNoteText(state.notes[id]);
    }

    openModal(elements.modalNotes);
    setTimeout(() => {
      if (elements.noteContent) elements.noteContent.focus();
    }, 120);
  }

  function handleTogglePhaseCollapse(phaseNumber) {
    const phaseGroup = document.querySelector(`.phase-group[data-phase-id="${phaseNumber}"]`);
    if (!phaseGroup) return;

    if (state.collapsedPhases.has(phaseNumber)) {
      state.collapsedPhases.delete(phaseNumber);
      phaseGroup.classList.remove('collapsed');
    } else {
      state.collapsedPhases.add(phaseNumber);
      phaseGroup.classList.add('collapsed');
    }
    saveState();
  }

  /* ==========================================================================
     Modal & Tab Helpers
     ========================================================================== */
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function switchTab(tabId) {
    document.querySelectorAll('.modal-tab-btn').forEach(b => {
      if (b.dataset.tab === tabId) b.classList.add('active');
      else b.classList.remove('active');
    });

    document.querySelectorAll('.modal-tab-pane').forEach(pane => {
      if (pane.id === tabId) pane.style.display = 'block';
      else pane.style.display = 'none';
    });
  }

  /* ==========================================================================
     Toast System
     ========================================================================== */
  function showToast(message, type = 'info') {
    if (!elements.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    `;

    if (type === 'success') {
      icon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
    }

    toast.innerHTML = `${icon} <span>${escapeHtml(message)}</span>`;
    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  /* ==========================================================================
     Confetti Physics Animation System
     ========================================================================== */
  let confettiParticles = [];
  let confettiAnimationId = null;

  function triggerConfetti() {
    const canvas = elements.confettiCanvas;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#3b82f6'];

    for (let i = 0; i < 60; i++) {
      confettiParticles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 120,
        y: canvas.height * 0.7,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 14 - 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 7 + 4,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    if (!confettiAnimationId) {
      animateConfetti(ctx, canvas);
    }
  }

  function triggerBigMilestoneConfetti() {
    const canvas = elements.confettiCanvas;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#10b981', '#6366f1', '#fbbf24', '#a855f7', '#38bdf8'];

    // Left cannon
    for (let i = 0; i < 70; i++) {
      confettiParticles.push({
        x: 100,
        y: canvas.height,
        vx: Math.random() * 12 + 4,
        vy: -Math.random() * 18 - 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        opacity: 1
      });
    }

    // Right cannon
    for (let i = 0; i < 70; i++) {
      confettiParticles.push({
        x: canvas.width - 100,
        y: canvas.height,
        vx: -Math.random() * 12 - 4,
        vy: -Math.random() * 18 - 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        opacity: 1
      });
    }

    if (!confettiAnimationId) {
      animateConfetti(ctx, canvas);
    }
  }

  function animateConfetti(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.vx *= 0.98; // drag
      p.rotation += p.rotSpeed;
      p.opacity -= 0.012;

      if (p.opacity <= 0 || p.y > canvas.height + 20) {
        confettiParticles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }

    if (confettiParticles.length > 0) {
      confettiAnimationId = requestAnimationFrame(() => animateConfetti(ctx, canvas));
    } else {
      confettiAnimationId = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  /* ==========================================================================
     Security / HTML Escaping Utility
     ========================================================================== */
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Start app on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
