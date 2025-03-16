// BEGIN
export const flatten = (arr) => {
    if (arr.length === 0) {
        return arr;
    }
    let newArr = [];
    for (const item of arr) {
        Array.isArray(item) ? newArr.push(...item) : newArr.push(item);
    }
    return newArr;
}
// END