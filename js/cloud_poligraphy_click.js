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
		}, 1000);
		setTimeout(function() {
			sova_eyes();
			car_dim();
			sharik_nitka();
			$(".car").animate({marginLeft:'40em'},60000, "linear");
			$(".sharik").animate({marginTop:'-40em', marginLeft:'-10em'},20000, "linear");
			var h = $(window).height() - 420;
			$(".mjach").animate({top:h},1800, "easeOutBounce");
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