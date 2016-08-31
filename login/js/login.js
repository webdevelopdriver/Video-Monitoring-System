$(function(){
	 (function inputPlaceH() {
        $('input').val() == '';
        $('input').focus(function() {
            $(this).next('label.searchLabel').hide();
        }).focusout(function() {
            if ($(this).val()) {
                $(this).next('label.searchLabel').hide();
            } else {
                $(this).next('label.searchLabel').show();
            }

        })
    })();

})