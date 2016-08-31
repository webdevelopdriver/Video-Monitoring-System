$(document).ready(function(){
	$('.emmergency ul li').click(function(){
		$(this).children('div.item').toggle();
		$('.emmergency ul li').children('.title').toggle();
	});
});
