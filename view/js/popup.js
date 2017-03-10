$(document).ready(function() {

		$('#pop').on('click',function() {
		$('.presentation').fadeOut();
		$('#popup').delay(500).fadeIn();
		});
		 $('#close').on('click',function() {
		 $('#popup').fadeOut();
		 $('.presentation').delay(500).fadeIn();
		 });
 });
