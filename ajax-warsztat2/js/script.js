/* $(document).ready(() => {
    $('button#download').click(() => {
        $.get("https://akademia108.pl/api/ajax/get-post.php")
        .done((data) => {
            let pId = $('<p></p>').text(`Id postu: ${data.id}`);
            let puserId = $('<p></p>').text(`Id użytkownika: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Tytuł: ${data.title}`);
            let pBody = $('<p></p>').text(`Treść: ${data.body}`);

            $('body').append(pId);
            $('body').append(puserId);
            $('body').append(pTitle);
            $('body').append(pBody);
            $('body').append($('<hr></hr>'))
        })
        .fail((error) => {
                console.fail(error);
            })
    })
}); */

$(document).ready(() => {
    $('button#download').click(() => {
        $.getJSON("https://akademia108.pl/api/ajax/get-post.php")
            .done((data) => {
                let pId = $('<p></p>').text(`Id postu: ${data.id}`);
                let puserId = $('<p></p>').text(`Id użytkownika: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Tytuł: ${data.title}`);
                let pBody = $('<p></p>').text(`Treść: ${data.body}`);

                $('body').append(pId);
                $('body').append(puserId);
                $('body').append(pTitle);
                $('body').append(pBody);
                $('body').append($('<hr></hr>'))
            })
            .fail((error) => {
                console.error(fail);
            })
    })
});