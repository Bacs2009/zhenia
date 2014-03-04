$(document).ready(function(){	
	$('div').delegate(".c_back1", "click", function(){
		$("body, html").css('backgroundImage','none');
		$("body").css('backgroundColor','#ffffbd');
		$("div.znak, div.cloud1, div.cloud2, div.cloud3, div.cloud4, div.cloud5, div.cloud6, div.center").animate({marginLeft:'-5000px'},1000);
		
		setTimeout(function() {
			$(".bgslider").empty().css({"background-image":"url(img/bgslider.png)","width":"900px","height":"630px","left":"15%","right":"15%"}).animate({top:'15%'},500);
			$("#ada").attr({"href":"/#index", "class":"b"});
			history.pushState(null,null,'#identity');
			t = 0;
			
			$(".bgslider")
			.append('<div class="bgslider_left_bottom"></div>')
			.append('<div class="bgslider_right_bottom"></div>')
			.append('<div class="bgslider_right_2_bottom"></div>')
			.append('<div class="bgslider_right_top"></div>')
			.append('<div class="bgslider_left_top"></div>')
			.append('<div class="back_identity" title="Back to Others"></div>')
			.append('<div class="next_identity" title="Go to Websites"></div>');
			
			//Цепляем левые нижние элементы div
			for (var i = 1; i < 7; i++) {
				$(".bgslider_left_bottom").append('<div class="bgslider_l_b_'+i+'"></div>');
			}
			//Цепляем правые нижние элементы div
			for (var i = 1; i < 13; i++) {
				$(".bgslider_right_bottom").append('<div class="bgslider_r_b_'+i+'"></div>');
			}
			//Цепляем правые нижние элементы div
			for (var i = 1; i < 9; i++) {
				$(".bgslider_right_2_bottom").append('<div class="bgslider_r_2_b_'+i+'"></div>');
			}
			//Цепляем правые верхние элементы div
			$(".bgslider_right_top")
			.append('<div class="bgslider_r_t_zvezda"></div>');
			for (var i = 1; i < 9; i++) {
				$(".bgslider_right_top").append('<div class="bgslider_r_t_'+i+'"></div>');
			}
			
			//Цепляем левые верхние элементы div
			$(".bgslider_left_top")
			.append('<div class="bgslider_l_t_zvezda"></div>')
			for (var i = 1; i < 8; i++) {
				$(".bgslider_left_top").append('<div class="bgslider_l_t_'+i+'"></div>');
			}
			setTimeout(function() {
				animateRotate();
			}, 1000);
			setTimeout(function() {
				bgslider_bottom_left();
				bgslider_bottom_right_1();
				animateBgsliderTop();
				$(".next_identity, .back_identity").delay(1000).fadeIn();
			}, 1000);
		}, 1000);
	});
	$('.header').delegate("a.b", "click", function(){
		location.href("/");
	});
	$(".bgslider").on("mouseover", ".back_identity", function(){
		$(this).effect( "shake", { direction: "left", times: 10, distance: 1}, 500 );
	});
	$(".bgslider").on("mouseover", ".next_identity", function(){
		$(this).effect( "shake", { direction: "left", times: 10, distance: 1}, 500 );
	});
	$(".bgslider").on("click", ".back_identity", function(){
		location.hash = "#other";
	});
	$(".bgslider").on("click", ".next_identity", function(){
		location.hash = "#websites";
	});
});

function animateBgsliderTop(){
	$(".bgslider_right_top").animate({marginTop:"2em", marginLeft:"35.5em"},650);
	$(".bgslider_left_top").animate({marginTop:"2em", marginLeft:"6.5em"},650);
	for (var i = 1; i < 9; i++) {
		$(".bgslider_r_t_"+i).delay(i*150).fadeIn();
	}
	for (var i = 1; i < 8; i++) {
		$(".bgslider_l_t_"+i).delay(i*150).fadeIn();
	}
}

function animateRotate(){
	$('.bgslider_left_bottom').animate({  marginLeft:'0px', marginTop:'24em', borderSpacing: -360 }, {
		step: function(now,fx) {
		  $(this).css('-webkit-transform','rotate('+now+'deg)');
		  $(this).css('-moz-transform','rotate('+now+'deg)'); 
		  $(this).css('-ms-transform','rotate('+now+'deg)');
		  $(this).css('-o-transform','rotate('+now+'deg)');
		  $(this).css('transform','rotate('+now+'deg)');  
		},
		duration:'slow'
	},'linear');
}

function bgslider_bottom_left(){
	setTimeout(function() {
		$(".bgslider_l_b_2").fadeIn();
	}, 500);
	setTimeout(function() {
		$(".bgslider_l_b_3").fadeIn();
	}, 600);
	setTimeout(function() {
		$(".bgslider_l_b_4").fadeIn();
	}, 700);
	setTimeout(function() {
		$(".bgslider_l_b_5").fadeIn();
	}, 800);
	setTimeout(function() {
		$(".bgslider_l_b_6").fadeIn();
	}, 900);
}

function bgslider_bottom_right_1(){
	setTimeout(function() {
		$(".bgslider_r_b_2").fadeIn();
		$(".bgslider_r_2_b_2").fadeIn();
	}, 500);
	setTimeout(function() {
		$(".bgslider_r_b_3").fadeIn();
		$(".bgslider_r_2_b_3").fadeIn();
	}, 550);
	setTimeout(function() {
		$(".bgslider_r_b_4").fadeIn();
		$(".bgslider_r_2_b_4").fadeIn();
	}, 600);
	setTimeout(function() {
		$(".bgslider_r_b_5").fadeIn();
		$(".bgslider_r_2_b_5").fadeIn();
	}, 650);
	setTimeout(function() {
		$(".bgslider_r_b_6").fadeIn();
		$(".bgslider_r_2_b_6").fadeIn();
	}, 700);
	setTimeout(function() {
		$(".bgslider_r_b_7").fadeIn();
		$(".bgslider_r_2_b_7").fadeIn();
	}, 750);
	setTimeout(function() {
		$(".bgslider_r_b_8").fadeIn();
		$(".bgslider_r_2_b_8").fadeIn();
	}, 800);
	setTimeout(function() {
		$(".bgslider_r_b_9").fadeIn();
	}, 850);
	setTimeout(function() {
		$(".bgslider_r_b_10").fadeIn();
	}, 900);
	setTimeout(function() {
		$(".bgslider_r_b_11").fadeIn();
	}, 950);
	setTimeout(function() {
		$(".bgslider_r_b_12").fadeIn();
	}, 1000);
}