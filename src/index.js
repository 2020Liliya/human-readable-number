module.exports = function toReadable(number) {
    let digitArray = Array.from(number.toString(), Number); // [1, 0, 5]
    const array1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const array2 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = '';

    if (number < 20) {
        return array1[number];
    } else if (number >= 20 && number < 100) {
        if (digitArray[1] === 0) {
            return array2[digitArray[0] - 1];
        } else {
            return array2[digitArray[0] - 1] + ' ' + array1[digitArray[1]];
        }
    } else {
        if (digitArray[1] === 0 && digitArray[2] === 0) {
            str = '';
        } else if (digitArray[1] === 0) {
            str = ' ' + array1[digitArray[2]];
        } else if (digitArray[2] === 0) {
            str = ' ' + array2[digitArray[1] - 1];
        } else if (digitArray[1] === 1 && digitArray[2] !== 0) {
            str = ' ' + array1[Number(number.toString().slice(1))];
        } else if (digitArray[1] !== 0 && digitArray[2] === 0) {
            str = ' ' + array2[digitArray[1] - 1];
        }
        else {
            str = ' ' + array2[digitArray[1] - 1] + ' ' + array1[digitArray[2]];
        }
        return array1[digitArray[0]] + ' hundred' + str;
    }
}
