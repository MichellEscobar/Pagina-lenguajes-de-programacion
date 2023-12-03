$(document).ready(function() {
    $(".nav-item a").on("click", function() {
        var targetSection = $(this).attr("href");
        $(".corte-section").hide();
        $(targetSection).fadeIn(500);
    });
});
