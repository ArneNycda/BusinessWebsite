$(document).ready(function() {
    $("#navi").click(function() {
      $(this).toggleClass("openburger");
    });

    $(window).on("resize", function() {
      if ($(window).width() > 600) {
          $("#navi").removeClass();
      }
    });
});
