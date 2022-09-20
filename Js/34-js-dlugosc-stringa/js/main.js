let str = 'Uwielbiam JavaScript';
let str2 = 'Jestem świetnym programistą';


function moreTxt(str, str2) {

    let text1 = str.length;
    let text2 = str2.length;

    if (text1 < text2) {
        let result = text2;
        return str2;

    } else if (text1 > text2) {
        let result = text1;
        return str;
    }
}

console.log(moreTxt(str, str2));
