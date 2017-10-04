$(document).ready(function() {
    $(".top-nav .hamburger").click(function() {
      $(this).closest('#navi').toggleClass("openburger");
    });

    $(window).on("resize", function() {
      if ($(window).width() > 600) {
          $(".top-nav").removeClass('openburger');
      }
    });
});
