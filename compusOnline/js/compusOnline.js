$(document).ready(function() {
	$(" .ta table tr:even").addClass("even");
	$(" .ta table tr:odd").addClass("odd");
	$(" .ta table tr").mouseover(function() {

		$(this).addClass("trOddHover");

	}).mouseout(function() {

		$(this).removeClass("trOddHover");

	});
	//menu
	$(".add_city").click(function(){
      $(this).next().slideToggle(300);
      $(this).parent().siblings().children('.add_city').next().hide(100);
	});
	// compusDetail
	$('.add_device').click(function(){
      $(this).next().slideToggle(300);
      $(this).parent().siblings().children('.add_device').next().hide(200);
	});

})