$(document).ready(function(){	
	$('div').delegate(".c_back2", "click", function(){
		$("body, html").css('backgroundImage','none');
		$("body").css('backgroundColor','#fceabb');
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
			.css({"background-image":"url(img/bgslider2.png)","width":"900px","height":"630px","left":"15%","right":"15%"})
			.animate({top:'15%'},500)
			.append('<div class="car"></div>');
			//Выхлоп машинки
			for (var i = 1; i < 6; i++) {
				$(".car").append('<div class="dim'+i+'"></div>');
			}	
			//Шарик и мячик
			$(".bgslider")
			.append('<div class="sharik"></div>')
			.append('<div class="mjach"></div>');
			//Нитка от шарика
			$(".sharik")
			.append('<div class="nitka"></div>')
			.append('<div class="nitka2"></div>')
			.append('<div class="nitka3"></div>');
			
			$("#ada").attr({"href":"#index", "class":"b"});
			history.pushState(null,null,'#poligraphy');
			t = 0;
			
			//Цепляем левые верхние элементы div
			for (var i = 1; i < 11; i++) {
				$(".bgslider")
				.append('<div id="poli_left_top_'+i+'" style="background:transparent url(img/poligraphy/left_top_poli_'+i+'.png) no-repeat 0 0;" class="poli_left_top"></div>')
				.append('<div id="znak_left_top_'+i+'" style="background:transparent url(img/poligraphy/left_top_znak_'+i+'.png) no-repeat 0 0;" class="poli_left_top"></div>')
				.append('<div id="kolbasa_left_top_'+i+'" style="z-index:-23; background:transparent url(img/poligraphy/left_top_kolbasa_'+i+'.png) no-repeat 0 0;" class="poli_left_top"></div>')
				.append('<div id="poli_left_bottom_'+i+'" style="background:transparent url(img/poligraphy/left_bottom_'+i+'.png) no-repeat 0 0;" class="poli_left_bottom"></div>');
			}	
			$(".bgslider")
			.append('<div class="kvito4ka"></div>')
			.append('<div class="last"></div>');
			
			//Цепляем левые нижние элементы div
			$(".bgslider")
			.append('<div class="poli_left_poloski"></div>')
			.append('<div class="poli_left_obruch"></div>');
			
			//Цепляем правые верхние элементы div
			for (var i = 1; i < 54; i++) {
				$(".bgslider")
				.append('<div id="right_top_punktir_'+i+'" style="background:transparent url(img/poligraphy/right_top_punktir_'+i+'.png) no-repeat 0 0;" class="poli_right_top"></div>');
			}
			for (var i = 1; i < 14; i++) {
				$(".bgslider")
				.append('<div id="right_top_znak_'+i+'" style="z-index:-19; margin-top:-9.5em; background:transparent url(img/poligraphy/right_top_znak_'+i+'.png) no-repeat 0 0;" class="poli_right_top"></div>');
			}
			for (var i = 1; i < 4; i++) {
				$(".bgslider")
				.append('<div id="right_top_zelen_'+i+'" style="margin-top:-7.5em; background:transparent url(img/poligraphy/right_top_zelen_'+i+'.png) no-repeat 0 0;" class="poli_right_top"></div>');
			}
			$(".bgslider")
			.append('<div class="poli_right_etc"></div>');	

			//Цепляем левые нижние элементы div
			$(".bgslider")
			.append('<div class="poli_right_bottom_poloski"></div>');
			
		}, 1000);
		setTimeout(function() {
			sova_eyes();
			car_dim();
			sharik_nitka();
			$(".car").animate({marginLeft:'40em'},60000, "linear");
			$(".sharik").animate({marginTop:'-40em', marginLeft:'-10em'},20000, "linear");
			var h = $(window).height() - 420;
			$(".mjach").animate({top:h},1800, "easeOutBounce");
			//Появление левых верхних элементов div
			for (var i = 1; i < 11; i++) {
				$("#poli_left_top_"+i).delay(i*20).fadeIn(10);
				$("#poli_left_top_"+(i-1)).fadeOut(10);
			}
			setTimeout(function() {
				for (var i = 1; i < 10; i++) {
					$("#znak_left_top_"+i).delay(i*20).fadeIn(10);
					$("#znak_left_top_"+(i-1)).fadeOut(10);
				}
				for (var i = 1; i < 13; i++) {
					$("#kolbasa_left_top_"+i).delay(i*100).fadeIn(10);
				}
				$('.kvito4ka').animate({marginLeft:"2.5em", marginTop:"-4.5em"}, 500);
				kvito4kaRotateCycle();
				$(".last").fadeIn(2000);
			}, 1000);
			//Появление левых нижних элементов div
			setTimeout(function() {
				$(".poli_left_poloski").fadeIn(2000);
			}, 1000);
			obRotate();
			setTimeout(function() {
				for (var i = 1; i < 5; i++) {
					$("#poli_left_bottom_"+i).delay(i*120).fadeIn(10);
				}
			}, 2000);	
			
			//Появление правых верхних элементов div
			for (var i = 1; i < 14; i++) {
				$("#right_top_znak_"+i).delay(i*20).fadeIn(20);
				$("#right_top_znak_"+(i-1)).fadeOut(20);
			}
			for (var i = 1; i < 4; i++) {
				$("#right_top_zelen_"+i).delay(i*20).fadeIn(20);
				$("#right_top_zelen_"+(i-1)).fadeOut(20);
			}
			setTimeout(function() {
				$(".poli_right_etc").fadeIn(2000);
			}, 1000);
			setTimeout(function() {
				for (var i = 1; i < 53; i++) {
					$("#right_top_punktir_"+i).delay(i*20).fadeIn(20);
					$("#right_top_punktir_"+(i-1)).fadeOut(20);
				}
			}, 1000);
			
			//Появление правых нижних элементов div
			setTimeout(function() {
				$(".poli_right_bottom_poloski").animate({marginLeft:"44em"}, 1000);
			}, 1000);
		}, 2000);
	});
	$('.header').delegate("a.b", "click", function(){
		
	});
});

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

function car(){
	setTimeout(function() {
		$(".dim1").css({opacity:'1'});
	}, 100);
	setTimeout(function() {
		$(".dim1").css({opacity:'0'});
		$(".dim2").css({opacity:'1'});
	}, 500);
	setTimeout(function() {
		$(".dim2").css({opacity:'0'});
		$(".dim3").css({opacity:'1'});
	}, 800);
	setTimeout(function() {
		$(".dim3").css({opacity:'0'});
		$(".dim4").css({opacity:'1'});
	}, 1100);
	setTimeout(function() {
		$(".dim4").css({opacity:'0'});
		$(".dim5").css({opacity:'1'});
		$(".dim1").css({opacity:'1'});
	}, 1400);
	setTimeout(function() {
		$(".dim5").css({opacity:'0'});
	}, 1700);
}

function car_dim() {
	car();
	setTimeout("car_dim()",1000);
}

function sharik(){
	setTimeout(function() {
		$(".nitka").css({opacity:'0'});
		$(".nitka2").css({opacity:'1'});
	}, 500);
	setTimeout(function() {
		$(".nitka2").css({opacity:'0'});
		$(".nitka3").css({opacity:'1'});
	}, 1000);
	setTimeout(function() {
		$(".nitka3").css({opacity:'0'});
		$(".nitka2").css({opacity:'1'});
	}, 1500);
	setTimeout(function() {
		$(".nitka2").css({opacity:'0'});
		$(".nitka").css({opacity:'1'});
	}, 2000);
	setTimeout(function() {
		$(".nitka").css({opacity:'1'});
	}, 2500);
}

function sharik_nitka() {
	sharik();
	setTimeout("sharik_nitka()",2000);
}

function kvito4kaRotateCycle() {
	kvito4kaRotate();
	setTimeout("kvito4kaRotateCycle()",1000);
}

function kvito4kaRotate(){
	$('.kvito4ka').animate({borderSpacing: -1800}, {
		step: function(now,fx) {
		  $(this).css('-webkit-transform','rotate('+now+'deg)');
		  $(this).css('-moz-transform','rotate('+now+'deg)'); 
		  $(this).css('-ms-transform','rotate('+now+'deg)');
		  $(this).css('-o-transform','rotate('+now+'deg)');
		  $(this).css('transform','rotate('+now+'deg)');  
		},
		duration:5000,

	},'linear');
}

function obRotate(){
	$('.poli_left_obruch').fadeIn(500).animate({marginLeft:"2em", marginTop:"25em", borderSpacing: -3600}, {
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