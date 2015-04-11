$(".order").fancybox({
    'padding' : 0
});


/*
jQuery(document).ready(function(){
    jQuery(".advantage").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
        beforeActivate: function( event, ui ) {
            $(ui.newHeader).hide();
            $(ui.oldHeader).show();
            console.log("Была активной панель: " + $(ui.oldHeader).text());
            console.log("Стала активной панель: " + $(ui.newHeader).text());
        }
    });
});
*/

$(".scroll").each(function () {
    var block = $(this);
    $(window).scroll(function() {
        var margin = ($(window).height() - 1) / 2;
        var top = block.offset().top;
        var bottom = block.height()+top - margin;
        top = top - $(window).height() + margin;
        var scroll_top = $(this).scrollTop();
        if ((scroll_top > top) && (scroll_top < bottom)) {
            if (!block.hasClass("animated")) {
                block.addClass("animated");
            }
        } else {
            block.removeClass("animated");
        }
    });
});

