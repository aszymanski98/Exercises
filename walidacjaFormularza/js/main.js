let form = document.getElementById('form');
let allAgreeChk = document.getElementById('agree-all');
let agree1 = document.getElementById('agree-1');

const validate = (event) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    const liShow = (string) => {
        let errorName = document.createElement('li');
        errorName.innerText = string;
        errors.appendChild(errorName);
    }

    if (name.value.trim() === '') {
        liShow('Nie wypełniłeś pola Imię i nazwisko!');
    }

    if (email.value.trim() === '') {
        liShow('Nie podałeś adresu e-mail!');
    }

    if (!email.value.includes("@")) {
        liShow('Adres e-mail musi zawierać znak @!');
    }

    if (!agree1.checked) {
        liShow('Musisz wyrazić zgodę numer 1!');
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }
}

const allAgree = (event) => {
    let agree2 = document.getElementById('agree-2');

    console.log(event);
    console.log(event.target);
    console.log(event.target.checked);

    /* agree1.checked = event.target.checked;
    agree2.checked = event.target.checked; */

    if (allAgreeChk.checked) {
        console.log(agree1);
        agree1.checked = true;
        agree2.checked = true;
    } else {
        agree1.checked = false;
        agree2.checked = false;
    }

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

form.addEventListener('submit', validate);
allAgreeChk.addEventListener('change', allAgree);