$(document).ready(function(){	
	$('div').delegate(".c_back3", "click", function(){
		$("body, html").css('backgroundImage','none');
		$("body").css('backgroundColor','#f9c0eb');
		$("body").append('<div class="bgCircle"></div>');
		$(".hi").animate({marginRight:'-300%'},1000);
		$(".hi_sova").animate({marginRight:'-25px'},1000);
		$(".hi_sova").append('<div class="eye"></div>');
		$(".hi_sova").append('<div class="eye1"></div>');
		$(".hi_sova").append('<div class="eye2"></div>');
		$(".hi2").fadeOut(200);
		$(".hi2").css('display','none').delay(2000).empty().append('<img src="img/hi2_sova.png" />').fadeIn(500);
		
		$(".hi2").mouseover(function(){
			$(this).css('cursor','pointer');
		});
		$(".hi2").mouseout(function(){
			$(this).css('cursor','auto');
		});
		
		$("div.znak, div.cloud1, div.cloud2, div.cloud3, div.cloud4, div.cloud5, div.cloud6, div.center").animate({marginLeft:'-5000px'},1000);
		
		setTimeout(function() {
			$(".bgslider")
			.empty()
			.css({"background-image":"url(img/bgslider3.png)","width":"900px","height":"630px","left":"15%","right":"15%"})
			.animate({top:'15%'},500);
					
			$("#ada").attr({"href":"/zhenia", "class":"b"});
			history.pushState(null,null,'#other');
			t = 0;
			//Цепляем левые верхние элементы
			$(".bgslider")
			.append('<div class="other_left_top"></div>')
			.append('<div class="other_left_top_oliva"></div>')
			.append('<div id="strelka" class="other_left_strelka"></div>')
			.append('<div id="strelka" class="other_left_strelka_hover"></div>');
			//Стрелка меняется по событию hover
			$("#strelka").on('mouseover', function(){
				$(".other_left_strelka").fadeOut(1000);
				$(".other_left_strelka_hover").fadeIn(1000);
				$(this).effect( "shake", { direction: "left", times: 10, distance: 1}, 500 );
			});
			$("#strelka").on('mouseout', function(){
				$(".other_left_strelka_hover").fadeOut(1000);
				$(".other_left_strelka").fadeIn(1000);
				$(this).effect( "shake", { direction: "left", times: 10, distance: 1}, 500 );
			});
			
			//Цепляем левые верхние элементы div
			for (var i = 1; i < 6; i++) {
				$(".other_left_top").append('<div class="other_left_top_'+i+'"></div>');
			}
			//Цепляем правые верхние элементы
			$(".bgslider")
			.append('<div class="other_right_top"></div>')
			.append('<div class="other_right_palka"></div>')
			.append('<div class="other_right_propeller"></div>')
			.append('<div id="strelka_right" class="other_right_strelka"></div>')
			.append('<div id="strelka_right" class="other_right_strelka_hover"></div>');
			//Стрелка меняется по событию hover
			$("#strelka_right").on('mouseover', function(){
				$(".other_right_strelka").fadeOut(1000);
				$(".other_right_strelka_hover").fadeIn(1000);
				$(this).effect( "shake", { direction: "left", times: 10, distance: 1}, 500 );
			});
			$("#strelka_right").on('mouseout', function(){
				$(".other_right_strelka_hover").fadeOut(1000);
				$(".other_right_strelka").fadeIn(1000);
				$(this).effect( "shake", { direction: "left", times: 10, distance: 1}, 500 );
			});
			//Цепляем правые верхние элементы div
			for (var i = 1; i < 6; i++) {
				$(".other_right_top").append('<div class="other_right_top_'+i+'"></div>');
			}
			
			//Цепляем правые нижние элементы
			$(".bgslider")
			.append('<div class="other_right_bottom"></div>');
			
			//Цепляем правые нижние элементы div
			for (var i = 1; i < 20; i++) {
				$(".other_right_bottom").append('<div class="other_right_flower_'+i+'"></div>');
			}
			//Цепляем левые нижние элементы
			$(".bgslider")
			.append('<div class="other_left_bottom"></div>')
			//Шарик
			for (var i = 1; i < 7; i++) {
				$(".bgslider").append('<div class="other_left_sharik_'+i+'"></div>');
			}
			//Цепляем левые нижние элементы div
			for (var i = 1; i < 6; i++) {
				$(".other_left_bottom").append('<div class="left_bottom_'+i+'"></div>');
			}
			
		}, 1000);
		setTimeout(function() {
			sova_eyes();
			animateBgslider();
		}, 2000);
	});
	$('.header').delegate("a.b", "click", function(){
		
	});
});

function animateBgslider(){
	$(".other_left_top").animate({marginTop:"-1.5em", marginLeft:"-4em"},650);
	//Верхние левые элементы
	for (var i = 1; i < 6; i++) {
		$(".other_left_top_"+i).delay(i*150).fadeIn();
	}
	$(".other_left_top_oliva").delay(700).fadeIn(50).animate({marginTop:"-10.5em", marginLeft:"-20em"},{duration:'50'});
	$(".other_left_strelka").delay(700).fadeIn(50);
	$(".bgCircle").delay(1000).fadeIn(500);
	//Нижние левые элементы
	$(".other_left_bottom").animate({marginTop:"24em", marginLeft:"-2em"},650);
	for (var i = 1; i < 6; i++) {
		$(".left_bottom_"+i).delay(i*350).fadeIn();
	}
	//$(".other_left_top_oliva").delay(700).fadeIn(50).animate({marginTop:"-10.5em", marginLeft:"-20em"},{duration:'50'});
	//$(".other_left_strelka").delay(700).fadeIn(50);
	//Нижние правые элементы
	$(".other_right_bottom").animate({marginTop:"20em", marginLeft:"42.5em"},650);
	for (var i = 1; i < 20; i++) {
		$(".other_right_flower_"+i).delay(i*150).fadeIn();
	}
	$(".other_left_sharik_1").delay(700).fadeIn(50);
	sharik_n();
	//Верхние правые элементы
	$(".other_right_top").animate({marginTop:"-1.5em", marginLeft:"39.5em"},650);
	for (var i = 1; i < 6; i++) {
		$(".other_right_top_"+i).delay(i*150).fadeIn();
	}
	$(".other_right_strelka").delay(700).fadeIn(50);
	$(".other_right_palka").delay(700).fadeIn(50);
	$(".other_right_propeller").delay(700).fadeIn(50);
	propellerRotateCycle();
}

function sova(){
	setTimeout(function() {
		$(".eye").css({opacity:'0'});
		$(".eye1").css({opacity:'1'});
	}, 1000);
	setTimeout(function() {
		$(".eye1").css({opacity:'0'});
		$(".eye").css({opacity:'1'});
	}, 2000);
	setTimeout(function() {
		$(".eye").css({opacity:'0'});
		$(".eye2").css({opacity:'1'});
	}, 3000);
	setTimeout(function() {
		$(".eye2").css({opacity:'0'});
		$(".eye").css({opacity:'1'});
	}, 4000);
}

function sova_eyes() {
	sova();
	setTimeout("sova_eyes()",8000);
}

function propellerRotateCycle(){
	propellerRotate();
	propellerRotateCycle();
}
function propellerRotate(){
	$('.other_right_propeller').animate({borderSpacing: -1800 }, {
		step: function(now,fx) {
		  $(this).css('-webkit-transform','rotate('+now+'deg)');
		  $(this).css('-moz-transform','rotate('+now+'deg)'); 
		  $(this).css('-ms-transform','rotate('+now+'deg)');
		  $(this).css('-o-transform','rotate('+now+'deg)');
		  $(this).css('transform','rotate('+now+'deg)');  
		},
		duration:10000,

	},'linear');
}

function sharikAnimate(){
	setTimeout(function() {
		$(".other_left_sharik_1").fadeOut(100);
		$(".other_left_sharik_2").fadeIn(50);
	}, 300);
	setTimeout(function() {
		$(".other_left_sharik_2").fadeOut(100);
		$(".other_left_sharik_3").fadeIn(50);
	}, 600);
	setTimeout(function() {
		$(".other_left_sharik_3").fadeOut(100);
		$(".other_left_sharik_4").fadeIn(50);
	}, 900);
	setTimeout(function() {
		$(".other_left_sharik_4").fadeOut(100);
		$(".other_left_sharik_5").fadeIn(50);
	}, 1200);
	setTimeout(function() {
		$(".other_left_sharik_5").fadeOut(100);
		$(".other_left_sharik_6").fadeIn(50);
	}, 1500);
	setTimeout(function() {
		$(".other_left_sharik_6").fadeOut(100);
		$(".other_left_sharik_5").fadeIn(50);
	}, 1800);
	setTimeout(function() {
		$(".other_left_sharik_5").fadeOut(100);
		$(".other_left_sharik_4").fadeIn(50);
	}, 2100);
	setTimeout(function() {
		$(".other_left_sharik_4").fadeOut(100);
		$(".other_left_sharik_3").fadeIn(50);
	}, 2300);
	setTimeout(function() {
		$(".other_left_sharik_3").fadeOut(100);
		$(".other_left_sharik_2").fadeIn(50);
	}, 2500);
	setTimeout(function() {
		$(".other_left_sharik_2").fadeOut(100);
		$(".other_left_sharik_1").fadeIn(50);
	}, 2800);
}

function sharik_n() {
	sharikAnimate();
	setTimeout("sharik_n()",5800);
}