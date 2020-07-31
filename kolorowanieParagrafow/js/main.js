const setBackground = () => {
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');

    p1.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'yellow';
}

document.querySelector('button').addEventListener('click', setBackground);