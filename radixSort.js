// COMPARISON SORTS

// Average Time Complexity:
// Bubble Sort - O(n^2)
// Insertion Sort - O(n^2)
// Selection Sort - O(n^2)
// Quick Sort - O(n log (n))
// Merge Sort - O(n log (n))

// Can we do better? YES, BUT NOT BY MAKING COMPARISONS

// RADIX SORT:
// Radix sort is a special sorting algorithm that works on lists of numbers
// It never makes comparisons between elements!
// It exploits the fact that information about the size of a number is encoded in the number of digits.
// More digits means a bigger number!

// RADIX SORT BIG O:
// Time Complexity (Best)     - O(nk)
// Time Complexity (Average)  - O(nk)
// Time Complexity (Worst)    - O(nk)
// Space Complexity           - O(n + k)
// n - length of array