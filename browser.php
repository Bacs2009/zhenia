<?php 
if(stristr($_SERVER['HTTP_USER_AGENT'],'Firefox')){
	$bro="firefox.css";
}elseif(stristr($_SERVER['HTTP_USER_AGENT'],'Opera')){
	$bro="opera.css";
}
?>