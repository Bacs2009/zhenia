$(document).ready(function(){	
	$('div').delegate(".c_back1", "click", function(){
		$("body, html").css('backgroundImage','none');
		$("body").css('backgroundColor','#ffffbd');
		$("div.znak, div.cloud1, div.cloud2, div.cloud3, div.cloud4, div.cloud5, div.cloud6, div.center").animate({marginLeft:'-5000px'},1000);
		
		//$("*").dequeue().animate({marginLeft:'-5000px'},1000);
		setTimeout(function() {
			$(".bgslider").animate({top:'6%'},500);
			$("#ada").attr({"href":"#", "class":"b"});
			history.pushState(null,null,'#identity');
			t = 0;
		}, 1000);
	});
	$('.header').delegate("a.b", "click", function(){
		
	});
});