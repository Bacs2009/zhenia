$(window).on('hashchange', function() {
	urlCheck();
});

function urlCheck() {
	if(document.URL.indexOf("/#index") != -1 && t != 1)
	{
		t = 1;
		main();
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