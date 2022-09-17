let str = 'Uwielbiam JavaScript';
let text1 = str.length;

let str2 = 'Jestem świetnym programistą';
let text2 = str2.length;

function moreTxt(text1, text2) {
if (text1 < text2) {
    let result = text2;
    return str2;
    
} else if (text1 > text2) {
    let result = text1;
    return  str;
}
}

console.log(moreTxt(text1, text2));
