// 33-Day DSA Roadmap & Pattern Recognition Dataset (Sep 18 - Oct 20)
// Structured for Beginner -> Easy -> Easy-Medium -> Medium in Java

const ROADMAP_DATA = {
  metadata: {
    title: "33-Day DSA Pattern Mastery (Java)",
    startDate: "2026-09-18",
    endDate: "2026-10-20",
    totalDays: 33,
    goal: "Very Beginner → Easy → Easy-Medium → Medium",
    focus: "Java Implementation + Logical Thinking + Pattern Recognition"
  },

  // The 7-Step Problem Solving Rule
  rules: [
    {
      step: 1,
      title: "Read & Understand",
      description: "Ask: 'What are they actually asking? What are the edge cases?' Write down input/output examples."
    },
    {
      step: 2,
      title: "Brute Force Thinking",
      description: "Even O(n²) or O(n³) is totally okay! Say it out loud or write the manual nested loop approach first."
    },
    {
      step: 3,
      title: "Pattern Identification",
      description: "Match clues: Sorted array? Contiguous subarray? Frequency? Next greater? Level-by-level? Choose pattern before coding."
    },
    {
      step: 4,
      title: "Dry Run on Paper",
      description: "Trace your variables on an example (n=4 or 5) and verify boundary edge cases (empty, single element, duplicates)."
    },
    {
      step: 5,
      title: "Write Clean Java Code",
      description: "Code using appropriate Java standard library structures (ArrayDeque, HashMap, PriorityQueue, etc.)."
    },
    {
      step: 6,
      title: "Complexity Analysis",
      description: "Derive Time Complexity and Space Complexity clearly. State why you used auxiliary space."
    },
    {
      step: 7,
      title: "Next-Day Reproduction",
      description: "The golden rule: Next day WITHOUT seeing any solution, reproduce the code from scratch from memory!"
    }
  ],

  // 3-Hour Daily Routine
  dailyRoutine: [
    {
      time: "45 Minutes",
      label: "Concept Deep-Dive",
      description: "Learn What? Why? When? How? Understand memory visualization and pointer movement.",
      badge: "Concept"
    },
    {
      time: "90 Minutes",
      label: "Problem Solving",
      description: "Solve: 2 Very Easy + 2 Easy + 1 Easy-Medium. Apply the 3-attempt rule (15m think -> hint -> solution without copy).",
      badge: "Practice"
    },
    {
      time: "30 Minutes",
      label: "Re-code from Memory",
      description: "Close all IDEs / browser tabs. Open a blank file and write the solution purely from memory.",
      badge: "Retention"
    },
    {
      time: "15 Minutes",
      label: "Pattern Notebook",
      description: "Document: Problem, Pattern, Why this pattern, Brute Force, Optimal, Key variables, Time, Space.",
      badge: "Notebook"
    }
  ],

  // The 3-Attempt Rule for "Idea raavatledu" (Stuck mindset)
  attemptRule: [
    {
      attempt: "Attempt 1 (15 Mins)",
      rule: "No solution looking. Ask: Can I do this manually? What if n=5? Is it sorted? Contiguous? Do I need frequency count? Two pointers? Stack?"
    },
    {
      attempt: "Attempt 2 (Hint Only)",
      rule: "Still stuck? Do NOT look at code. Only read the pattern name (e.g. 'Sliding Window' or 'Two Pointers'). Try again with that clue."
    },
    {
      attempt: "Attempt 3 (Solution Study)",
      rule: "Read solution logic -> Close screen -> Explain it out loud to yourself -> Dry run -> Code from memory without looking."
    }
  ],

  // Complete Pattern Clue Map
  patternMap: [
    { clue: "Visit every element one-by-one", pattern: "Linear Traversal", time: "O(n)", space: "O(1)" },
    { clue: "Frequency, counting, duplicates, 'seen before'", pattern: "HashMap / HashSet", time: "O(n)", space: "O(n)" },
    { clue: "Already sorted array + find pair / target", pattern: "Two Pointers (Opposite Ends)", time: "O(n)", space: "O(1)" },
    { clue: "Palindrome check or reversing in place", pattern: "Two Pointers", time: "O(n)", space: "O(1)" },
    { clue: "Contiguous subarray with sum / properties", pattern: "Sliding Window / Prefix Sum", time: "O(n)", space: "O(1) / O(n)" },
    { clue: "Fixed window of size K (max/min sum, vowels)", pattern: "Fixed Sliding Window", time: "O(n)", space: "O(1)" },
    { clue: "Longest / shortest valid substring meeting condition", pattern: "Variable Sliding Window", time: "O(n)", space: "O(1) / O(k)" },
    { clue: "Range sum queries repeatedly", pattern: "Prefix Sum Array", time: "O(1) query", space: "O(n)" },
    { clue: "Sorted array search / find position / boundary", pattern: "Binary Search", time: "O(log n)", space: "O(1)" },
    { clue: "'Minimum possible maximum' or 'Find minimum speed/cap'", pattern: "Binary Search on Answer", time: "O(n log(range))", space: "O(1)" },
    { clue: "Next Greater / Next Smaller / Daily temperatures", pattern: "Monotonic Stack", time: "O(n)", space: "O(n)" },
    { clue: "Matching brackets, undo operations, nested syntax", pattern: "Stack (ArrayDeque)", time: "O(n)", space: "O(n)" },
    { clue: "First-in first-out, stream order, level order", pattern: "Queue (ArrayDeque / LinkedList)", time: "O(1) per op", space: "O(n)" },
    { clue: "Tree level-by-level traversal", pattern: "Breadth First Search (BFS)", time: "O(n)", space: "O(w)" },
    { clue: "Tree depth, path sums, branching recursion", pattern: "Depth First Search (DFS)", time: "O(n)", space: "O(h)" },
    { clue: "All combinations, permutations, subsets, board search", pattern: "Backtracking (Choose-Explore-Undo)", time: "Exponential", space: "O(depth)" },
    { clue: "Repeated overlapping subproblems + optimal substructure", pattern: "Dynamic Programming (Memo / Tabulation)", time: "Polynomial", space: "O(n) / O(1)" },
    { clue: "Locally optimal choice at each step", pattern: "Greedy Algorithm", time: "O(n) or O(n log n)", space: "O(1)" },
    { clue: "Top K elements, Kth largest, stream median", pattern: "Heap / PriorityQueue", time: "O(n log k)", space: "O(k)" },
    { clue: "Shortest unweighted path in a graph or grid", pattern: "BFS with Queue", time: "O(V + E)", space: "O(V)" },
    { clue: "Connected components, island count, flood fill", pattern: "DFS or BFS with Visited Set", time: "O(V + E)", space: "O(V)" },
    { clue: "BST in-order traversal yields sorted elements", pattern: "Binary Search Tree Property", time: "O(h)", space: "O(h)" },
    { clue: "Prefix search, autocomplete, dictionary matching", pattern: "Trie (Prefix Tree)", time: "O(length)", space: "O(alphabet * N)" },
    { clue: "Dynamic connectivity, disjoint sets, cycle in graph", pattern: "Disjoint Set Union (DSU)", time: "O(α(n))", space: "O(n)" }
  ],

  // Java DSA Cheatsheet
  javaSnippets: [
    {
      title: "Arrays & Sorting",
      code: `int[] arr = new int[n];
Arrays.sort(arr); // O(n log n)
Arrays.fill(arr, -1);
int[][] grid = new int[m][n];`
    },
    {
      title: "Dynamic Array (ArrayList)",
      code: `List<Integer> list = new ArrayList<>();
list.add(10);
int val = list.get(0);
list.remove(list.size() - 1); // remove last O(1)
Collections.sort(list);`
    },
    {
      title: "Strings & StringBuilder",
      code: `String s = "hello";
char c = s.charAt(0);
int len = s.length();
String sub = s.substring(0, 3); // "hel"
StringBuilder sb = new StringBuilder();
sb.append("a").append(123);
sb.reverse();
String res = sb.toString();`
    },
    {
      title: "HashMap & HashSet",
      code: `Map<Integer, Integer> map = new HashMap<>();
map.put(key, map.getOrDefault(key, 0) + 1); // Frequency count
if (map.containsKey(key)) { ... }

Set<Integer> set = new HashSet<>();
set.add(num);
boolean seen = set.contains(num);`
    },
    {
      title: "Stack (Use ArrayDeque!)",
      code: `// Stack class is legacy/synchronized. Use ArrayDeque:
Deque<Integer> stack = new ArrayDeque<>();
stack.push(val);
int top = stack.pop();
int peek = stack.peek();
boolean empty = stack.isEmpty();`
    },
    {
      title: "Queue & Deque",
      code: `Queue<Integer> q = new ArrayDeque<>();
q.offer(val); // add to end
int head = q.poll(); // remove from front
int front = q.peek();

Deque<Integer> deque = new ArrayDeque<>();
deque.addFirst(1); deque.addLast(2);
deque.removeFirst(); deque.removeLast();`
    },
    {
      title: "PriorityQueue (Min & Max Heap)",
      code: `// Min Heap (default)
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(5); minHeap.poll();

// Max Heap
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
// Custom comparator by frequency or coordinate:
PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);`
    }
  ],

  // All Problems mapped across Phases 0 to 17
  problems: [
    // --- PHASE 0: FOUNDATION (Day 1 - Sep 18) ---
    {
      id: "p0_1",
      phase: 0,
      phaseTitle: "Foundation",
      day: "Day 1 (Sep 18)",
      title: "Print Array Elements & Format",
      topic: "Foundation",
      difficulty: "Very Easy",
      pattern: "Linear Traversal",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/print-array-elements-using-recursion-or-iteration/",
      hint: "Practice basic for loop and array indexing arr[i]."
    },
    {
      id: "p0_2",
      phase: 0,
      phaseTitle: "Foundation",
      day: "Day 1 (Sep 18)",
      title: "Find Sum of All Array Elements",
      topic: "Foundation",
      difficulty: "Very Easy",
      pattern: "Linear Traversal",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/program-find-sum-elements-given-array/",
      hint: "Accumulator variable 'sum = 0'. Add arr[i] in each iteration."
    },
    {
      id: "p0_3",
      phase: 0,
      phaseTitle: "Foundation",
      day: "Day 1 (Sep 18)",
      title: "Find Maximum & Minimum in Array",
      topic: "Foundation",
      difficulty: "Very Easy",
      pattern: "Linear Traversal",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
      hint: "Initialize max = Integer.MIN_VALUE, min = Integer.MAX_VALUE. Update using Math.max/Math.min."
    },
    {
      id: "p0_4",
      phase: 0,
      phaseTitle: "Foundation",
      day: "Day 1 (Sep 18)",
      title: "Count Even and Odd Numbers",
      topic: "Foundation",
      difficulty: "Very Easy",
      pattern: "Linear Traversal",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/count-even-odd-elements-array/",
      hint: "Use modulo operator (num % 2 == 0) to check parity."
    },
    {
      id: "p0_5",
      phase: 0,
      phaseTitle: "Foundation",
      day: "Day 1 (Sep 18)",
      title: "Reverse Array In-Place",
      topic: "Foundation",
      difficulty: "Very Easy",
      pattern: "Two Pointers",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/program-to-reverse-an-array/",
      hint: "Pointers left = 0, right = n - 1. Swap arr[left] and arr[right] until left >= right."
    },
    {
      id: "p0_6",
      phase: 0,
      phaseTitle: "Foundation",
      day: "Day 1 (Sep 18)",
      title: "Linear Search Element in Array",
      topic: "Foundation",
      difficulty: "Very Easy",
      pattern: "Linear Traversal",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/linear-search/",
      hint: "Iterate from 0 to n-1. If arr[i] == target, return index; otherwise -1."
    },
    {
      id: "p0_7",
      phase: 0,
      phaseTitle: "Foundation",
      day: "Day 1 (Sep 18)",
      title: "Count Occurrences of an Element",
      topic: "Foundation",
      difficulty: "Very Easy",
      pattern: "Linear Traversal",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/",
      hint: "Maintain count = 0. Increment whenever arr[i] equals target."
    },
    {
      id: "p0_8",
      phase: 0,
      phaseTitle: "Foundation",
      day: "Day 1 (Sep 18)",
      title: "Find Second Largest Element in Array",
      topic: "Foundation",
      difficulty: "Easy",
      pattern: "Linear Traversal",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/find-second-largest-element-array/",
      hint: "Track largest and secondLargest in a single pass without sorting."
    },

    // --- MATH ADD-ON (Do alongside Day 1-5) ---
    {
      id: "pm_1",
      phase: 0,
      phaseTitle: "Foundation & Math",
      day: "Day 1–5",
      title: "Check Prime Number",
      topic: "Math",
      difficulty: "Very Easy",
      pattern: "Math & Divisibility",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/prime-numbers/",
      hint: "Check factors up to sqrt(n). If n <= 1 return false."
    },
    {
      id: "pm_2",
      phase: 0,
      phaseTitle: "Foundation & Math",
      day: "Day 1–5",
      title: "GCD / HCF (Euclidean Algorithm)",
      topic: "Math",
      difficulty: "Easy",
      pattern: "Euclidean GCD",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/euclidean-algorithms-tutorials/",
      hint: "gcd(a, b) = gcd(b, a % b). Base condition b == 0."
    },
    {
      id: "pm_3",
      phase: 0,
      phaseTitle: "Foundation & Math",
      day: "Day 1–5",
      title: "Palindrome Number (LC 9)",
      topic: "Math",
      difficulty: "Easy",
      pattern: "Digit Extraction",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/palindrome-number/",
      hint: "Revert half of the number to avoid 32-bit integer overflow."
    },
    {
      id: "pm_4",
      phase: 0,
      phaseTitle: "Foundation & Math",
      day: "Day 1–5",
      title: "Count Digits & Armstrong Number",
      topic: "Math",
      difficulty: "Easy",
      pattern: "Digit Extraction",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/program-for-armstrong-numbers/",
      hint: "Extract digits using num % 10 and num /= 10."
    },
    {
      id: "pm_5",
      phase: 0,
      phaseTitle: "Foundation & Math",
      day: "Day 1–5",
      title: "Sieve of Eratosthenes",
      topic: "Math",
      difficulty: "Easy-Medium",
      pattern: "Prime Sieve",
      platform: "GFG",
      url: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/",
      hint: "boolean[] isPrime. Mark multiples of each prime starting from p*p."
    },

    // --- PHASE 1: ARRAYS + LINEAR TRAVERSAL (Days 2–5) ---
    {
      id: "p1_1",
      phase: 1,
      phaseTitle: "Arrays & Linear Traversal",
      day: "Days 2–5",
      title: "Check if Array is Sorted and Rotated (LC 1752)",
      topic: "Arrays",
      difficulty: "Easy",
      pattern: "Linear Traversal",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
      hint: "Count how many times arr[i] > arr[(i+1)%n]. If count <= 1, it's sorted/rotated."
    },
    {
      id: "p1_2",
      phase: 1,
      phaseTitle: "Arrays & Linear Traversal",
      day: "Days 2–5",
      title: "Remove Duplicates from Sorted Array (LC 26)",
      topic: "Arrays",
      difficulty: "Easy",
      pattern: "Two Pointers (Fast/Slow)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      hint: "Maintain write pointer 'k'. If nums[i] != nums[k-1], copy nums[k++] = nums[i]."
    },
    {
      id: "p1_3",
      phase: 1,
      phaseTitle: "Arrays & Linear Traversal",
      day: "Days 2–5",
      title: "Move Zeroes (LC 283)",
      topic: "Arrays",
      difficulty: "Easy",
      pattern: "Two Pointers (Fast/Slow)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/move-zeroes/",
      hint: "Keep insertPos = 0. Move non-zeroes to insertPos, fill rest with 0."
    },
    {
      id: "p1_4",
      phase: 1,
      phaseTitle: "Arrays & Linear Traversal",
      day: "Days 2–5",
      title: "Missing Number (LC 268)",
      topic: "Arrays",
      difficulty: "Easy",
      pattern: "Math / XOR",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/missing-number/",
      hint: "Expected sum n*(n+1)/2 minus actual sum, or XOR 0..n with array elements."
    },
    {
      id: "p1_5",
      phase: 1,
      phaseTitle: "Arrays & Linear Traversal",
      day: "Days 2–5",
      title: "Single Number (LC 136)",
      topic: "Arrays",
      difficulty: "Easy",
      pattern: "Bit Manipulation (XOR)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/single-number/",
      hint: "x ^ x = 0, and x ^ 0 = x. XOR all elements together!"
    },
    {
      id: "p1_6",
      phase: 1,
      phaseTitle: "Arrays & Linear Traversal",
      day: "Days 2–5",
      title: "Find Pivot Index (LC 724)",
      topic: "Arrays",
      difficulty: "Easy",
      pattern: "Prefix Sum",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/find-pivot-index/",
      hint: "leftSum == totalSum - leftSum - nums[i]. Check at each index."
    },
    {
      id: "p1_7",
      phase: 1,
      phaseTitle: "Arrays & Linear Traversal",
      day: "Days 2–5",
      title: "Best Time to Buy and Sell Stock (LC 121)",
      topic: "Arrays",
      difficulty: "Easy",
      pattern: "Running Minimum / Greedy",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      hint: "Track minPrice seen so far. At each day, profit = price - minPrice."
    },

    // --- MATRIX ADD-ON (Between Arrays & Strings) ---
    {
      id: "pmat_1",
      phase: 1,
      phaseTitle: "Matrix Practice",
      day: "Days 4–5",
      title: "Transpose Matrix (LC 867)",
      topic: "Matrix",
      difficulty: "Easy",
      pattern: "Matrix Traversal",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/transpose-matrix/",
      hint: "result[j][i] = matrix[i][j]. New dimensions are cols x rows."
    },
    {
      id: "pmat_2",
      phase: 1,
      phaseTitle: "Matrix Practice",
      day: "Days 4–5",
      title: "Matrix Diagonal Sum (LC 1572)",
      topic: "Matrix",
      difficulty: "Easy",
      pattern: "Matrix Traversal",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/matrix-diagonal-sum/",
      hint: "Primary diag: [i][i], Secondary diag: [i][n - 1 - i]. Deduct center if n is odd."
    },
    {
      id: "pmat_3",
      phase: 1,
      phaseTitle: "Matrix Practice",
      day: "Days 4–5",
      title: "Reshape the Matrix (LC 566)",
      topic: "Matrix",
      difficulty: "Easy",
      pattern: "Index Mapping",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/reshape-the-matrix/",
      hint: "Map 1D index idx to [idx / c][idx % c]."
    },
    {
      id: "pmat_4",
      phase: 1,
      phaseTitle: "Matrix Practice",
      day: "Days 4–5",
      title: "Spiral Matrix (LC 54)",
      topic: "Matrix",
      difficulty: "Medium",
      pattern: "Boundary Traversal",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/spiral-matrix/",
      hint: "Track top, bottom, left, right bounds. Traverse and shrink boundaries."
    },
    {
      id: "pmat_5",
      phase: 1,
      phaseTitle: "Matrix Practice",
      day: "Days 4–5",
      title: "Rotate Image 90 Degrees Clockwise (LC 48)",
      topic: "Matrix",
      difficulty: "Medium",
      pattern: "Transpose + Reverse Rows",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/rotate-image/",
      hint: "1. Transpose matrix (swap matrix[i][j] with matrix[j][i]). 2. Reverse each row."
    },
    {
      id: "pmat_6",
      phase: 1,
      phaseTitle: "Matrix Practice",
      day: "Days 4–5",
      title: "Search a 2D Matrix (LC 74)",
      topic: "Matrix",
      difficulty: "Medium",
      pattern: "Binary Search",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/search-a-2d-matrix/",
      hint: "Treat m x n 2D matrix as 1D array of size m*n. mid mapped to [mid/n][mid%n]."
    },
    {
      id: "pmat_7",
      phase: 1,
      phaseTitle: "Matrix Practice",
      day: "Days 4–5",
      title: "Set Matrix Zeroes (LC 73)",
      topic: "Matrix",
      difficulty: "Medium",
      pattern: "In-place Markers",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/set-matrix-zeroes/",
      hint: "Use first row and first column as zero markers. Track col0 flag."
    },

    // --- PHASE 2: STRINGS + HASHING (Days 6–8) ---
    {
      id: "p2_1",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "Reverse String (LC 344)",
      topic: "Strings",
      difficulty: "Very Easy",
      pattern: "Two Pointers",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/reverse-string/",
      hint: "Swap chars from left and right until they meet in middle."
    },
    {
      id: "p2_2",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "Valid Palindrome (LC 125)",
      topic: "Strings",
      difficulty: "Easy",
      pattern: "Two Pointers",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/valid-palindrome/",
      hint: "Skip non-alphanumeric chars with Character.isLetterOrDigit(), compare lowercase."
    },
    {
      id: "p2_3",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "Valid Anagram (LC 242)",
      topic: "Strings",
      difficulty: "Easy",
      pattern: "Frequency Counting",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/valid-anagram/",
      hint: "Use int[26] array or HashMap to count char frequencies."
    },
    {
      id: "p2_4",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "First Unique Character in a String (LC 387)",
      topic: "Strings",
      difficulty: "Easy",
      pattern: "Frequency Counting",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/first-unique-character-in-a-string/",
      hint: "First pass counts frequency. Second pass finds first char with count == 1."
    },
    {
      id: "p2_5",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "Ransom Note (LC 383)",
      topic: "Strings",
      difficulty: "Easy",
      pattern: "Frequency Counting",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/ransom-note/",
      hint: "Count characters in magazine. Decrement for ransomNote; if < 0 return false."
    },
    {
      id: "p2_6",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "Longest Common Prefix (LC 14)",
      topic: "Strings",
      difficulty: "Easy",
      pattern: "Horizontal / Vertical Scanning",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/longest-common-prefix/",
      hint: "While strs[i].indexOf(prefix) != 0, prefix = prefix.substring(0, len - 1)."
    },
    {
      id: "p2_7",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "Two Sum (LC 1)",
      topic: "Hashing",
      difficulty: "Easy",
      pattern: "Complement Lookup (HashMap)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/two-sum/",
      hint: "Store {val: index} in map. Check if map contains (target - currentVal)."
    },
    {
      id: "p2_8",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "Contains Duplicate (LC 217)",
      topic: "Hashing",
      difficulty: "Easy",
      pattern: "HashSet Seen Before",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/contains-duplicate/",
      hint: "Insert into HashSet. If !set.add(num), return true immediately."
    },
    {
      id: "p2_9",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "Majority Element (LC 169)",
      topic: "Hashing",
      difficulty: "Easy",
      pattern: "Boyer-Moore Voting / HashMap",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/majority-element/",
      hint: "Boyer-Moore: candidate & count. Count++ if same, count-- if different."
    },
    {
      id: "p2_10",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "Intersection of Two Arrays (LC 349)",
      topic: "Hashing",
      difficulty: "Easy",
      pattern: "HashSet Intersection",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/intersection-of-two-arrays/",
      hint: "Put nums1 in set1. Filter nums2 that are in set1 into a result set."
    },
    {
      id: "p2_11",
      phase: 2,
      phaseTitle: "Strings & Hashing",
      day: "Days 6–8",
      title: "Happy Number (LC 202)",
      topic: "Hashing",
      difficulty: "Easy",
      pattern: "Cycle Detection (HashSet / Floyd)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/happy-number/",
      hint: "Sum squares of digits. If sum reaches 1 return true; if seen before in Set, cycle detected!"
    },

    // --- BIT MANIPULATION ADD-ON (After Arrays & Hashing) ---
    {
      id: "pbit_1",
      phase: 2,
      phaseTitle: "Bit Manipulation",
      day: "Days 7–8",
      title: "Number of 1 Bits - Hamming Weight (LC 191)",
      topic: "Bit Manipulation",
      difficulty: "Easy",
      pattern: "Bit Manipulation",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/number-of-1-bits/",
      hint: "Use n = n & (n - 1) to clear the lowest set bit repeatedly."
    },
    {
      id: "pbit_2",
      phase: 2,
      phaseTitle: "Bit Manipulation",
      day: "Days 7–8",
      title: "Counting Bits (LC 338)",
      topic: "Bit Manipulation",
      difficulty: "Easy",
      pattern: "Bit Manipulation + DP",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/counting-bits/",
      hint: "dp[i] = dp[i >> 1] + (i & 1)."
    },
    {
      id: "pbit_3",
      phase: 2,
      phaseTitle: "Bit Manipulation",
      day: "Days 7–8",
      title: "Power of Two (LC 231)",
      topic: "Bit Manipulation",
      difficulty: "Easy",
      pattern: "Bit Manipulation",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/power-of-two/",
      hint: "n > 0 && (n & (n - 1)) == 0."
    },
    {
      id: "pbit_4",
      phase: 2,
      phaseTitle: "Bit Manipulation",
      day: "Days 7–8",
      title: "Reverse Bits (LC 190)",
      topic: "Bit Manipulation",
      difficulty: "Easy",
      pattern: "Bit Shift",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/reverse-bits/",
      hint: "Shift res left, append n & 1, shift n right. Repeat 32 times."
    },

    // --- PHASE 3: TWO POINTERS (Days 9–11) ---
    {
      id: "p3_1",
      phase: 3,
      phaseTitle: "Two Pointers",
      day: "Days 9–11",
      title: "Two Sum II - Input Array Is Sorted (LC 167)",
      topic: "Two Pointers",
      difficulty: "Medium",
      pattern: "Two Pointers (Opposite Ends)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      hint: "Left = 0, right = n - 1. If sum > target right--, if sum < target left++."
    },
    {
      id: "p3_2",
      phase: 3,
      phaseTitle: "Two Pointers",
      day: "Days 9–11",
      title: "Valid Palindrome II (LC 680)",
      topic: "Two Pointers",
      difficulty: "Easy",
      pattern: "Two Pointers with 1 Skip",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/valid-palindrome-ii/",
      hint: "When mismatch, check if s[left+1..right] or s[left..right-1] is palindrome."
    },
    {
      id: "p3_3",
      phase: 3,
      phaseTitle: "Two Pointers",
      day: "Days 9–11",
      title: "Merge Sorted Array (LC 88)",
      topic: "Two Pointers",
      difficulty: "Easy",
      pattern: "Two Pointers (From End)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/merge-sorted-array/",
      hint: "Fill from index m + n - 1 backwards comparing nums1[p1] and nums2[p2]."
    },
    {
      id: "p3_4",
      phase: 3,
      phaseTitle: "Two Pointers",
      day: "Days 9–11",
      title: "Squares of a Sorted Array (LC 977)",
      topic: "Two Pointers",
      difficulty: "Easy",
      pattern: "Two Pointers (Opposite Ends)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      hint: "Compare squares at left and right. Put the larger square at the end of res array."
    },
    {
      id: "p3_5",
      phase: 3,
      phaseTitle: "Two Pointers",
      day: "Days 9–11",
      title: "Container With Most Water (LC 11)",
      topic: "Two Pointers",
      difficulty: "Medium",
      pattern: "Two Pointers Greedy",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/container-with-most-water/",
      hint: "Area = min(h[l], h[r]) * (r - l). Move pointer with the smaller height inward."
    },
    {
      id: "p3_6",
      phase: 3,
      phaseTitle: "Two Pointers",
      day: "Days 9–11",
      title: "3Sum (LC 15)",
      topic: "Two Pointers",
      difficulty: "Medium",
      pattern: "Sort + Two Pointers",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/3sum/",
      hint: "Sort array. Fix i, then run two pointers on i+1 to n-1. Skip duplicates!"
    },

    // --- PHASE 4: SORTING & BINARY SEARCH (Days 12–14) ---
    {
      id: "p4_1",
      phase: 4,
      phaseTitle: "Sorting & Binary Search",
      day: "Days 12–14",
      title: "Sort Colors - Dutch National Flag (LC 75)",
      topic: "Sorting",
      difficulty: "Medium",
      pattern: "3-Way Partitioning (0,1,2)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/sort-colors/",
      hint: "low, mid, high pointers. Swap 0s to low, 2s to high, advance mid for 1s."
    },
    {
      id: "p4_2",
      phase: 4,
      phaseTitle: "Sorting & Binary Search",
      day: "Days 12–14",
      title: "Binary Search (LC 704)",
      topic: "Binary Search",
      difficulty: "Easy",
      pattern: "Binary Search Core",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/binary-search/",
      hint: "mid = left + (right - left) / 2. Compare nums[mid] with target."
    },
    {
      id: "p4_3",
      phase: 4,
      phaseTitle: "Sorting & Binary Search",
      day: "Days 12–14",
      title: "Search Insert Position (LC 35)",
      topic: "Binary Search",
      difficulty: "Easy",
      pattern: "Binary Search Boundary",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/search-insert-position/",
      hint: "When while(left <= right) finishes, left is the exact insert position."
    },
    {
      id: "p4_4",
      phase: 4,
      phaseTitle: "Sorting & Binary Search",
      day: "Days 12–14",
      title: "First Bad Version (LC 278)",
      topic: "Binary Search",
      difficulty: "Easy",
      pattern: "Binary Search First Occurrence",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/first-bad-version/",
      hint: "If isBadVersion(mid) is true, answer is mid or left of mid (right = mid)."
    },
    {
      id: "p4_5",
      phase: 4,
      phaseTitle: "Sorting & Binary Search",
      day: "Days 12–14",
      title: "Sqrt(x) (LC 69)",
      topic: "Binary Search",
      difficulty: "Easy",
      pattern: "Binary Search on Value",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/sqrtx/",
      hint: "Binary search in range [1..x]. Use mid <= x / mid to prevent integer overflow."
    },
    {
      id: "p4_6",
      phase: 4,
      phaseTitle: "Sorting & Binary Search",
      day: "Days 12–14",
      title: "Find First and Last Position of Element (LC 34)",
      topic: "Binary Search",
      difficulty: "Medium",
      pattern: "Binary Search Bounds",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      hint: "Run binary search twice: once seeking leftmost match, once rightmost match."
    },
    {
      id: "p4_7",
      phase: 4,
      phaseTitle: "Sorting & Binary Search",
      day: "Days 12–14",
      title: "Search in Rotated Sorted Array (LC 33)",
      topic: "Binary Search",
      difficulty: "Medium",
      pattern: "Rotated Binary Search",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      hint: "One half is always sorted! Check if target lies in sorted half; adjust pointers."
    },
    {
      id: "p4_8",
      phase: 4,
      phaseTitle: "Sorting & Binary Search",
      day: "Days 12–14",
      title: "Find Minimum in Rotated Sorted Array (LC 153)",
      topic: "Binary Search",
      difficulty: "Medium",
      pattern: "Rotated Binary Search",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      hint: "If nums[mid] > nums[right], the pivot min is on right (left = mid + 1). Else right = mid."
    },
    {
      id: "p4_9",
      phase: 4,
      phaseTitle: "Sorting & Binary Search",
      day: "Days 12–14",
      title: "Koko Eating Bananas (LC 875)",
      topic: "Binary Search",
      difficulty: "Medium",
      pattern: "Binary Search on Answer",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/koko-eating-bananas/",
      hint: "Binary search speed k in [1, max(piles)]. Check total hours needed."
    },

    // --- PHASE 5: PREFIX SUM (Days 14–15) ---
    {
      id: "p5_1",
      phase: 5,
      phaseTitle: "Prefix Sum",
      day: "Days 14–15",
      title: "Running Sum of 1d Array (LC 1480)",
      topic: "Prefix Sum",
      difficulty: "Very Easy",
      pattern: "Prefix Sum",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/running-sum-of-1d-array/",
      hint: "nums[i] += nums[i - 1]."
    },
    {
      id: "p5_2",
      phase: 5,
      phaseTitle: "Prefix Sum",
      day: "Days 14–15",
      title: "Range Sum Query - Immutable (LC 303)",
      topic: "Prefix Sum",
      difficulty: "Easy",
      pattern: "Prefix Sum Array",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/range-sum-query-immutable/",
      hint: "sumRange(i, j) = prefix[j + 1] - prefix[i]."
    },
    {
      id: "p5_3",
      phase: 5,
      phaseTitle: "Prefix Sum",
      day: "Days 14–15",
      title: "Subarray Sum Equals K (LC 560)",
      topic: "Prefix Sum",
      difficulty: "Medium",
      pattern: "Prefix Sum + HashMap",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/subarray-sum-equals-k/",
      hint: "Map stores {prefixSum: frequency}. If map has (currentSum - k), add its count."
    },
    {
      id: "p5_4",
      phase: 5,
      phaseTitle: "Prefix Sum",
      day: "Days 14–15",
      title: "Product of Array Except Self (LC 238)",
      topic: "Prefix Sum",
      difficulty: "Medium",
      pattern: "Prefix & Suffix Products",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/product-of-array-except-self/",
      hint: "Compute prefix products in first pass, suffix products on the fly in second pass."
    },
    {
      id: "p5_5",
      phase: 5,
      phaseTitle: "Prefix Sum",
      day: "Days 14–15",
      title: "Continuous Subarray Sum (LC 523)",
      topic: "Prefix Sum",
      difficulty: "Medium",
      pattern: "Prefix Sum Modulo + Map",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/continuous-subarray-sum/",
      hint: "Store {remainder: firstSeenIndex}. If same remainder seen at index with gap >= 2, return true."
    },

    // --- PHASE 6: SLIDING WINDOW (Days 15–18) ---
    {
      id: "p6_1",
      phase: 6,
      phaseTitle: "Sliding Window",
      day: "Days 15–18",
      title: "Maximum Sum Subarray of Size K",
      topic: "Sliding Window",
      difficulty: "Easy",
      pattern: "Fixed Sliding Window",
      platform: "GFG",
      url: "https://www.geeksforgeeks.org/find-maximum-minimum-sum-subarray-size-k/",
      hint: "Build sum of first k elements. Then slide: sum += arr[i] - arr[i - k]."
    },
    {
      id: "p6_2",
      phase: 6,
      phaseTitle: "Sliding Window",
      day: "Days 15–18",
      title: "Maximum Number of Vowels in Substring of Length K (LC 1456)",
      topic: "Sliding Window",
      difficulty: "Medium",
      pattern: "Fixed Sliding Window",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
      hint: "Add 1 if incoming char is vowel, subtract 1 if outgoing char (i-k) is vowel."
    },
    {
      id: "p6_3",
      phase: 6,
      phaseTitle: "Sliding Window",
      day: "Days 15–18",
      title: "First Negative Number in Every Window of Size K",
      topic: "Sliding Window",
      difficulty: "Medium",
      pattern: "Fixed Window + Queue",
      platform: "GFG",
      url: "https://www.geeksforgeeks.org/first-negative-integer-every-window-size-k/",
      hint: "Maintain queue of negative indices in current window."
    },
    {
      id: "p6_4",
      phase: 6,
      phaseTitle: "Sliding Window",
      day: "Days 15–18",
      title: "Longest Substring Without Repeating Characters (LC 3)",
      topic: "Sliding Window",
      difficulty: "Medium",
      pattern: "Variable Sliding Window",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      hint: "Map char -> last seen index. When repeat char seen in window, jump left = map.get(c) + 1."
    },
    {
      id: "p6_5",
      phase: 6,
      phaseTitle: "Sliding Window",
      day: "Days 15–18",
      title: "Minimum Size Subarray Sum (LC 209)",
      topic: "Sliding Window",
      difficulty: "Medium",
      pattern: "Variable Sliding Window",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      hint: "Expand right until sum >= target. Then contract left while sum >= target to minimize length."
    },
    {
      id: "p6_6",
      phase: 6,
      phaseTitle: "Sliding Window",
      day: "Days 15–18",
      title: "Longest Repeating Character Replacement (LC 424)",
      topic: "Sliding Window",
      difficulty: "Medium",
      pattern: "Variable Sliding Window",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      hint: "Window size - maxFrequency <= k. If condition violated, advance left."
    },
    {
      id: "p6_7",
      phase: 6,
      phaseTitle: "Sliding Window",
      day: "Days 15–18",
      title: "Max Consecutive Ones III (LC 1004)",
      topic: "Sliding Window",
      difficulty: "Medium",
      pattern: "Variable Sliding Window",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/max-consecutive-ones-iii/",
      hint: "Count zeroes in window. When zeroes > k, shrink from left."
    },
    {
      id: "p6_8",
      phase: 6,
      phaseTitle: "Sliding Window",
      day: "Days 15–18",
      title: "Fruit Into Baskets (LC 904)",
      topic: "Sliding Window",
      difficulty: "Medium",
      pattern: "Variable Window (At most 2 distinct)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/fruit-into-baskets/",
      hint: "Find longest contiguous subarray with at most 2 distinct numbers."
    },
    {
      id: "p6_9",
      phase: 6,
      phaseTitle: "Sliding Window",
      day: "Days 15–18",
      title: "Permutation in String (LC 567)",
      topic: "Sliding Window",
      difficulty: "Medium",
      pattern: "Fixed Window + Frequency Match",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/permutation-in-string/",
      hint: "Window of size s1.length(). Compare 26-char frequency counts between window and s1."
    },
    {
      id: "p6_10",
      phase: 6,
      phaseTitle: "Sliding Window",
      day: "Days 15–18",
      title: "Minimum Window Substring (LC 76)",
      topic: "Sliding Window",
      difficulty: "Medium",
      pattern: "Variable Sliding Window (All Chars)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/minimum-window-substring/",
      hint: "Expand right until all required chars matched. Then shrink left to find minimum valid window."
    },

    // --- PHASE 7: LINKED LIST (Days 19–21) ---
    {
      id: "p7_1",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Middle of the Linked List (LC 876)",
      topic: "Linked List",
      difficulty: "Easy",
      pattern: "Fast & Slow Pointers",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/middle-of-the-linked-list/",
      hint: "Slow moves 1 step, fast moves 2 steps. When fast hits end, slow is at middle."
    },
    {
      id: "p7_2",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Reverse Linked List (LC 206)",
      topic: "Linked List",
      difficulty: "Easy",
      pattern: "In-Place Pointer Reversal",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/reverse-linked-list/",
      hint: "curr, prev, next. next = curr.next; curr.next = prev; prev = curr; curr = next."
    },
    {
      id: "p7_3",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Merge Two Sorted Lists (LC 21)",
      topic: "Linked List",
      difficulty: "Easy",
      pattern: "Dummy Node + Two Pointers",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/merge-two-sorted-lists/",
      hint: "Create dummy head. Attach smaller node of list1/list2 to tail."
    },
    {
      id: "p7_4",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Remove Linked List Elements (LC 203)",
      topic: "Linked List",
      difficulty: "Easy",
      pattern: "Dummy Node Pointer Traversal",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/remove-linked-list-elements/",
      hint: "Use dummy node pointing to head to cleanly handle deleting the head."
    },
    {
      id: "p7_5",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Remove Nth Node From End of List (LC 19)",
      topic: "Linked List",
      difficulty: "Medium",
      pattern: "Fast & Slow Pointers (Gap of N)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      hint: "Advance fast pointer n steps ahead. Then move both until fast hits end."
    },
    {
      id: "p7_6",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Palindrome Linked List (LC 234)",
      topic: "Linked List",
      difficulty: "Easy",
      pattern: "Find Middle + Reverse Second Half",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/palindrome-linked-list/",
      hint: "1. Find middle with slow/fast. 2. Reverse second half. 3. Compare values."
    },
    {
      id: "p7_7",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Linked List Cycle (LC 141)",
      topic: "Linked List",
      difficulty: "Easy",
      pattern: "Floyd's Tortoise & Hare",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/linked-list-cycle/",
      hint: "If slow == fast at any point, cycle exists. If fast reaches null, no cycle."
    },
    {
      id: "p7_8",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Intersection of Two Linked Lists (LC 160)",
      topic: "Linked List",
      difficulty: "Easy",
      pattern: "Two Pointers Equal Path",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      hint: "pA = pA == null ? headB : pA.next; When both switch heads, they traverse identical distance!"
    },
    {
      id: "p7_9",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Add Two Numbers (LC 2)",
      topic: "Linked List",
      difficulty: "Medium",
      pattern: "Dummy Node + Carry Math",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/add-two-numbers/",
      hint: "Track carry = sum / 10 and node val = sum % 10. Process until both lists and carry are empty."
    },
    {
      id: "p7_10",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Rotate List (LC 61)",
      topic: "Linked List",
      difficulty: "Medium",
      pattern: "Make Circular + Break",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/rotate-list/",
      hint: "Find length, connect tail to head to form ring. Break ring at length - (k % length)."
    },
    {
      id: "p7_11",
      phase: 7,
      phaseTitle: "Linked List",
      day: "Days 19–21",
      title: "Reorder List (LC 143)",
      topic: "Linked List",
      difficulty: "Medium",
      pattern: "Middle + Reverse + Interleave",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/reorder-list/",
      hint: "Find middle, reverse second half, merge first half and reversed second half alternately."
    },

    // --- PHASE 8: STACK + QUEUE (Days 22–24) ---
    {
      id: "p8_1",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Valid Parentheses (LC 20)",
      topic: "Stack",
      difficulty: "Easy",
      pattern: "Matching Parentheses (Stack)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/valid-parentheses/",
      hint: "Push expected closing bracket. If popped bracket != current, return false."
    },
    {
      id: "p8_2",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Remove All Adjacent Duplicates In String (LC 1047)",
      topic: "Stack",
      difficulty: "Easy",
      pattern: "Stack / StringBuilder as Stack",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
      hint: "If stack top matches current char, pop; otherwise push."
    },
    {
      id: "p8_3",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Min Stack (LC 155)",
      topic: "Stack",
      difficulty: "Medium",
      pattern: "Two Stacks / Value-Min Pair",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/min-stack/",
      hint: "Maintain second stack storing current minimum at each state."
    },
    {
      id: "p8_4",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Next Greater Element I (LC 496)",
      topic: "Stack",
      difficulty: "Easy",
      pattern: "Monotonic Stack",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/next-greater-element-i/",
      hint: "Monotonic decreasing stack. While stack.peek() < num, map.put(stack.pop(), num)."
    },
    {
      id: "p8_5",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Daily Temperatures (LC 739)",
      topic: "Stack",
      difficulty: "Medium",
      pattern: "Monotonic Stack (Indices)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/daily-temperatures/",
      hint: "Store indices in stack. While T[i] > T[stack.peek()], res[prev] = i - prev."
    },
    {
      id: "p8_6",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Online Stock Span (LC 901)",
      topic: "Stack",
      difficulty: "Medium",
      pattern: "Monotonic Stack (Price + Span)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/online-stock-span/",
      hint: "Stack stores [price, span]. While top price <= current price, add top span to current span."
    },
    {
      id: "p8_7",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Next Greater Element II - Circular (LC 503)",
      topic: "Stack",
      difficulty: "Medium",
      pattern: "Monotonic Stack (Circular 2*n)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/next-greater-element-ii/",
      hint: "Loop from 2*n - 1 down to 0, accessing elements at i % n."
    },
    {
      id: "p8_8",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Largest Rectangle in Histogram (LC 84)",
      topic: "Stack",
      difficulty: "Medium",
      pattern: "Monotonic Increasing Stack",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      hint: "Calculate previous smaller and next smaller bars using monotonic stack to find max width."
    },
    {
      id: "p8_9",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Implement Queue using Stacks (LC 232)",
      topic: "Queue",
      difficulty: "Easy",
      pattern: "Two Stacks In/Out",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/implement-queue-using-stacks/",
      hint: "inStack for push. outStack for pop/peek. Transfer when outStack is empty."
    },
    {
      id: "p8_10",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Implement Stack using Queues (LC 225)",
      topic: "Queue",
      difficulty: "Easy",
      pattern: "Queue Rotation",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/implement-stack-using-queues/",
      hint: "Push element, then rotate previous size elements by poll() and offer() back."
    },
    {
      id: "p8_11",
      phase: 8,
      phaseTitle: "Stack & Queue",
      day: "Days 22–24",
      title: "Design Circular Queue (LC 622)",
      topic: "Queue",
      difficulty: "Medium",
      pattern: "Ring Buffer Array",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/design-circular-queue/",
      hint: "Array of capacity k. Maintain head, tail, and size. Tail moves by (tail + 1) % k."
    },

    // --- PHASE 9: RECURSION (Day 25) ---
    {
      id: "p9_1",
      phase: 9,
      phaseTitle: "Recursion",
      day: "Day 25",
      title: "Print 1 to N and N to 1 Recursively",
      topic: "Recursion",
      difficulty: "Very Easy",
      pattern: "Base Case + Call Stack",
      platform: "Core Logic",
      url: "https://www.geeksforgeeks.org/print-1-to-n-without-using-loops/",
      hint: "Head recursion vs tail recursion. Identify the base condition."
    },
    {
      id: "p9_2",
      phase: 9,
      phaseTitle: "Recursion",
      day: "Day 25",
      title: "Fibonacci Number (LC 509)",
      topic: "Recursion",
      difficulty: "Very Easy",
      pattern: "Recurrence Relation",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/fibonacci-number/",
      hint: "f(n) = f(n-1) + f(n-2). Base cases f(0)=0, f(1)=1."
    },
    {
      id: "p9_3",
      phase: 9,
      phaseTitle: "Recursion",
      day: "Day 25",
      title: "Pow(x, n) (LC 50)",
      topic: "Recursion",
      difficulty: "Medium",
      pattern: "Binary Exponentiation",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/powx-n/",
      hint: "x^n = (x^2)^(n/2). If n is odd, multiply extra x. Handle negative n with long."
    },

    // --- PHASE 10: BACKTRACKING (Day 26) ---
    {
      id: "p10_1",
      phase: 10,
      phaseTitle: "Backtracking",
      day: "Day 26",
      title: "Subsets (LC 78)",
      topic: "Backtracking",
      difficulty: "Medium",
      pattern: "Choose - Explore - Undo",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/subsets/",
      hint: "For each index: add to path -> backtrack(i+1) -> remove from path."
    },
    {
      id: "p10_2",
      phase: 10,
      phaseTitle: "Backtracking",
      day: "Day 26",
      title: "Subsets II - With Duplicates (LC 90)",
      topic: "Backtracking",
      difficulty: "Medium",
      pattern: "Backtracking with Duplicate Pruning",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/subsets-ii/",
      hint: "Sort array first! If i > start && nums[i] == nums[i-1], skip to avoid duplicate subsets."
    },
    {
      id: "p10_3",
      phase: 10,
      phaseTitle: "Backtracking",
      day: "Day 26",
      title: "Permutations (LC 46)",
      topic: "Backtracking",
      difficulty: "Medium",
      pattern: "Backtracking with Visited / Swap",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/permutations/",
      hint: "Track boolean[] used. If not used, mark used, add to path, explore, undo."
    },
    {
      id: "p10_4",
      phase: 10,
      phaseTitle: "Backtracking",
      day: "Day 26",
      title: "Combination Sum (LC 39)",
      topic: "Backtracking",
      difficulty: "Medium",
      pattern: "Backtracking with Unbounded Choice",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/combination-sum/",
      hint: "Can reuse same element: pass same index i to next recursive call; subtract candidates[i] from remain."
    },
    {
      id: "p10_5",
      phase: 10,
      phaseTitle: "Backtracking",
      day: "Day 26",
      title: "Letter Combinations of a Phone Number (LC 17)",
      topic: "Backtracking",
      difficulty: "Medium",
      pattern: "Multi-branch Backtracking",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      hint: "Map digits '2'-'9' to letter strings. Recurse over each character of current digit."
    },
    {
      id: "p10_6",
      phase: 10,
      phaseTitle: "Backtracking",
      day: "Day 26",
      title: "Generate Parentheses (LC 22)",
      topic: "Backtracking",
      difficulty: "Medium",
      pattern: "Constrained Backtracking",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/generate-parentheses/",
      hint: "Add '(' if open < n. Add ')' if close < open. Both == n means valid combination!"
    },
    {
      id: "p10_7",
      phase: 10,
      phaseTitle: "Backtracking",
      day: "Day 26",
      title: "Rat in a Maze Problem",
      topic: "Backtracking",
      difficulty: "Medium",
      pattern: "Grid Backtracking (DLRU)",
      platform: "GFG",
      url: "https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/",
      hint: "Move in 4 directions 'D', 'L', 'R', 'U'. Mark cell visited, explore, unmark visited."
    },
    {
      id: "p10_8",
      phase: 10,
      phaseTitle: "Backtracking",
      day: "Day 26",
      title: "N-Queens (LC 51)",
      topic: "Backtracking",
      difficulty: "Medium",
      pattern: "Diagonal & Column Conflict Tracking",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/n-queens/",
      hint: "Track cols, diag1 (row - col), diag2 (row + col) sets to validate queen placement."
    },

    // --- PHASE 11: BINARY TREE (Day 27) ---
    {
      id: "p11_1",
      phase: 11,
      phaseTitle: "Binary Tree",
      day: "Day 27",
      title: "Maximum Depth of Binary Tree (LC 104)",
      topic: "Binary Tree",
      difficulty: "Easy",
      pattern: "Tree DFS / Height",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      hint: "return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))."
    },
    {
      id: "p11_2",
      phase: 11,
      phaseTitle: "Binary Tree",
      day: "Day 27",
      title: "Same Tree (LC 100)",
      topic: "Binary Tree",
      difficulty: "Easy",
      pattern: "Tree DFS Recursion",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/same-tree/",
      hint: "Check if both null (true), one null (false), values match, then recurse left and right."
    },
    {
      id: "p11_3",
      phase: 11,
      phaseTitle: "Binary Tree",
      day: "Day 27",
      title: "Invert Binary Tree (LC 226)",
      topic: "Binary Tree",
      difficulty: "Easy",
      pattern: "Tree DFS Mirroring",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/invert-binary-tree/",
      hint: "Swap root.left and root.right, then recursively invert both subtrees."
    },
    {
      id: "p11_4",
      phase: 11,
      phaseTitle: "Binary Tree",
      day: "Day 27",
      title: "Symmetric Tree (LC 101)",
      topic: "Binary Tree",
      difficulty: "Easy",
      pattern: "Mirror Tree Traversal",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/symmetric-tree/",
      hint: "Helper isMirror(t1, t2): compare t1.val == t2.val, and recurse (t1.left, t2.right) & (t1.right, t2.left)."
    },
    {
      id: "p11_5",
      phase: 11,
      phaseTitle: "Binary Tree",
      day: "Day 27",
      title: "Path Sum (LC 112)",
      topic: "Binary Tree",
      difficulty: "Easy",
      pattern: "Leaf Path DFS",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/path-sum/",
      hint: "If leaf node: check if targetSum == root.val. Otherwise recurse with targetSum - root.val."
    },
    {
      id: "p11_6",
      phase: 11,
      phaseTitle: "Binary Tree",
      day: "Day 27",
      title: "Diameter of Binary Tree (LC 543)",
      topic: "Binary Tree",
      difficulty: "Easy",
      pattern: "Tree Postorder / Bottom-Up",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/diameter-of-binary-tree/",
      hint: "At each node, diameter through node = leftHeight + rightHeight. Update global max."
    },
    {
      id: "p11_7",
      phase: 11,
      phaseTitle: "Binary Tree",
      day: "Day 27",
      title: "Binary Tree Level Order Traversal (LC 102)",
      topic: "Binary Tree",
      difficulty: "Medium",
      pattern: "BFS Level-by-Level (Queue)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      hint: "Use Queue. In while loop: int size = q.size(). Pop exact 'size' nodes for that level."
    },
    {
      id: "p11_8",
      phase: 11,
      phaseTitle: "Binary Tree",
      day: "Day 27",
      title: "Binary Tree Right Side View (LC 199)",
      topic: "Binary Tree",
      difficulty: "Medium",
      pattern: "BFS Level Last / Reverse Preorder",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-right-side-view/",
      hint: "BFS: take the last element of each level. Or DFS root->right->left taking first node at each depth."
    },
    {
      id: "p11_9",
      phase: 11,
      phaseTitle: "Binary Tree",
      day: "Day 27",
      title: "Balanced Binary Tree (LC 110)",
      topic: "Binary Tree",
      difficulty: "Easy",
      pattern: "Bottom-Up Height Checking",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/balanced-binary-tree/",
      hint: "Return -1 immediately if subtree is unbalanced (height difference > 1)."
    },

    // --- PHASE 12: BST (Day 28) ---
    {
      id: "p12_1",
      phase: 12,
      phaseTitle: "Binary Search Tree",
      day: "Day 28",
      title: "Search in a Binary Search Tree (LC 700)",
      topic: "BST",
      difficulty: "Easy",
      pattern: "BST Property Navigation",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
      hint: "If val < root.val go left, if val > root.val go right."
    },
    {
      id: "p12_2",
      phase: 12,
      phaseTitle: "Binary Search Tree",
      day: "Day 28",
      title: "Insert into a Binary Search Tree (LC 701)",
      topic: "BST",
      difficulty: "Medium",
      pattern: "BST Insertion",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
      hint: "Recurse left/right until reaching null, then create and return new TreeNode(val)."
    },
    {
      id: "p12_3",
      phase: 12,
      phaseTitle: "Binary Search Tree",
      day: "Day 28",
      title: "Validate Binary Search Tree (LC 98)",
      topic: "BST",
      difficulty: "Medium",
      pattern: "BST Range Bounds Validation",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/validate-binary-search-tree/",
      hint: "Validate with (min, max) bounds. root.left must be in (min, root.val); root.right in (root.val, max)."
    },
    {
      id: "p12_4",
      phase: 12,
      phaseTitle: "Binary Search Tree",
      day: "Day 28",
      title: "Lowest Common Ancestor of a BST (LC 235)",
      topic: "BST",
      difficulty: "Medium",
      pattern: "BST Split Point",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      hint: "If both p and q are smaller than root, go left. If both greater, go right. Otherwise root is LCA!"
    },
    {
      id: "p12_5",
      phase: 12,
      phaseTitle: "Binary Search Tree",
      day: "Day 28",
      title: "Kth Smallest Element in a BST (LC 230)",
      topic: "BST",
      difficulty: "Medium",
      pattern: "In-Order Traversal (Sorted)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      hint: "In-order traversal visits BST elements in strictly increasing order. Stop at count == k."
    },

    // --- PHASE 13: HEAP / PRIORITY QUEUE (Day 29) ---
    {
      id: "p13_1",
      phase: 13,
      phaseTitle: "Heap & PriorityQueue",
      day: "Day 29",
      title: "Kth Largest Element in an Array (LC 215)",
      topic: "Heap",
      difficulty: "Medium",
      pattern: "Min Heap of Size K",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      hint: "Maintain Min Heap of size k. Poll if size > k. Top of heap is kth largest."
    },
    {
      id: "p13_2",
      phase: 13,
      phaseTitle: "Heap & PriorityQueue",
      day: "Day 29",
      title: "Last Stone Weight (LC 1046)",
      topic: "Heap",
      difficulty: "Easy",
      pattern: "Max Heap Simulation",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/last-stone-weight/",
      hint: "PriorityQueue with Collections.reverseOrder(). Smash two largest stones repeatedly."
    },
    {
      id: "p13_3",
      phase: 13,
      phaseTitle: "Heap & PriorityQueue",
      day: "Day 29",
      title: "Top K Frequent Elements (LC 347)",
      topic: "Heap",
      difficulty: "Medium",
      pattern: "Frequency Map + Min Heap",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/top-k-frequent-elements/",
      hint: "Count frequencies in map. Push keys into min heap ordered by frequency, keeping size k."
    },
    {
      id: "p13_4",
      phase: 13,
      phaseTitle: "Heap & PriorityQueue",
      day: "Day 29",
      title: "K Closest Points to Origin (LC 973)",
      topic: "Heap",
      difficulty: "Medium",
      pattern: "Max Heap of Size K",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/k-closest-points-to-origin/",
      hint: "Max heap based on Euclidean distance x^2 + y^2. Keep size k."
    },
    {
      id: "p13_5",
      phase: 13,
      phaseTitle: "Heap & PriorityQueue",
      day: "Day 29",
      title: "Merge k Sorted Lists (LC 23)",
      topic: "Heap",
      difficulty: "Medium",
      pattern: "Min Heap on Node Values",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/merge-k-sorted-lists/",
      hint: "Push heads of all k lists into min heap. Extract min node, append to tail, push its next."
    },

    // --- PHASE 14: GREEDY (Day 30) ---
    {
      id: "p14_1",
      phase: 14,
      phaseTitle: "Greedy Algorithms",
      day: "Day 30",
      title: "Assign Cookies (LC 455)",
      topic: "Greedy",
      difficulty: "Easy",
      pattern: "Greedy Matching (Sort)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/assign-cookies/",
      hint: "Sort greed factors and cookie sizes. Satisfy smallest greed with smallest viable cookie."
    },
    {
      id: "p14_2",
      phase: 14,
      phaseTitle: "Greedy Algorithms",
      day: "Day 30",
      title: "Best Time to Buy and Sell Stock II (LC 122)",
      topic: "Greedy",
      difficulty: "Medium",
      pattern: "Greedy Peak-Valley",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      hint: "Capture every positive slope: if prices[i] > prices[i-1], add difference to profit!"
    },
    {
      id: "p14_3",
      phase: 14,
      phaseTitle: "Greedy Algorithms",
      day: "Day 30",
      title: "Jump Game (LC 55)",
      topic: "Greedy",
      difficulty: "Medium",
      pattern: "Greedy Reachable Bound",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/jump-game/",
      hint: "Track maxReach = Math.max(maxReach, i + nums[i]). If i > maxReach, cannot proceed."
    },
    {
      id: "p14_4",
      phase: 14,
      phaseTitle: "Greedy Algorithms",
      day: "Day 30",
      title: "Jump Game II (LC 45)",
      topic: "Greedy",
      difficulty: "Medium",
      pattern: "Greedy BFS Levels",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/jump-game-ii/",
      hint: "Track curEnd and farthest. When i reaches curEnd, jump++, curEnd = farthest."
    },
    {
      id: "p14_5",
      phase: 14,
      phaseTitle: "Greedy Algorithms",
      day: "Day 30",
      title: "Gas Station (LC 134)",
      topic: "Greedy",
      difficulty: "Medium",
      pattern: "Running Sum Reset",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/gas-station/",
      hint: "If total gas < total cost, return -1. If tank drops < 0, reset start = i + 1, tank = 0."
    },
    {
      id: "p14_6",
      phase: 14,
      phaseTitle: "Greedy Algorithms",
      day: "Day 30",
      title: "Partition Labels (LC 763)",
      topic: "Greedy",
      difficulty: "Medium",
      pattern: "Last Occurrence Interval Greedy",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/partition-labels/",
      hint: "Store last index of each char. Expand partition end = Math.max(end, last[c]). At i == end, cut!"
    },
    {
      id: "p14_7",
      phase: 14,
      phaseTitle: "Greedy Algorithms",
      day: "Day 30",
      title: "Lemonade Change (LC 860)",
      topic: "Greedy",
      difficulty: "Easy",
      pattern: "Greedy Change Making",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/lemonade-change/",
      hint: "For $20 bill, greedily give $10 + $5 bill first before three $5 bills."
    },

    // --- PHASE 15: GRAPH (Day 31) ---
    {
      id: "p15_1",
      phase: 15,
      phaseTitle: "Graph & Grid BFS/DFS",
      day: "Day 31",
      title: "Number of Islands (LC 200)",
      topic: "Graph",
      difficulty: "Medium",
      pattern: "Grid DFS / BFS Connected Components",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/number-of-islands/",
      hint: "When '1' found, islands++. Sink all connected land to '0' using recursive DFS in 4 directions."
    },
    {
      id: "p15_2",
      phase: 15,
      phaseTitle: "Graph & Grid BFS/DFS",
      day: "Day 31",
      title: "Flood Fill (LC 733)",
      topic: "Graph",
      difficulty: "Easy",
      pattern: "Grid DFS / BFS",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/flood-fill/",
      hint: "If image[sr][sc] == color return image. Recurse in 4 directions matching originalColor."
    },
    {
      id: "p15_3",
      phase: 15,
      phaseTitle: "Graph & Grid BFS/DFS",
      day: "Day 31",
      title: "Find if Path Exists in Graph (LC 1971)",
      topic: "Graph",
      difficulty: "Easy",
      pattern: "Graph BFS / DFS / DSU",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/find-if-path-exists-in-graph/",
      hint: "Build adjacency list ArrayList<List<Integer>>. Run BFS starting from source; check if dest reached."
    },
    {
      id: "p15_4",
      phase: 15,
      phaseTitle: "Graph & Grid BFS/DFS",
      day: "Day 31",
      title: "Number of Provinces (LC 547)",
      topic: "Graph",
      difficulty: "Medium",
      pattern: "Connected Components (DFS)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/number-of-provinces/",
      hint: "For each unvisited city, provinces++, DFS all connected cities marking visited[i] = true."
    },
    {
      id: "p15_5",
      phase: 15,
      phaseTitle: "Graph & Grid BFS/DFS",
      day: "Day 31",
      title: "Rotting Oranges (LC 994)",
      topic: "Graph",
      difficulty: "Medium",
      pattern: "Multi-Source BFS",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/rotting-oranges/",
      hint: "Add all rotten oranges to Queue at minute 0. Count fresh oranges. BFS level by level."
    },
    {
      id: "p15_6",
      phase: 15,
      phaseTitle: "Graph & Grid BFS/DFS",
      day: "Day 31",
      title: "Clone Graph (LC 133)",
      topic: "Graph",
      difficulty: "Medium",
      pattern: "Graph DFS + HashMap",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/clone-graph/",
      hint: "HashMap<Node, Node> maps original to clone. Recurse neighbors, avoid infinite cycles."
    },
    {
      id: "p15_7",
      phase: 15,
      phaseTitle: "Graph & Grid BFS/DFS",
      day: "Day 31",
      title: "Course Schedule - Cycle Detection (LC 207)",
      topic: "Graph",
      difficulty: "Medium",
      pattern: "Topological Sort (Kahn's / DFS)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/course-schedule/",
      hint: "Kahn's Algorithm: compute inDegrees. Enqueue nodes with inDegree 0. If visited != numCourses, cycle!"
    },

    // --- PHASE 16: DYNAMIC PROGRAMMING (Day 32) ---
    {
      id: "p16_1",
      phase: 16,
      phaseTitle: "Dynamic Programming",
      day: "Day 32",
      title: "Climbing Stairs (LC 70)",
      topic: "DP",
      difficulty: "Easy",
      pattern: "1D DP (Fibonacci)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/climbing-stairs/",
      hint: "ways(n) = ways(n-1) + ways(n-2). Space optimize with two variables."
    },
    {
      id: "p16_2",
      phase: 16,
      phaseTitle: "Dynamic Programming",
      day: "Day 32",
      title: "Min Cost Climbing Stairs (LC 746)",
      topic: "DP",
      difficulty: "Easy",
      pattern: "1D DP Cost Accumulation",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/min-cost-climbing-stairs/",
      hint: "dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])."
    },
    {
      id: "p16_3",
      phase: 16,
      phaseTitle: "Dynamic Programming",
      day: "Day 32",
      title: "House Robber (LC 198)",
      topic: "DP",
      difficulty: "Medium",
      pattern: "Choice DP (Rob or Skip)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/house-robber/",
      hint: "dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]). Space optimize with prev1 & prev2."
    },
    {
      id: "p16_4",
      phase: 16,
      phaseTitle: "Dynamic Programming",
      day: "Day 32",
      title: "House Robber II - Circular (LC 213)",
      topic: "DP",
      difficulty: "Medium",
      pattern: "Choice DP on Circular Array",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/house-robber-ii/",
      hint: "First and last houses are adjacent: run House Robber on [0..n-2] and [1..n-1], take max."
    },
    {
      id: "p16_5",
      phase: 16,
      phaseTitle: "Dynamic Programming",
      day: "Day 32",
      title: "Coin Change (LC 322)",
      topic: "DP",
      difficulty: "Medium",
      pattern: "Unbounded Knapsack / Min Coins",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/coin-change/",
      hint: "dp[amount] = 1 + min(dp[amount - coin]). Initialize array with amount + 1."
    },
    {
      id: "p16_6",
      phase: 16,
      phaseTitle: "Dynamic Programming",
      day: "Day 32",
      title: "Partition Equal Subset Sum (LC 416)",
      topic: "DP",
      difficulty: "Medium",
      pattern: "0/1 Knapsack (Subset Sum)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/partition-equal-subset-sum/",
      hint: "If total sum is odd, return false. Find if subset sum equals total / 2 using 1D boolean dp."
    },
    {
      id: "p16_7",
      phase: 16,
      phaseTitle: "Dynamic Programming",
      day: "Day 32",
      title: "Longest Increasing Subsequence (LC 300)",
      topic: "DP",
      difficulty: "Medium",
      pattern: "LIS (O(n²) DP or O(n log n) Binary Search)",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/longest-increasing-subsequence/",
      hint: "dp[i] = 1 + max(dp[j]) for j < i and nums[j] < nums[i]. Or tails array with binary search."
    },
    {
      id: "p16_8",
      phase: 16,
      phaseTitle: "Dynamic Programming",
      day: "Day 32",
      title: "Longest Common Subsequence (LC 1143)",
      topic: "DP",
      difficulty: "Medium",
      pattern: "2D String DP",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/longest-common-subsequence/",
      hint: "If text1[i] == text2[j]: 1 + dp[i-1][j-1]. Else: Math.max(dp[i-1][j], dp[i][j-1])."
    },

    // --- PHASE 17: FINAL REVISION SPRINT (Day 33 - Oct 20) ---
    {
      id: "p17_1",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 1: Two Sum",
      topic: "Hashing",
      difficulty: "Easy",
      pattern: "Complement Lookup",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/two-sum/",
      hint: "Solve without looking at tags! What is the input? What pattern? Why this pattern?"
    },
    {
      id: "p17_2",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 2: Best Time to Buy & Sell Stock",
      topic: "Arrays",
      difficulty: "Easy",
      pattern: "Running Minimum",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      hint: "Identify optimal purchase point on the fly."
    },
    {
      id: "p17_3",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 3: Valid Anagram",
      topic: "Strings",
      difficulty: "Easy",
      pattern: "Frequency Counting",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/valid-anagram/",
      hint: "Test frequency counting and early length check."
    },
    {
      id: "p17_4",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 4: Binary Search",
      topic: "Binary Search",
      difficulty: "Easy",
      pattern: "Binary Search",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/binary-search/",
      hint: "Precision boundary conditions left <= right, mid calculation."
    },
    {
      id: "p17_5",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 5: Two Sum II",
      topic: "Two Pointers",
      difficulty: "Medium",
      pattern: "Opposite Ends Two Pointers",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      hint: "Sorted array clue -> Two Pointers."
    },
    {
      id: "p17_6",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 6: Longest Substring Without Repeating",
      topic: "Sliding Window",
      difficulty: "Medium",
      pattern: "Variable Sliding Window",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      hint: "Substrings clue -> Sliding Window with seen hash map."
    },
    {
      id: "p17_7",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 7: Reverse Linked List",
      topic: "Linked List",
      difficulty: "Easy",
      pattern: "Pointer Inversion",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/reverse-linked-list/",
      hint: "Three-pointer inversion from memory."
    },
    {
      id: "p17_8",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 8: Valid Parentheses",
      topic: "Stack",
      difficulty: "Easy",
      pattern: "LIFO Stack Matching",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/valid-parentheses/",
      hint: "ArrayDeque stack matching with early termination."
    },
    {
      id: "p17_9",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 9: Daily Temperatures",
      topic: "Stack",
      difficulty: "Medium",
      pattern: "Monotonic Stack",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/daily-temperatures/",
      hint: "'Next warmer temperature' clue -> Monotonic Stack."
    },
    {
      id: "p17_10",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 10: Maximum Depth of Binary Tree",
      topic: "Binary Tree",
      difficulty: "Easy",
      pattern: "Tree DFS",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      hint: "Divide and conquer tree recursion."
    },
    {
      id: "p17_11",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 11: Number of Islands",
      topic: "Graph",
      difficulty: "Medium",
      pattern: "Grid DFS",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/number-of-islands/",
      hint: "Connected component sinking in 4 directions."
    },
    {
      id: "p17_12",
      phase: 17,
      phaseTitle: "Final Revision Sprint",
      day: "Day 33 (Oct 20)",
      title: "Revision Sprint 12: Climbing Stairs",
      topic: "DP",
      difficulty: "Easy",
      pattern: "1D DP / Fibonacci",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/climbing-stairs/",
      hint: "Subproblems overlapping -> DP with O(1) space."
    }
  ]
};
