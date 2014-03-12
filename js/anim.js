$(document).ready(function(){
	main();
	$(window).resize(function () {
		$("div.ulitka").stop(true).remove();
		$("div.center").after('<div class="ulitka"></div>');
		$("div.ulitka").append('<div id="roga"></div>').append('<div id="pancir"></div>').append('<div id="telo"></div>');
		function_ulitka();
		if(document.URL.indexOf("/#index") != -1){	
			correctIndex();
		}else if(document.URL.indexOf("/#other") != -1){
			correctSliders();
		}else if(document.URL.indexOf("/#identity") != -1){
			correctSliders();
		}else if(document.URL.indexOf("/#about_me") != -1){
			correctSliders();
		}else if(document.URL.indexOf("/#websites") != -1){
			correctSliders();
		}else if(document.URL.indexOf("/#poligraphy") != -1){
			correctSliders();
		}
	});
});

function correctIndex(){
	var viewPortWidth = $(window).width();
	if (viewPortWidth > 2400){
		// window.resizeTo(1024, 786);
		// location.reload();
	}else if (viewPortWidth > 2200){
		$("div.center").css({display:'none'});
		$("div.center").css({width:'+=180%', height:'+=180%', backgroundSize:'800px'}).animate({marginLeft:'35%', margin:'0px auto', marginTop:'15%'},500);
		$("div.portfolio").css({marginLeft:'34%', marginTop:'9%'});
		$("div.contacts").css({marginLeft:'36em', marginTop:'10em'});
		$(".znak").animate({marginLeft:'16%', marginTop:'30%'},200, function(){
			$("div.center").fadeIn(200);
		});
	}else if (viewPortWidth > 1900){
		$("div.center").css({display:'none'});
		$("div.center").css({width:'600px', height:'600px', backgroundSize:'600px'}).animate({marginLeft:'35%', margin:'0px auto', marginTop:'15%'},500);
		$("div.contacts").css({marginLeft:'27em', marginTop:'6.5em'});
		$("div.portfolio").css({marginLeft:'33%', marginTop:'9%'});
		$(".znak").animate({marginLeft:'16%', marginTop:'30%'},200, function(){
			$("div.center").fadeIn(200);
		});
	}else if(viewPortWidth > 1700){
		$("div.center").css({display:'none'});
		$("div.center").animate({marginLeft:'30%', margin:'0px auto', marginTop:'15%'},500);
		$(".znak").animate({marginLeft:'16%', marginTop:'30%'},200, function(){
			$("div.center").fadeIn(200);
		});
	}else if(viewPortWidth > 1400){
		$("div.center").css({display:'none'});
		$("div.center").animate({marginLeft:'30%', margin:'0px auto', marginTop:'15%'},500);
		$(".znak").animate({marginLeft:'16%', marginTop:'30%'},200, function(){
			$("div.center").fadeIn(200);
		});
	}else if(viewPortWidth > 1200){
		$("div.center").css({display:'none'});
		$("div.center").animate({marginLeft:'26%', margin:'0px auto', marginTop:'12%'},500);
		$(".znak").animate({marginLeft:'16%', marginTop:'30%'},200, function(){
			$("div.center").fadeIn(200);
		});
	}else if(viewPortWidth > 1100){
		$("div.center").css({display:'none'});
		$("div.center").animate({marginLeft:'26%', margin:'0px auto', marginTop:'12%'},500);
		$(".znak").animate({marginLeft:'16%', marginTop:'30%'},200, function(){
			$("div.center").fadeIn(200);
		});
	}else if(viewPortWidth > 1000){
		$("div.center").css({display:'none'});
		$("div.center").animate({marginLeft:'26%', margin:'0px auto', marginTop:'12%'},500);
		$(".znak").animate({marginLeft:'10%', marginTop:'30%'},200, function(){
			$("div.center").fadeIn(200);
		});
	}
}

function correctSliders(){
	var viewPortWidth = $(window).width();
	if (viewPortWidth > 2400){
		
	}else if (viewPortWidth > 1900){
		$(".bgslider").animate({left:'25%'},500);
	}else if (viewPortWidth > 1700){
		$(".bgslider").animate({left:'22%'},500);
	}else if (viewPortWidth > 1600){
		$(".bgslider").animate({left:'21%'},500);
	}else if (viewPortWidth > 1500){
		$(".bgslider").animate({left:'20%'},500);
	}else if (viewPortWidth > 1400){
		$(".bgslider").animate({left:'18%'},500);
	}else if (viewPortWidth > 1300){
		$(".bgslider").animate({left:'17%'},500);
	}else if (viewPortWidth > 1200){
		$(".bgslider").animate({left:'15%'},500);
	}else if (viewPortWidth > 1100){
		$(".bgslider").animate({left:'11%'},500);
	}
}