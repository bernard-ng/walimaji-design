$('document').ready(function () {

    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
    });

    let select = document.querySelectorAll('select');
    for(let i = 0; i < select.length; i++) {
        $(select[i]).material_select();
    }

})
