$(document).ready(() => {
    $('.hamburger').click(() => {
        $('.main-menu').toggleClass('opened');
    });

    $('.main-menu-item a').click((e) => {
        e.preventDefault();
        $('body').fadeOut(2000, () => {
            window.location.href = $(e.target).attr('href');
        });
    });
});