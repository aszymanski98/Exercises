let a;
let b;

function operacje(a, b) {
    if ((a + b) >= 0) {
        console.log("Wynikiem dodawania jest " + (a + b));
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

    if ((a - b) >= 0) {
        console.log("Wynikiem odejmowania jest " + (a - b));
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

    if ((a * b) >= 0) {
        console.log("Wynikiem mnożenia jest " + (a * b));
    } else {
        console.log("Wynik jest nieprawidłowy");
    }
}

operacje(1, 2);