$(document).ready(function(){	
	$('div').delegate(".c_back5", "click", function(){
		$("body, html").css('backgroundImage','none');
		$("body").css('backgroundColor','#aae5e0');
		$("body").append('<div class="bgBg"></div>');
		$("div.znak, div.cloud1, div.cloud2, div.cloud3, div.cloud4, div.cloud5, div.cloud6, div.center").animate({marginLeft:'-5000px'},1000);
		
		setTimeout(function() {
			$(".bgslider").empty().css({"background-image":"url(img/bgslider4.png)","width":"900px","height":"630px","left":"15%","right":"15%"}).animate({top:'20%'},500);
			$("#ada").attr({"href":"", "class":"b"});
			history.pushState(null,null,'#websites');
			t = 0;
			
			$(".bgslider")
			.append('<div class="web_right_top"></div>')
			.append('<div class="web_left_top"></div>')
			.append('<div class="web_right_etc"></div>')
			.append('<div class="web_left_etc"></div>')
			.append('<div class="web_right_krug"></div>')
			.append('<div class="web_left_obruch"></div>')
			.append('<div class="web_left_bottom_volna"></div>')
			.append('<div class="web_left_bottom_zvezda"></div>')
			.append('<div class="web_left_bottom_rakushka"></div>')
			.append('<div class="web_left_bottom_shnjaga"></div>')
			.append('<div class="web_right_bottom_verevki"></div>')
			.append('<div class="web_right_bottom_flazhki"></div>')
			.append('<div class="web_right_bottom_flazhki_left"></div>')
			.append('<div class="web_right_bottom_tapki"></div>')
			.append('<div class="web_right_bottom_kupalnik"></div>')
			.append('<div class="web_right_bottom_verevki_left"></div>');
			for (var i = 1; i < 5; i++) {
				$(".bgslider").append('<div class="web_right_puzirek_'+i+'"></div>')
			}
			for (var i = 1; i < 5; i++) {
				$(".bgslider").append('<div class="web_left_puzirek_'+i+'"></div>')
			}
			setTimeout(function() {
				animateBgsliderWeb();
			}, 1000);
		}, 1000);
	});
	$('.header').delegate("a.b", "click", function(){
		
	});
});

function animateBgsliderWeb(){
	$(".web_right_top").animate({marginTop:"-4em", marginLeft:"42.5em", zIndex:"21"},650);
	$(".web_left_top").animate({marginTop:"-4em", marginLeft:"-2em", zIndex:"21"},650);
	$(".web_left_bottom_volna").animate({marginTop:"20em", marginLeft:"-2em"},650);
	$(".web_right_bottom_verevki").animate({marginTop:"20em", marginLeft:"50em"},650);
	$(".web_right_bottom_verevki_left").animate({marginTop:"12em", marginLeft:"-20em"},650);
	krugRotate();
	obruchRotate();
	$(".bgBg").delay(1000).fadeIn(500);
	ribka_swim();
	setTimeout(function() {
		$(".web_right_etc, .web_left_etc, .web_left_bottom_zvezda, .web_left_bottom_rakushka, .web_left_bottom_shnjaga, .web_right_bottom_kupalnik, .web_right_bottom_tapki").fadeIn();
		$(".web_right_bottom_flazhki").animate({marginTop:"20em", marginLeft:"50em"},650);
		$(".web_right_bottom_flazhki_left").animate({marginTop:"12em", marginLeft:"-13em"},650);
		ribka_puzirki();
	}, 3000);
}

function krugRotate(){
	$('.web_right_krug').animate({marginTop:"-1em", marginLeft:"45.5em", borderSpacing: -1800}, {
		step: function(now,fx) {
		  $(this).css('-webkit-transform','rotate('+now+'deg)');
		  $(this).css('-moz-transform','rotate('+now+'deg)'); 
		  $(this).css('-ms-transform','rotate('+now+'deg)');
		  $(this).css('-o-transform','rotate('+now+'deg)');
		  $(this).css('transform','rotate('+now+'deg)');  
		},
		duration:2000,

	},'linear');
}

function obruchRotate(){
	$('.web_left_obruch').animate({borderSpacing: -180}, {
		step: function(now,fx) {
		  $(this).css('-webkit-transform','rotate('+now+'deg)');
		  $(this).css('-moz-transform','rotate('+now+'deg)'); 
		  $(this).css('-ms-transform','rotate('+now+'deg)');
		  $(this).css('-o-transform','rotate('+now+'deg)');
		  $(this).css('transform','rotate('+now+'deg)');  
		},
		duration:2000,

	},'linear');
}

function ribka(){
	setTimeout(function() {
		$(".web_right_puzirek_1, .web_left_puzirek_1").css({opacity:'1'});
	}, 100);
	setTimeout(function() {
		$(".web_right_puzirek_1, .web_left_puzirek_1").css({opacity:'0'});
		$(".web_right_puzirek_2, .web_left_puzirek_2").css({opacity:'1'});
	}, 500);
	setTimeout(function() {
		$(".web_right_puzirek_2, .web_left_puzirek_2").css({opacity:'0'});
		$(".web_right_puzirek_3, .web_left_puzirek_3").css({opacity:'1'});
	}, 800);
	setTimeout(function() {
		$(".web_right_puzirek_3, .web_left_puzirek_3").css({opacity:'0'});
		$(".web_right_puzirek_4, .web_left_puzirek_4").css({opacity:'1'});
		$(".web_right_puzirek_1, .web_left_puzirek_1").css({opacity:'1'});
	}, 1100);
	setTimeout(function() {
		$(".web_right_puzirek_4, .web_left_puzirek_4").css({opacity:'0'});
	}, 1400);
}

function ribka_puzirki() {
	ribka();
	setTimeout("ribka_puzirki()",1000);
}

function ribka_swim() {    //создаем функцию с именем function_name
	$(".web_right_top, .web_left_top").animate({       //добавляем парочку анимаций
	"marginTop" : "+=0.3%"}, 700)
	.animate({
	"marginTop" : "-=0.3%"}, 700, ribka_swim); // по завершению последней анимации вызываем нашу функцию в качестве callback
};