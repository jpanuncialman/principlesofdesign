$(document).ready(function(){
	$('.nav-icon').click(function(){
		$("#menu").toggleClass("show-menu");
		$('.nav-icon').toggleClass('active');
	});
})