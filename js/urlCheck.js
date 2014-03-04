$(window).on('hashchange', function() {
	urlCheck();
});

function urlCheck() {
	if(document.URL.indexOf("/#index") != -1 && t != 1)
	{
		t = 1;
		index();
	}else if(document.URL.indexOf("/#other") != -1  && t != 1)
	{
		t = 1;
		other();
	}else if(document.URL.indexOf("/#zvernit") != -1)
	{
		//$.ajax({url: "zvernit.php",cache: false,beforeSend: function() {$('#mcontent').html('');},success: function(html){$("#mcontent").html(html);}});return false;
	}else if(document.URL.indexOf("/#komentari") != -1)
	{
		//$.ajax({url: "komentari.php",cache: false,beforeSend: function() {$('#mcontent').html('');},success: function(html){$("#mcontent").html(html);}});return false;
	}else if(document.URL.indexOf("/#courts") != -1)
	{
		//$.ajax({url: "sudy.htm",cache: false,beforeSend: function() {$('#mcontent').html('');},success: function(html){$("#mcontent").html(html);}});return false;
	}else if(document.URL.indexOf("/#sudova_praktika") != -1)
	{
		//$.ajax({url: "sudova_praktika.php",cache: false,beforeSend: function() {$('#mcontent').html('');},success: function(html){$("#mcontent").html(html);}});return false;
	}
}

function index(){
	$(".bgslider").animate({top:'-150%'},500);
	$("body, html").css('backgroundImage','url(img/bg3.jpg)');
	$(".bgBg, .bgCircle").remove();
	$("div.center").animate({marginLeft:'25%'},500);
	var winwidth = $(window).width();
	setTimeout(function() {
		if(winwidth>1200 && winwidth<1350){
			$(".cloud1").animate({opacity:'1', marginLeft:'7%'},500);
		}else{
			$(".cloud1").animate({opacity:'1', marginLeft:'10%'},500);
		}	
	}, 1000);
	setTimeout(function() {
		if(winwidth>1200 && winwidth<1350){
			$(".cloud1").animate({marginLeft:'6%'},200);
		}else{
			$(".cloud1").animate({marginLeft:'9%'},200);
		}
		function function_name() {    //создаем функцию с именем function_name
			$(".cloud1").animate({       //добавляем парочку анимаций
			"marginTop" : "+=0.3%"}, 700)
			.animate({
			"marginTop" : "-=0.3%"}, 700, function_name); // по завершению последней анимации вызываем нашу функцию в качестве callback
		};
		function_name();  //запускаем нашу функцию
	}, 1000);
	setTimeout(function() {
		$(".cloud2").animate({opacity:'1', marginLeft:'75%'},500);
	}, 1500);
	setTimeout(function() {
		$(".cloud2").animate({marginLeft:'74%'},200);
		function function_name2() {    //создаем функцию с именем function_name
			$(".cloud2").animate({       //добавляем парочку анимаций
			"marginTop" : "+=0.3%"}, 600)
			.animate({
			"marginTop" : "-=0.3%"}, 600, function_name2); // по завершению последней анимации вызываем нашу функцию в качестве callback
		};
		function_name2();  //запускаем нашу функцию
	}, 1500);
	setTimeout(function() {
		if(winwidth>1200 && winwidth<1350){
			$(".cloud3").animate({opacity:'1', marginLeft:'20%'},500);
		}else{
			$(".cloud3").animate({opacity:'1', marginLeft:'26%'},500);
		}
	}, 2000);
	setTimeout(function() {
		if(winwidth>1200 && winwidth<1350){
			$(".cloud3").animate({opacity:'1', marginLeft:'19%'},200);
		}else{
			$(".cloud3").animate({opacity:'1', marginLeft:'25%'},200);
		}	
		function function_name3() {    //создаем функцию с именем function_name
			$(".cloud3").animate({       //добавляем парочку анимаций
			"marginTop" : "+=0.4%"}, 600)
			.animate({
			"marginTop" : "-=0.4%"}, 600, function_name3); // по завершению последней анимации вызываем нашу функцию в качестве callback
		};
		function_name3();  //запускаем нашу функцию
	}, 2000);
	setTimeout(function() {
		if(winwidth>1200 && winwidth<1350){
			$(".cloud4").animate({opacity:'1', marginLeft:'3%'},500);
		}else if(winwidth>1100 && winwidth<1200){
			$(".cloud4").animate({opacity:'1', marginLeft:'2%'},200);
		}else{
			$(".cloud4").animate({opacity:'1', marginLeft:'7%'},500);
		}
	}, 2500);
	setTimeout(function() {
		if(winwidth>1200 && winwidth<1350){
			$(".cloud4").animate({marginLeft:'4%'},200);
		}else if(winwidth>1100 && winwidth<1200){
			$(".cloud4").animate({marginLeft:'3%'},200);
		}else{
			$(".cloud4").animate({marginLeft:'8%'},200);
		}
		function function_name4() {    //создаем функцию с именем function_name
			$(".cloud4").animate({       //добавляем парочку анимаций
			"marginTop" : "+=0.3%"}, 600)
			.animate({
			"marginTop" : "-=0.3%"}, 600, function_name4); // по завершению последней анимации вызываем нашу функцию в качестве callback
		};
		function_name4();  //запускаем нашу функцию
	}, 2500);
	setTimeout(function() {
		$(".cloud5").animate({opacity:'1', marginLeft:'81%'},500);
	}, 3000);
	setTimeout(function() {
		$(".cloud5").animate({marginLeft:'80%'},200);
		function function_name5() {    //создаем функцию с именем function_name
			$(".cloud5").animate({       //добавляем парочку анимаций
			"marginTop" : "+=0.3%"}, 600)
			.animate({
			"marginTop" : "-=0.3%"}, 600, function_name5); // по завершению последней анимации вызываем нашу функцию в качестве callback
		};
		function_name5();  //запускаем нашу функцию
	}, 3000);
	setTimeout(function() {
		if(winwidth>1900 && winwidth<2000){
			$(".cloud6").animate({opacity:'1', marginLeft:'80%'},500);
		}else{
			$(".cloud6").animate({opacity:'1', marginLeft:'70%'},500);
		}	
	}, 3500);
	setTimeout(function() {
		if(winwidth>1900 && winwidth<2000){
			$(".cloud6").animate({marginLeft:'81%'},200);
		}else{
			$(".cloud6").animate({marginLeft:'71%'},200);
		}
		function function_name6() {    //создаем функцию с именем function_name
			$(".cloud6").animate({       //добавляем парочку анимаций
			"marginTop" : "+=0.3%"}, 600)
			.animate({
			"marginTop" : "-=0.3%"}, 600, function_name6); // по завершению последней анимации вызываем нашу функцию в качестве callback
		};
		function_name6();  //запускаем нашу функцию
	}, 3500);
	setTimeout(function() {
		if(winwidth>1100 && winwidth<1200){
			$(".cloud7").animate({opacity:'1', marginLeft:'50px'},500);
			$(".cloud7").css('marginTop','-250px');
		}	
	}, 4000);
	setTimeout(function() {
		$(".cloud7").animate({marginLeft:'70px'},200);
	}, 4000);
	setTimeout(function() {
		$(".portfolio").animate({opacity:'1'},200);
	}, 4500);
	setTimeout(function() {
		$(".znak").animate({opacity:'1'},200);
	}, 5000);
	setTimeout(function() {
		$(".contacts").animate({opacity:'1'},200);
	}, 5500);
}

function other(){
	$(".bgslider").animate({top:'-150%'},500);
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
}