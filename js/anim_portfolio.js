$(document).ready(function(){
	var winwidth = $(window).width();
	$(".logo").css({'opacity':'1'});
	$(".logo").animate({marginLeft:'20px'},500);
	setTimeout(function() {
		$(".hi").css({'opacity':'1'});
	}, 1000);
	setTimeout(function() {
		$(".bgslider").animate({marginTop:'100px'},1000);
	}, 1000);	
});	
	
	