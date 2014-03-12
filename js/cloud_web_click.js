$(document).ready(function(){	
	//По клику по облаку "websites"
	$('div').delegate(".c_back5", "click", function(){
		//Функция, загружающая страницу "websites"
		websites();
	});
});