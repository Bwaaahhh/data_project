$(document).ready(function() {
		$('.ici').on('click',function() {
			$('.presentation').fadeOut();
			$('#popup').delay(500).fadeIn();       //    GESTION DE LAPPARITION DE LA POPUP
			$('#multiSelect').html('');            //    ET DISPARITION DES TEXTES QUAND CLIC SUR
	        $('#selectt').html('');                //    LE BOUTON ICI
	        $('#methodde').html('');
			$('#choixSelect').css('visibility' , 'hidden');
			$('.buttonRecherche').css('visibility' , 'hidden');
	        $('.parametre img').css('visibility' , 'hidden');
	        $('.parametre .pMethodeRecherche').css('visibility' , 'hidden');
		});
		 $('#close').on('click',function() {                //    GESTION DISPARITION POPUP ET
			$('#popup').fadeOut();							//    APPARITION DU TEXTE SI FERMETURE POPUP
		 	$('.presentation').delay(500).fadeIn();
		 });

		 $('#lexic').on('click',function() {                 //   GESTION POP UP LEXIQUE
			$('.presentation').fadeOut();
			$('#poplexique').delay(500).fadeIn();
			$('#multiSelect').html('');
	        $('#selectt').html('');
	        $('#methodde').html('');
			$('#choixSelect').css('visibility' , 'hidden');
			$('.buttonRecherche').css('visibility' , 'hidden');
	        $('.parametre img').css('visibility' , 'hidden');
	        $('.parametre .pMethodeRecherche').css('visibility' , 'hidden');
		});
		 $('#closelexique').on('click',function() {
			$('#poplexique').fadeOut();
		 	$('.presentation').delay(500).fadeIn();
		 });

 });
