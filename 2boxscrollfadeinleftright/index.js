$(window).scroll(function() {
    $(".animation .anm_mod").each(function() {
     const position = $(this).offset().top;
     const scroll = $(window).scrollTop();
     const windowHeight = $(window).height();
     if (scroll > position - windowHeight) {
      $(this).addClass("active");
     }
    });
   });
   
   
   