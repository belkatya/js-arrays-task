// BEGIN
export default (arr) => {
    if (arr.length === 0) {
        return '';
    }
    let result = [];
    for (let first of arr) {
        result = `${result}<dt>${first[0]}</dt><dd>${first[1]}</dd>`;
    }  
    return '<dl>' + result + '</dl>';
}
// END