// what's the smallest amount or unit of work I can do to contribute to reach
// the end goal (base case)



// Recursive Version
function countDown(num) {
    // base case
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num) {
    for (var i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All done!")
}

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

sumRange(4)
// return 4 + sumRange(3)
//               return 3 + sumRange(2)
//                             return 2 + sumRange(1)
//                                           return 1
//
//   4      +     3         +      2      +     1
//
//  10


function factorialIterative(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}