// BEGIN
export default (arr) => {
    if (arr.length === 0) {
        return null;
    }
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }
    return sum / arr.length;
}
// END