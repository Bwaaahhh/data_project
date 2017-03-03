$(document).ready(function(e) { 	
		
		$('#pop').on('click',function(e) {
		e.preventDefault();	
		$('div#popup').fadeIn()				
	
		});
	
		$('#close').on('click',function() { 
		$('div#popup').fadeOut()         
		});
});