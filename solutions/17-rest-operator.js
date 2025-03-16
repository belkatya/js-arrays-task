// BEGIN
export const getMax = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    let [first, ...rest] = arr;
    let maxNumber = first;
    for (const num of rest) {
        maxNumber = Math.max(maxNumber, num);
    }
    return maxNumber;
}
// END