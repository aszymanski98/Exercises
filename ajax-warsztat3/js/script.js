const preloaderFun = (styleVal) => {
    let preloader = document.getElementById('preloader');
    preloader.style.display = styleVal;
}

const scrollToEndOfPage = (event) => {

    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;

    let scrollSum = Math.ceil(scrollTop + clientHeight);

    if (scrollSum >= scrollHeight) {
        preloaderFun('block');
        getData();
    }
}


const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-users.php', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            preloaderFun('none');
            for (let element in data) {
                pMake(data[element].id, "User ID:");
                pMake(data[element].name, "User Name:");
                pMake(data[element].website, "User URL");

                let hr = document.createElement('p');
                hr.innerText = '--------';
                document.body.appendChild(hr);
            }
            
        })
        .catch(error => {
            console.error(error);
        })

}

const pMake = (pInterior, insideText) => {
    let pVar = document.createElement('p');
    pVar.innerText = `${insideText} ${pInterior}`;
    document.body.appendChild(pVar);
}

window.addEventListener('scroll', scrollToEndOfPage);