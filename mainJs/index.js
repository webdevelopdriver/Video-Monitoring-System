$(document).ready(function() {
    
    $('.listWrapper .listContent .listCompus li a').mouseover(function() {
        $(this).children('.compusText').css('display', 'block');
        $(this).parent().addClass('compusHover');
        $(this).children('.compus_item').css('display', 'none');
    }).mouseout(function() {
        $(this).parent().removeClass('compusHover');
        $(this).children('.compusText').css('display', 'none');
        $(this).children('.compus_item').css('display', 'block');
    });
    /**
     * safety
     */
    imgPosition();
    function imgPosition() {
        var box = $("#safetyWrapper ul li");
        var documentWidth = $('.pushList').width();
        var boxWidth = box.eq(0).outerWidth(true);
        var imgCols = Math.floor(documentWidth / boxWidth);
        var boxHeightArr = [];

        /*遍历盒子*/
        box.each(function(index, value) {
            var h = box.eq(index).outerHeight(true);
            if (index < imgCols) {
                boxHeightArr[index] = h;
            } else {
                var boxMinHeight = Math.min.apply(null, boxHeightArr);
                var boxMinIndex = $.inArray(boxMinHeight, boxHeightArr);
                $(value).css({
                    position: "absolute",
                    left: boxMinIndex * boxWidth + "px",
                    top: boxMinHeight + "px"
                });
                boxHeightArr[boxMinIndex] += h;
            }
        });
    };
});
