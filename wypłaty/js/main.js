$(document).ready(() => {
    $('#count-sum').click(() => {
        const salary = $('.salary');
        let sum = 0;
        for (let element of salary) {
            sum += Number(element.textContent);
        }
        $('#sum')[0].textContent = sum;
    })
});