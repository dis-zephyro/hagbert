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

$(".scroll").each(function () { // анимация по скролу(используйте этот) достаточно добавить анимируемому блоку класс 'scroll' а css анимацию писать так: '.animated.класс_блока'
    var block = $(this);
    $(window).scroll(function() {
        var top = block.offset().top;
        var bottom = block.height()+top;
        top = top - $(window).height();
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