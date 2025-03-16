// BEGIN
export const get = (arr, index, defaultValue = null) => {
    if (index < arr.length && index >= 0)
        return arr[index];
    return defaultValue;
}
// END