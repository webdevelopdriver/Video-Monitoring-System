$(document).ready(function() {
    var tabItem = $('.socialSecu');
    var main = $('.main');
    $(tabItem).each(function(index, value) {
        $(this).click(function() {
            $(this).removeClass('tabSelected');
            $(this).toggleClass('tabSelected').siblings().removeClass('tabSelected');
            $(main).each(function(i, value) {
                if (index == i) {
                    $(this).removeClass('selected');
                    $(this).toggleClass('selected').siblings().removeClass('selected');
                };
            });
        });
    });
});
