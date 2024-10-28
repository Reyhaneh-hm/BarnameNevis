const showMenu = document.querySelector('#show-menu')

showMenu.onclick = function () {
    document.querySelector("#top-menu>ul").classList.toggle('show')
    document.querySelector("#show-menu>i").classList.toggle('fa-times')
}

$('#filter a').click(function () {
    // alert('salam')
    let className = $(this).attr('class')

    // console.log(className)
    $('a.active').removeClass('active');
    $(this).addClass('active')

    if (className === 'all') {
        $('.course').fadeIn(500)
    }else{
        $('.course').hide().filter('.'+className).fadeIn(500)

    }
    return false;
})

$('.acc-title').click(function () {
    $('i.fa-angle-up').removeClass('fa-angle-up')

    if ($(this).next().is(":visible")) {
        $(this).find('i').removeClass('fa-angle-up')
    }else{
        $(this).find('i').addClass('fa-angle-up')
    }

    $(this).next().slideToggle('fast').siblings('.acc-content').slideUp('fast')
})