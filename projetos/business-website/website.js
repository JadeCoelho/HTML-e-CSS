$(document).ready(function(){
    $('#nav-botao').click(function(){
        $('.barra-collapse').slideToggle(400)
    })

    $(window).scroll(function(){
        let pos = $(window).scrollTop()
        if (pos >= 100) {
            $('.nav-barra').addClass('cgn-nav-barra')
        } else {
            $('.nav-barra').removeClass('cgn-nav-barra')
        }
    })

    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('mostrar-conteudo')
            let icone = $(this).children('span').children('i').attr('class')

            if (icone =="fas fa-plus"){
                $(this).children('span').html('<i class="fas fa-minus"></i>')
            } else {
                $(this).children('span').html('<i class="fas fa-plus"></i>')
            }
        })
    })
})