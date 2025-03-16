// BEGIN
export const swap = (arr) => {
    if (arr.length < 2)
        return arr;
    let dop = arr[0];
    arr[0] = arr.at(-1);
    arr[arr.length - 1] = dop;
    return arr;
}
// END