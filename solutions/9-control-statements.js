// BEGIN
export default (arrMoney, currency) => {
    let result = 0;
    for (const i of arrMoney) {
        if (currency === i.slice(0, 3)) {
            result += Number(i.slice(4));
        }
    }
    return result;
}
// END