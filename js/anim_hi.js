$(document).ready(function(){	
	setTimeout("function_name()", 8000);
});

function function_name() {
	hi();
	setTimeout("function_name()",5000);
}

function hi(){
	setTimeout(function() {
		$(".hi").css({backgroundImage:'url(img/hi_2.png)'});
	}, 100);
	setTimeout(function() {
		$(".hi").css({backgroundImage:'url(img/hi_3.png)'});
	}, 300);
	setTimeout(function() {
		$(".hi").css({backgroundImage:'url(img/hi_2.png)'});
	}, 500);
	setTimeout(function() {
		$(".hi").css({backgroundImage:'url(img/hi.png)'});
	}, 700);
}