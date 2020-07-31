$(document).ready(() => {
    $('#download').click((e) => {
        e.preventDefault();
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', (data) => {

            if ($('div').hasClass('downloaded')) {

                $('div').text(`${data.imie} ${data.nazwisko} ${data.zawod} w ${data.firma}`);
                
            } else {
                $('body').append($(`<div id='dane-programisty'>${data.imie}  ${data.nazwisko}  ${data.zawod} w ${data.firma}`));
                $('div').addClass('downloaded');
            }
        }, );
    });
});