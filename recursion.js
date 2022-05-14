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