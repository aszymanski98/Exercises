
var name1 = document.getElementById('name');
var surname = document.getElementById('surname');
var phone = document.getElementById('phone');
var button = document.querySelector('button');


button.onclick = function dane() {
    var str1 = document.getElementById('input1');
    var str2 = document.getElementById('input2');
    var str3 = document.getElementById('input3');

    name1.innerText = str1.value;
    surname.innerText = str2.value;
    phone.innerText = str3.value;
}