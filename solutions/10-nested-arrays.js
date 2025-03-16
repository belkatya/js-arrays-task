// BEGIN
export default (arrSeries) => {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < arrSeries.length; i += 1) {
        let res = Math.sign(arrSeries[i][0]-arrSeries[i][1])
        switch (res)
        {
            case 1:
                count1 += 1;
                break;
            case -1:
                count2 += 1;
                break;
            default:
                break;
        }
    }
    if (count1 > count2) {
        return 'canada';
    }
    else if (count1 < count2) {
        return 'ussr';
    }
    else {
        return null;
    }
}
// END