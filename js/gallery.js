$("body").on('mouseenter', '.column img', function() {
    var image = $(this).attr("src");
    $(".mySlides img").attr("src", function(){return image;});
});
