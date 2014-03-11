//Переход на about
function about(){
	$(".bgslider").animate({top:'-150%'},500);
	$("body, html").css('backgroundImage','none');
	$("body").css('backgroundColor','#aae5e0');
	$(".bgBg").fadeOut(2000);
	$(".bgBg").remove();
	$("body").append('<div class="bgBg"></div>');
	$(".hi").animate({marginRight:'-300%'},1000);
	$(".hi_sova").animate({marginRight:'-25px'},1000);
	$(".hi_sova").append('<div class="eye"></div>');
	$(".hi_sova").append('<div class="eye1"></div>');
	$(".hi_sova").append('<div class="eye2"></div>');
	$(".hi2").fadeOut(200);
	$(".hi2").css('display','none').delay(2000).empty().append('<img src="img/hi2_sova.png" />').fadeIn(500);
	//События по наведению на лого
	$(".hi2").mouseover(function(){
		$(this).css('cursor','pointer');
	});
	$(".hi2").mouseout(function(){
		$(this).css('cursor','auto');
	});
	//Убираем все с экрана
	$("div.znak, div.cloud1, div.cloud2, div.cloud3, div.cloud4, div.cloud5, div.cloud6, div.center").animate({marginLeft:'-5000px'},1000);
	
	//Опускаем слайдер
	setTimeout(function() {
		$(".bgslider").empty().css({"background-image":"url(img/bgslider6.png)","width":"900px","height":"630px","left":"15%","right":"15%"}).animate({top:'20%'},500);
		$(".bgslider").append('<div class="about_center"></div>')
		// Стрелки
		.append('<div class="back_about" title="Back to Websites"></div>')
		.append('<div class="next_about" title="Go to Identity"></div>');
		//Нитка от шарика
		$("#ada").attr({"href":"#", "class":"b"});
		history.pushState(null,null,'#about_me');
		t = 0;
		//Цепляем левые верхние элементы div
		for (var i = 1; i < 7; i++) {
			$(".bgslider")
			.append('<div id="about_left_top_'+i+'" style="background:transparent url(img/about/left_top_'+i+'.png) no-repeat 0 0;" class="about_left_top"></div>');
		}
		//Цепляем правые верхние элементы div
		for (var i = 1; i < 5; i++) {
			$(".bgslider")
			.append('<div id="about_right_top_'+i+'" style="background:transparent url(img/about/right_top_'+i+'.png) no-repeat 0 0;" class="about_right_top"></div>');
		}
		//Цепляем левые нижние элементы div
		for (var i = 1; i < 6; i++) {
			$(".bgslider")
			.append('<div id="about_left_bottom_'+i+'" style="background:transparent url(img/about/left_bottom_'+i+'.png) no-repeat 0 0;" class="about_left_bottom"></div>');
		}
		//Цепляем левые нижние элементы div
		for (var i = 1; i < 7; i++) {
			$(".bgslider")
			.append('<div id="about_right_bottom_'+i+'" style="background:transparent url(img/about/right_bottom_'+i+'.png) no-repeat 0 0;" class="about_right_bottom"></div>');
		}
	}, 1000);
	setTimeout(function() {
		//Появление левых верхних элементов div
		for (var i = 1; i < 7; i++) {
			$("#about_left_top_"+i).delay(i*150).fadeIn();
		}
		//Появление правых верхних элементов div
		for (var i = 1; i < 5; i++) {
			$("#about_right_top_"+i).delay(i*150).fadeIn();
		}
		//Появление левых нижних элементов div
		for (var i = 1; i < 6; i++) {
			$("#about_left_bottom_"+i).delay(i*150).fadeIn();
		}
		//Появление правых нижних элементов div
		for (var i = 1; i < 6; i++) {
			$("#about_right_bottom_"+i).delay(i*150).fadeIn();
		}
		//Появление правых нижних элементов div и стрелок
		$(".about_center").fadeIn();
		$(".next_about, .back_about").delay(1000).fadeIn();
	}, 2000);
	//По клику на лого...
	$('.header').delegate("a.b", "click", function(){
	
	});
	// Поведение навигационных ссылок back и next
	$(".bgslider").on("mouseover", ".back_about", function(){
		$(this).effect( "shake", { direction: "left", times: 10, distance: 1}, 500 );
	});
	$(".bgslider").on("mouseover", ".next_about", function(){
		$(this).effect( "shake", { direction: "left", times: 10, distance: 1}, 500 );
	});
	$(".bgslider").on("click", ".back_about", function(){
		location.hash = "#websites";
	});
	$(".bgslider").on("click", ".next_about", function(){
		location.hash = "#identity";
	});
}