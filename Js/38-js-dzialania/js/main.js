let a = 1;
let b = 2;

function math(a, b) {

    let resultAdd = a + b;
    let resultSubstraction = a - b;
    let resultMultiply = a * b;


    function add(a, b) {
        if (resultAdd > 0) {
            let resultAdd = a + b;
            return 'Wynik dodawania wynosi' + resultAdd
        }
        else if (resultAdd < 0) {
            let resultAdd = a + b;
            return "Wynik jest nieprawidłowy";
        }
    }
    console.log(add(a, b));


    function substraction(a, b) {

        if (resultSubstraction > 0) {
            let resultSubstraction = a - b;
            return 'Wynik odejmowania wynosi' + resultSubstraction

        }

        else if (resultSubstraction < 0) {
            let resultSubstraction = a - b;
            return "Wynik jest nieprawidłowy";
        }
    }
    console.log(substraction(a, b));

    function multiply(a, b) {

        if (resultMultiply > 0) {
            let resultMultiply = a * b;
            return 'Wynik mnozenia wynosi' + resultMultiply;
        }


        else if (resultMultiply < 0) {

            let resultMultiply = a * b;
            return "Wynik jest nieprawidłowy";
        }

    }
    console.log(multiply(a, b));
}

(math(a, b));