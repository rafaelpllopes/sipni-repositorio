function softScroll(seletor) {
    $(seletor).click(function(event) {
        event.preventDefault() ;
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 2000);  
    });
}

softScroll('a[href*=downloads]');
softScroll('a[href*=instrucoes]');
softScroll('a[href*=manuais]');