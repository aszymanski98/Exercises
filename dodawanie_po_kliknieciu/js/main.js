let paragraf = document.getElementById("opis");
let przycisk = document.querySelector('button');

przycisk.onclick = function () {
    paragraf.textContent = "Dowolny tekst został dodany za pomocą js";
}