let form = document.getElementById('form');

const submitFun = (event) => {
    event.preventDefault();
    let fname = document.querySelector('[name="fname"]');
    let lname = document.querySelector('[name="lname"]');

    console.log(`Imię to: ` +fname.value);
    console.log(`Nazwisko to: ` +lname.value);
}

form.addEventListener('submit', submitFun);