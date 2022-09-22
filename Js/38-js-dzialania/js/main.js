let a = 1;
let b = 2;

function math(a, b) {

    let resultAdd = a + b;
    let resultSubstraction = a - b;
    let resultMultiply = a * b;


    if (resultAdd >= 0) {
        console.log('Wynik dodawania wynosi' + resultAdd);
    }
    else {
        console.log("Wynik jest nieprawidłowy");
    }

    if (resultSubstraction > 0) {
        console.log('Wynik odejmowania wynosi' + resultSubstraction);
    }

    else {
        console.log("Wynik jest nieprawidłowy");
    }


    if (resultMultiply > 0) {
        console.log('Wynik mnozenia wynosi' + resultMultiply);
    }


    else {
        console.log("Wynik jest nieprawidłowy");
    }
}
(math(a, b));