$(document).ready(() => {
    $('.accordion-item').click((e) => {

        if ($(e.target).hasClass('opened')) {

            $(e.target).removeClass('opened');
            $(e.target).find('.accordion-content').slideUp();

        } else {

            $(e.target).addClass('opened');
            $(e.target).find('.accordion-content').slideDown();
        }
    });
});