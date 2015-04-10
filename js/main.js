$(".order").fancybox({
    'padding' : 0
});



jQuery(document).ready(function(){
    jQuery(".advantage").accordion({
        collapsible: true,
        active: false,
        beforeActivate: function( event, ui ) {
            $(ui.newHeader).hide();
            $(ui.oldHeader).show();
            console.log("Была активной панель: " + $(ui.oldHeader).text());
            console.log("Стала активной панель: " + $(ui.newHeader).text());
        }
    });
});