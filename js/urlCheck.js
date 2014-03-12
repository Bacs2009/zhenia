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
	}else if(document.URL.indexOf("/#poligraphy") != -1)
	{
		t = 1;
		poligraphy();
	}else if(document.URL.indexOf("/#websites") != -1)
	{
		t = 1;
		websites();
	}else if(document.URL.indexOf("/#about") != -1)
	{
		t = 1;
		about();
	}else if(document.URL.indexOf("/#identity") != -1)
	{
		t = 1;
		identity();
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