function sortedSquared(array) {
    const newArray = new Array(array.length).fill(0);
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i] * array[i];
    }
    newArray.sort((a, b) => a - b);
}