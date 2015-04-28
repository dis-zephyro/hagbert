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


$(".scroll2").each(function () {
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



/* Таймер */


$(function(){

    var note = $('#note'),
        ts = new Date(2015, 4, 1),
        newYear = true;

    if((new Date()) > ts){
        // Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
        // Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
        ts = (new Date()).getTime() + 10*24*60*60*1000;
        newYear = false;
    }

    $('#countdown').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += "Дней: " + days +", ";
            message += "часов: " + hours + ", ";
            message += "минут: " + minutes + " и ";
            message += "секунд: " + seconds + " <br />";

            if(newYear){
                message += "осталось до Нового года!";
            }
            else {
                message += "осталось до момента через 10 дней!";
            }

            note.html(message);
        }
    });

});