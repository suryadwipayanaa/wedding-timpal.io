$(window).scroll(function(){
    const scroll4 = $(this).scrollTop();
    if(scroll4 > $('.lokasi').offset().top -50){
        $('.covid').addClass('corona');
   }
})


$(window).on('load',function(){
    $('.btn-depan a').click(function(){
        $('.depan').addClass('hide');
    })

    $('.btn-covid a').click(function(){
        $('.covid.corona').addClass('kiri')
    })

    $(' .gambar1').addClass('k1');
    $(' .gambar2').addClass('k2');
    $(' .border').addClass('k3');
    $(' .daun').addClass('k4');
    $(' .gambar3').addClass('k5');
    $(' .gambar4').addClass('k6');
 })

$(window).on('load',function(){
   $('.btn-galery a').click(function(){
      $('.potohilang').toggleClass('ada');
   })
})

$(window).scroll(function(){
    const scroll2 = $(this).scrollTop();
    if(scroll2 > $('.astu ').offset().top -250){
        $('.astu .gambar').addClass('c1');
        $('.astu .tulisan').addClass('c2');
   }

   if(scroll2 > $('.astu ').offset().top -150){
    $('.astu .atas-profile').addClass('c3');
   }

   if(scroll2 > $('.astu .atas ').offset().top -250){
    $('.astu .atas h1 ').addClass('c4');
    
   }


   if( scroll2 > $('.astu .atas').offset().top -200){
    $('.astu .atas p').each(function(i){
        setTimeout(function(){
            $('.astu .atas p').eq(i).addClass('c5');
        },200 * (i+1));
    });
}

  if(scroll2 > $('.astu .judul ').offset().top -250){
    $('.astu .judul h1 ').addClass('c6');
    
   }

   if(scroll2 > $(' .astu .bawah-profile ').offset().top -150){
    $('.astu .bawah-profile').addClass('c7');
   }

   if(scroll2 > $('.astu .bawah ').offset().top -250){
    $('.astu .bawah h1 ').addClass('c8');
    
   }

   
   if( scroll2 > $('.astu .bawah').offset().top -200){
    $('.astu .bawah p').each(function(i){
        setTimeout(function(){
            $('.astu .bawah p').eq(i).addClass('c9');
        },200 * (i+1));
    });
}

if(scroll2 > $('.acara').offset().top -250){
    $('.acara .detail h1 ').addClass('c10');
    
   }

   if(scroll2 > $('.acara .detail').offset().top -200){
    $('.acara .resepsi h1 ').addClass('c11');
    
   }
   if(scroll2 > $('.acara .tangal').offset().top -200){
    $('.acara .days p').addClass('c12');
   }

    if(scroll2 > $('.acara .tangal').offset().top -200){
        $('.acara .dated p').addClass('c13');
    }

   if(scroll2 > $('.acara .tangal').offset().top -200){
    $('.acara .month p').addClass('c14');
    
   }

   if(scroll2 > $('.acara .tangal').offset().top -100){
    $('.acara .hours p').addClass('c15');
    
   }

   if(scroll2 > $('.acara .alamat').offset().top -200){
    $('.acara .alamat p').addClass('c16');
    
   }

   if(scroll2 > $('.wedding2 .judul').offset().top -200){
    $('.wedding2 .judul h1').addClass('c17');
    
   }

   if(scroll2 > $('.wedding2 .judul').offset().top -150){
    $('.wedding2 .gambarwed').addClass('c18');
    
   }

   if(scroll2 > $('.wedding2 .gekanya').offset().top -150){
    $('.wedding2 .gekanya h1').addClass('c19');
    
   }


   if(scroll2 > $('.wedding2 .gianyar').offset().top -150){
    $('.wedding2 .gianyar h1').addClass('c20');
    
   }

   if(scroll2 > $('.wedding2 .maps').offset().top -200){
    $('.wedding2 .maps').addClass('c21');
    
   }

   if(scroll2 > $('.galery').offset().top -350){
    $('.galery h1').addClass('c22');
    
   }


   if(scroll2 > $('.mutiara').offset().top -350){
    $('.mutiara h1').addClass('c23');
   }

   if(scroll2 > $('.mutiara').offset().top -150){
    $('.mutiara .atas').addClass('c24');
    
   }

   if(scroll2 > $('.mutiara').offset().top -50){
    $('.mutiara .tengah').addClass('c25');
    
   }

   if(scroll2 > $('.mutiara').offset().top -50){
    $('.mutiara .bawah').addClass('c26');
    
   }

   if(scroll2 > $('.hadir').offset().top -250){
    $('.hadir .arah').addClass('c27');
    
   }

   if(scroll2 > $('.hadir .akhir').offset().top -350){
    $('.hadir .akhir p').addClass('c28');
    
   }

   if(scroll2 > $('.hadir .komentar-balas').offset().top -350){
    $('.hadir .komentar-balas h1').addClass('c29');
    
   }

   if(scroll2 > $('.galery').offset().top -150){
    $('.galery').addClass('c30');
    
   }









})

$(window).scroll(function(){
    const scroll3 = $(this).scrollTop();
    if(scroll3 > $('.astu .tulisan').offset().top -50){
        $('.navbar').addClass('navbarr');
   }
})

$(window).scroll(function(){
   const scroll = $(this).scrollTop();

   if( scroll > $('.potohilang.ada').offset().top -50){
       $('.hilang').each(function(i){
           setTimeout(function(){
               $('.hilang').eq(i).addClass('muncul');
           },200 * (i+1));
       });
   }
})


const swiper = new Swiper(".newswiper", {
   spaceBetween:24,
   loop: 'true',
   slidesPerView: 'auto',
   centerdSlides : true,

   pagination: {
     el: ".swiper-pagination",
     dynamicBullets: true
   },
   breakpoints:{
       992: {
           spaceBetween:50,
       }
   }
 });