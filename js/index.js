$(document).ready(function() {
    $("#mobile-menu-button").click(function() {
        $("#mobile-menu").slideToggle();
    });

    $("#mobile-menu a").on('click', function() {
        $("#mobile-menu").slideToggle();
    });
});