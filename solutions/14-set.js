// BEGIN
export default (str) => {
    if (str.length === 0) {
        return 0;
    }
    let chars = [];
    for (const i of str) {
        if (!(chars.includes(i))) {
            chars.push(i);
        }
    }
    return chars.length;
}
// END