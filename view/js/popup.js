$(document).ready(function() {

		$('#pop').on('click',function() {
			$('.presentation').fadeOut();
			$('#popup').delay(500).fadeIn();
			$('#multiSelect').html('');
	        $('#selectt').html('');
	        $('#methodde').html('');
			$('#choixSelect').css('visibility' , 'hidden');
			$('.buttonRecherche').css('visibility' , 'hidden');
	        $('.parametre img').css('visibility' , 'hidden');
	        $('.parametre .pMethodeRecherche').css('visibility' , 'hidden');
		});
		 $('#close').on('click',function() {
			$('#popup').fadeOut();
		 	$('.presentation').delay(500).fadeIn();
		 });
 });
