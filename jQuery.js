$(document).ready(() => {
    $("#navi").click(function() {
      $(this).toggleClass("openburger");
      console.log("hello");
    });

    $(window).on("resize", function() {
      if ($(window).width() > 600) {
          $("#navi").removeClass();
      }
    }); 
});
