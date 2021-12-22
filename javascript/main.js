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
    if(scroll2 > $('.astu .tulisan').offset().top -50){
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