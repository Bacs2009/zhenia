$(document).ready(function(){	
	function_ulitka();
});

function function_ulitka() {
	w = $(window).width();
	h = $(window).height();
	go();
}
	
function startHim(){
	$("#pancir").animate({marginTop:"-=1px"},650).animate({marginTop:"+=1px"},650);
	$("#roga, #telo").animate({marginTop:"-=1px"},650).animate({marginTop:"+=1px"},650);
	setTimeout("startHim()",300);
}

function go(){
	startHim();
	w = w - 100;
	$(".ulitka").animate(
	{
		left:w,
		marginLeft:"0px"
	}, {
		easing:"linear",
		duration:80000,
		complete:function(){
			var elem = $(".ulitka");
			$({deg:0}).animate({deg:-90}, {
				duration: 1000,
				complete:goUp(),
				step: function(now){
					elem.css({
						transform: "rotate(" + now + "deg)"
					});
				}
			});
		}
    });
}

function goUp(){
	h = h - 138;
	$(".ulitka").animate(
	{
		bottom:h,
		marginTop:"0px"
	}, {
		easing:"linear",
		duration:60000,
		complete:function(){
			var elem = $(".ulitka");
			$({deg:-90}).animate({deg:-180}, {
				duration: 1000,
				complete:goLeft(),
				step: function(now){
					elem.css({
						transform: "rotate(" + now + "deg)"
					});
				}
			});
		}
    });
}

function goLeft(){
	$(".ulitka").animate(
	{
		left:22,
		marginRight:"0px"
	}, {
		easing:"linear",
		duration:80000,
		complete:function(){
			var elem = $(".ulitka");
			$({deg:-180}).animate({deg:-270}, {
				duration: 1000,
				complete:goDown(),
				step: function(now){
					elem.css({
						transform: "rotate(" + now + "deg)"
					});
				}
			});
		}
    });
}

function goDown(){
	h = h - 140;
	$(".ulitka").animate(
	{
		bottom:-15,
		marginBottom:"0px"
	}, {
		easing:"linear",
		duration:80000,
		complete:function(){
			var elem = $(".ulitka");
			$({deg:-270}).animate({deg:-360}, {
				duration: 1000,
				complete:go(),
				step: function(now){
					elem.css({
						transform: "rotate(" + now + "deg)"
					});
				}
			});
		}
    });
}