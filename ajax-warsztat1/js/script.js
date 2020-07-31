let btnDownload = document.getElementById('download');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php', {
        method: 'GET',
    })
    .then(resp => resp.json())
    .then(data =>{
        
        const pMake = (pInterior) => {
            let pVar = document.createElement('p');
            pVar.innerText = pInterior;
            document.body.appendChild(pVar);
        }

        pMake(data.id);
        pMake(data.userId);
        pMake(data.title);
        pMake(data.body);
        
    })
}

btnDownload.addEventListener('click', getData);