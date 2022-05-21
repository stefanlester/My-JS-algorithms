function solution(A) {
    A = [...new Set(A.sort( (a,b) => a-b))];

    if((A[0] > 1) || (A[A.length - 1] < 1)) return 1;

    for (let i in A) {
        let nextNum = A[+i+1];
        if(A[i] === nextNum) continue;
        if((nextNum - A[i]) !== 1) {
            if(A[i] < 0 ) {
                if(A.indexOf(1) !== -1) continue;
                return 1;
            }
            return A[i] + 1;
        }
    }
}

console.log(solution([1, 2, 0, 3, 4, 5, 6, 7, 8, 9]));