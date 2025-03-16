// BEGIN
export default (arr) => {
    const flag = Math.abs(arr[0]) % 2
    let newArr = []
    for (const i of arr) {
        if (Math.abs(i) % 2 === flag) {
            newArr.push(i);
        }
    }
    return newArr;
}
// END