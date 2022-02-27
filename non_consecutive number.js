function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        const next = arr[i + 1];

        if(curr +1 !== next) {
            return next
        }
    }
}