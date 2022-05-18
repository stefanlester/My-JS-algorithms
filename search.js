// Linear Search - O(n)
function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)


// Binary Search - O( log(n) )
// Binary search is a much faster form of search
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time (Divide and Conquer)
// Binary search only works on sorted arrays!

function binarySearch(arr, ele) {
    let start = 0;
    let end = arr.length -1
    let middle = Math.floor((start + end) / 2)


    while(arr[middle] !== ele && start <= end) {

      if(ele > arr[middle]) {
         start = middle + 1
      } else if (ele < arr[middle]) {
        end = middle - 1
      }

      middle = Math.floor((start + end) / 2)
    }

     if( arr[middle] === ele) {
       return middle
     } else {
       return -1
     }
}


// const binarySearch = (nums, target) => {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     const foundVal = nums[mid];
//     if (foundVal === target) {
//       return mid;
//     } else if (foundVal < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//
//   return null;
// };

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 100], 10))

