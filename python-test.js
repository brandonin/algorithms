
// Let S be the set of all integers x where 1 <= x <= n. Implement a callable f(n) that accepts a positive integer n, returning the number of all sets of distinct subsets S1 and S2 that can be extracted from S such that (S1 | S2 == S) and (S1 & S2 == set()) and (sum(S1) == sum(S2)). For example:
// INPUT: n=3
// S: {1, 2, 3}
// OUTPUT: 1
// VALID SETS: [{{1, 2}, {3}}]

// 4a. What are the time and space efficiencies of your solution?

// 4b. Suppose your f() implementation must run every time a human user makes a request to a single modern web server, and finish before a response can be sent back; can you estimate the largest practical value of n your implementation supports in that case?

// 4c. Can you think of a way to improve the time and space efficiencies of f()?  If so, code (or at least describe) this improved solution, estimate its efficiencies, and the new practical upper limit it allows for n in the server scenario above.

// 3a. How would your answer to the question  change if the files are encoded in UTF-8 instead of ASCII? Would it make a difference if your target platform is Python 3.3 instead of 2.7 in this case?

