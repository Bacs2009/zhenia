$(document).ready(function(){	
	//По клику по облаку "about"
	$('div').delegate(".about", "click", function(){
		// переходим на about
		about();
	});
});