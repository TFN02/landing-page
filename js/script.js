$('.page-scroll').on('click', function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
   
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);
   
    // pindahkan scroll
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    },900,'easeInOutExpo');
   
    e.preventDefault();
   });
// parallax
// about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
})
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    })

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    })

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    })
    // portfolio
    // if(wScroll > $('.portfolio').offset().top - 250){
    //     $('.portfolio .thumbnail').each(function(i){
    //         setTimeout(function(){
    //             $('.portfolio .thumbnail').eq(i).addClass('muncul');
    //         }, 300 * i);
    //     });
    // }
    // vendor
    if(wScroll > $('.table').offset().top - 300){
        $('.vendor .table').each(function(i){
            setTimeout(function(){
                $('.vendor .table').eq(i).addClass('muncul');
            }, 400 * i);
        });
    }
    // Pelaku Acara
    if(wScroll > $('.pelAcara').offset().top - 300){
        $('.pelakuAcara .pelAcara').each(function(i){
            setTimeout(function(){
                $('.pelakuAcara .pelAcara').eq(i).addClass('muncul');
            }, 300 * i);
        });
    }
    // Rundown Akad
    if(wScroll > $('.ra').offset().top - 300){
        $('.rundownAkad .ra').each(function(i){
            setTimeout(function(){
                $('.rundownAkad .ra').eq(i).addClass('muncul');
            }, 300 * i);
        });
    }
    // Rundown Resepsi
    if(wScroll > $('.rr1').offset().top - 300){
        $('.rundownResepsi .rr1').each(function(i){
            setTimeout(function(){
                $('.rundownResepsi .rr1').eq(i).addClass('muncul');
            }, 300 * i);
        });
    }
})