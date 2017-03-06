$(document).ready(function() { 	
		
		$('button#pop').on('click',function() {
		$('div#popup').fadeIn()
	
		});
	
		$('button#close').on('click',function() { 
		$('div#popup').fadeOut()         
		});
});