$(document).ready(function() { 	
		
		$('#pop').on('click',function() {
		$('#popup').fadeIn()
		$('#pop').hide();
		});
	
		 $('#close').on('click',function() { 
		 $('#popup').fadeOut()   
		 $('#pop').show();
		 });
});