$(document).ready(function() { 	
		
		$('button#pop').on('click',function() {
		$('div#popup').fadeIn()
	
		});
	
		 $('#close').on('click',function() { 
		 $('div#popup').fadeOut()         
		 });
});