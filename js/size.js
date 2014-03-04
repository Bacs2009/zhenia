$(function(){
	alert($(window).width());
	var winwidth = $(window).width();
	//alert($(window).height());
	var winheight = $(window).height();
	if(winwidth>1900){
		
    }else if(winwidth>1800 && winwidth<1900){
		
    }else if(winwidth>1700 && winwidth<1800){
		
    }else if(winwidth>1600 && winwidth<1700){
		
    }else if(winwidth>1500 && winwidth<1600){
		
	}else if(winwidth>1400 && winwidth<1500){
		
	}else if(winwidth>1300 && winwidth<1400){
		
	}else if(winwidth>1200 && winwidth<1250){
		
	}else if(winwidth>1250 && winwidth<1300){
		
	}else if(winwidth>1100 && winwidth<1150){
		$('.hi').css('marginLeft', '500px');
		$('.center').css({"backgroundImage":"url(img/center3.png)","width":"600px","height":"600px","margin-top":"120px"});
		$('.portfolio').css({"margin-left":"480px","margin-top":"-365px"});
		$('.contacts').css({"margin-left":"320px","margin-top":"-240px"});
		$('.znak').css({"margin-left":"200px","margin-top":"-255px"});
		$('.bird').css({"margin-left":"-100px","margin-top":"-230px"});
		$('.arrow').css('marginTop', '-165px');
		$('.about').css('marginTop', '-50px');
		$('body').css('backgroundImage', 'url(img/bg3.jpg)');
		$('html').css('backgroundImage', 'url(img/bg3.jpg)');
	}else if(winwidth>1150 && winwidth<1200){
		
	}
});