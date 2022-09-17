let dowolna = n;

function check(dowolna) {
    if (dowolna >= 100 && dowolna <= 200) {
        let result = "Liczba znajduje się w przedziale"
        return result;
    } else  {
        let result = "Liczba nie znajduje się w przedziale"
        return result;
    }
}

console.log(check(dowolna));