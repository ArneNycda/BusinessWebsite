$(".column img").mouseenter(function() {
    var image = $(this).attr("src");
    $(".mySlides img").attr("src", function(){return image;});
});
