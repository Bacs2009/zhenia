$(document).ready(function(){
	function myComplete() {
		$('img.c1').remove();
		$('.cloud1').append('<img id=\"identity\" class=\"c_back1\" src=\"img/cloud1_back.png\" />').css('cursor','pointer');
		$('.portfolio').css({'opacity':'0', 'z-index':'-7789878'});
	}
	function myComplete2() {
		$('img.c2').remove();
		$('.cloud2').append('<img class=\"c_back2\" src=\"img/cloud2_back.png\" />').css('cursor','pointer');
	}
	function myComplete3() {
		$('img.c3').remove();
		$('.cloud3').append('<img class=\"c_back3\" src=\"img/cloud3_back.png\" />').css('cursor','pointer');
	}
	function myComplete5() {
		$('img.c5').remove();
		$('.cloud5').append('<img class=\"c_back5\" src=\"img/cloud5_back.png\" />').css('cursor','pointer');
	}
	
	$('#portfolio').on('click', function(){
		$('.cloud1').rotate3Di(180, 400, {
            complete: myComplete
        });
		$('.cloud2').rotate3Di(180, 400, {
            complete: myComplete2
        });
		$('.cloud3').rotate3Di(180, 400, {
            complete: myComplete3
        });
		$('.cloud5').rotate3Di(180, 400, {
            complete: myComplete5
        });
		history.pushState(null,null,'#index');
	});
});	