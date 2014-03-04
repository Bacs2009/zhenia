$(document).ready(function(){	
	function_name2();
});

function function_name2() {
	startHim();
	go();
	setTimeout("AnimateRotate(-90, 0)",80000);
	setTimeout("goUp()", 81000);
	setTimeout("AnimateRotate(-180, -90)",141000);
	setTimeout("goLeft()", 142000);
	setTimeout("AnimateRotate(-270, -180)",222000);
	setTimeout("goDown()", 223000);
	setTimeout("AnimateRotate(-360, -270)",283000);
	setTimeout("function_name2()",284000);
}
	
function startHim(){
	$("#pancir").animate({marginTop:"-=1px"},650).animate({marginTop:"+=1px"},650);
	$("#roga, #telo").animate({marginTop:"-=1px"},650).animate({marginTop:"+=1px"},650);
	setTimeout("startHim()",300);
}

function go(){
	var w = '';
	w = $(window).width();
	w = w - 100;
	$(".ulitka").animate({left:w,marginLeft:"0px"},80000, "linear");
}

function goUp(){
	var h = '';
	var h = $(window).height();
	h = h - 138;
	$(".ulitka").animate({bottom:h,marginTop:"0px"},60000, "linear");
}

function goLeft(){
	$(".ulitka").animate({left:22,marginRight:"0px"},80000, "linear");
}

function goDown(){
	var h = '';
	h = $(window).height();
	h = h - 140;
	$(".ulitka").animate({bottom:-15,marginBottom:"0px"},60000, "linear");
}

function AnimateRotate(d, itstime){
    var elem = $(".ulitka");

    $({deg: itstime}).animate({deg: d}, {
        duration: 1000,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}