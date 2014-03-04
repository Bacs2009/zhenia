$(document).ready(function(){	
	//По клику по облаку
	$('div').delegate(".contacts", "click", function(){
		//Убиваем фон меняем его картинку
		$("body, html").css('backgroundImage','none');
		$("body").css('backgroundColor','#f7e3d5');
		$("div.znak, div.cloud1, div.cloud2, div.cloud3, div.cloud4, div.cloud5, div.cloud6, div.center").animate({marginLeft:'-5000px'},1000);
		//Опускаем слайдер
		setTimeout(function() {
			$(".bgslider").empty().css({"backgroundImage":"none","width":"400px","height":"600px","left":"30%","right":"30%"}).animate({top:'18%'},500);
			$("#ada").attr({"href":"#", "class":"b"});
			history.pushState(null,null,'#contacts');
			t = 0;
			//Цепляем телефон
			$(".bgslider")
			.append('<div class="bgslider5_center"></div>')
			.append('<div class="bgslider5_left"></div>')
			.append('<div class="bgslider5_right"></div>');
			//Цепляем волны вибро от телефона
			for (var i = 1; i < 4; i++) {
				$(".bgslider").append('<div class="vibro_l_'+i+'"></div>')
			}
			for (var i = 1; i < 4; i++) {
				$(".bgslider").append('<div class="vibro_r_'+i+'"></div>')
			}
			//Цепляем письма
			for (var i = 1; i < 9; i++) {
				$(".bgslider").append('<div class="mail_'+i+'"></div>')
			}
			//Цепляем колбасу
			for (var i = 1; i < 18; i++) {
				$(".bgslider")
				.append('<div id="kolbasa_'+i+'" style="background:transparent url(img/contacts/kolbasa_'+i+'.png) no-repeat 0 0;" class="kolbasa"></div>');
			}
			//Цепляем верхнюю колбасу
			for (var i = 1; i < 8; i++) {
				$(".bgslider")
				.append('<div id="top_kolbasa_'+i+'" style="background:transparent url(img/contacts/bgslider_r_2_b_'+i+'.png) no-repeat 0 0;" class="top_kolbasa"></div>');
			}
			//Цепляем низ
			for (var i = 1; i < 9; i++) {
				$(".bgslider")
				.append('<div id="phone_bottom_'+i+'" style="background:transparent url(img/contacts/phone_bottom_'+i+'.png) no-repeat 0 0;" class="kolbasa"></div>');
			}
			//Цепляем сопли
			for (var i = 1; i < 9; i++) {
				$(".bgslider")
				.append('<div id="sopli_'+i+'" style="background:transparent url(img/contacts/sopli_'+i+'.png) no-repeat 0 0;" class="kolbasa"></div>');
			}
			//Цепляем верх
			for (var i = 1; i < 8; i++) {
				$(".bgslider")
				.append('<div id="top_'+i+'" style="background:transparent url(img/contacts/top_'+i+'.png) no-repeat 0 0;" class="top_kolbasa"></div>');
			}
			//Запускаем вибро
			setTimeout(function() {
				vibro = true;
				animateContactsCycle();
				//Вылет писем (name, top, left, borderSpacing)
				mailRotate('mail_1', '4em', '-20em');
				mailRotate('mail_2', '9em', '-12em');
				mailRotate('mail_3', '15em', '-19em');
				mailRotate('mail_4', '20em', '-16em');
				mailRotate('mail_5', '4em', '30em', 7200);
				mailRotate('mail_6', '10em', '40em', 7200);
				mailRotate('mail_7', '16em', '34em', 3600);
				mailRotate('mail_8', '22em', '42em', 3600);
				//Появление колбасы
				for (var i = 1; i < 18; i++) {
					$("#kolbasa_"+i).delay(i*100).fadeIn();
				}
				//Появление нижней части под телефоном
				for (var i = 1; i < 9; i++) {
					$("#phone_bottom_"+i).delay(i*100).fadeIn();
				}
				setTimeout(function() {
					//Появление соплей
					for (var i = 1; i < 4; i++) {
						$("#sopli_"+i).delay(i*100).fadeIn();
					}
					//Появление верхней части над телефоном
					for (var i = 1; i < 8; i++) {
						$("#top_kolbasa_"+i).delay(i*100).fadeIn();
					}
					for (var i = 1; i < 8; i++) {
						$("#top_"+i).delay(i*100).fadeIn();
					}
				}, 3000);	
			}, 1000);
			//Остановка вибро через 5 секунд
			setTimeout(function() {
				vibro = false;
			}, 5000);
			
		}, 1000);
	});
	//По клику на лого...
	$('.header').delegate("a.b", "click", function(){
		
	});
});
//Функция анимации телефона
function animateContacts(){
	setTimeout(function() {
		$(".bgslider5_center").css({opacity:'0'});
		$(".bgslider5_left").css({opacity:'1'});
	}, 50);
	setTimeout(function() {
		$(".bgslider5_left").css({opacity:'0'});
		$(".bgslider5_center").css({opacity:'1'});
	}, 100);
	setTimeout(function() {
		$(".bgslider5_center").css({opacity:'0'});
		$(".bgslider5_right").css({opacity:'1'});
	}, 150);
	setTimeout(function() {
		$(".bgslider5_right").css({opacity:'0'});
		$(".bgslider5_center").css({opacity:'1'});
	}, 200);
}
//Цикл и проверка
function animateContactsCycle() {
	if(vibro){
		animateContacts();
		vibroPhone();
		setTimeout("animateContactsCycle()", 100);
	}else{
		$(".vibro_l_1, .vibro_r_1").css({display:'none'});
	}
}
//Функция вибрации волн вокруг
function vibroPhone(){
	setTimeout(function() {
		$(".vibro_l_1, .vibro_r_1").css({opacity:'1'});
	}, 100);
	setTimeout(function() {
		$(".vibro_l_1, .vibro_r_1").css({opacity:'0'});
		$(".vibro_l_2, .vibro_r_2").css({opacity:'1'});
	}, 200);
	setTimeout(function() {
		$(".vibro_l_2, .vibro_r_2").css({opacity:'0'});
		$(".vibro_l_3, .vibro_r_3").css({opacity:'1'});
		$(".vibro_l_1, .vibro_r_1").css({opacity:'1'});
	}, 300);
	setTimeout(function() {
		$(".vibro_l_3, .vibro_r_3").css({opacity:'0'});
	}, 400);
}
//Функция анимации писем при разлете
function mailRotate(name, top, left, bs){
	if(!bs)
		bs = -7200;
	$("."+name).animate({marginTop:top, marginLeft:left, borderSpacing:bs}, {
		step: function(now) {
		  $("."+name).css('-webkit-transform','rotate('+now+'deg)');
		  $("."+name).css('-moz-transform','rotate('+now+'deg)'); 
		  $("."+name).css('-ms-transform','rotate('+now+'deg)');
		  $("."+name).css('-o-transform','rotate('+now+'deg)');
		  $("."+name).css('transform','rotate('+now+'deg)');  
		},
		duration:2000,
	},'linear');
}