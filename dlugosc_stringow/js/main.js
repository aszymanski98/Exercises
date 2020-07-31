let string = "Uwielbiam JavaScript";
let string2 = "Jestem świetnym programistą";

function dlugosc(string, string2) {
    if (string.length > string2.length) {
        return string;
    } else {
        return string2;
    }
}

console.log(dlugosc(string, string2));
