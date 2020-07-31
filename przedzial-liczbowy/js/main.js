let dodaj = document.getElementById("dodaj");
let usun = document.getElementById("usun");
let paragraf = document.getElementById("tekst");

dodaj.onclick = function(){
    paragraf.innerText = "Jakiś tam tekst";
}

usun.onclick = function(){
    paragraf.innerText = "";
}