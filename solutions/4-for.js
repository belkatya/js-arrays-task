// BEGIN
export default (text, prefix) => {
    let newText = [];
    for (const i of text) {
        newText.push(`${prefix} ${i}`);
    }
    return newText;
}
// END