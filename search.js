jQuery(document).ready(function() {
    $(".search_icon").click(function() {
        $('.search_bar').fadeOut();
        $("i", this).toggleClass("search_icon fa-close");
    });
    $(document).on('click', '.fa-close', function() {
        $('.search_bar').fadeIn();
    });
});