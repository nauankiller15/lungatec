// 
// 
// 
// TELA DE CARREGAMENTO


// $(window).on("load", function() {
//     $(".loader-wrapper").fadeOut("slow");

// });



// -- -- -- -- -- -- -- -

$(window).on('load', function() {
    $(window).scrollTop(0);
    $('.loader-wrapper .spinner').fadeOut();
    $('.loader-wrapper').delay(950).fadeOut('slow');
    $('body').delay(950).css({ 'overflow': 'visible' });
})

// 
