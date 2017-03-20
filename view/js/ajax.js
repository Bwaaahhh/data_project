$(document).ready(function() {

    var count = 0 ;            //      VARIABLES POUR GESTION COMPORTEMENT BOUTONS
    var methodee = 0;




///////////   GESTION DES VARIABLES AU CLIC SUR LES TROIS METHODES DE RECHERCHE


    $('#pop').on('click' , function(){
        methodee = 1 ;
        count = 0 ;
    });
    $('#resultRecherche ').on('click' , function(){
        methodee = 1;
        count = 0 ;
    });

    $('#selection').on('click' , function(){
        methodee = 0 ;
        count = 0 ;
    });


////////////   GESTION DE LA VARIABLE COUNT POUR RECHERCHE CORRECT LORS DE FILTRE


    $('#next').on('click' , function(){
        count += 1 ;
    });
    $('#prev').on('click' , function(){
        count -=1 ;
    });


/////////////    INJECTION DE DONNEES QUAND CLIC SUR BOUTONS PRECEDENT ET SUIVANT


        $('#next').on('click',function(e) {
				e.preventDefault();
				var idplanete = $('#idplanet').html();
				$('#samestarplanets').html("");
				var origin = $('#popup').css({left: '15%'});
				$('#popup').animate({left: '-5000px'});
				$('#popup').css({display: 'none'});
				$('#popup').css({left: '10000px'});
				$('#popup').css({display: "block"});
				$('#popup').animate({left: '15%'});
                var seelectt = $('#select').val();    // RECUPERATION VALEUR FILTRE
                var methode =$('#methode').val();
                $.ajax({
                    type : "post",
                    url: "controller/getnext.php",
                    data: {idplanete : idplanete , methodee : methodee , count : count , select : seelectt , methode : methode },
                    success : function(result) {
    					var res = jQuery.parseJSON(result);
    					$('#image').attr('src','view/images/'+res.picture["picturename"]);
    					$('#idplanet').html(res.planete['id']);
    					$('#nom').html(res.planete['nom']);
    					$('#annee').html(res.planete['discovered']);
    					$('#methode').html(res.planete['detection_type']);
    					$('#systeme').html(res.planete['star_name']);
    					for(i = 0; i<res.systeme.length; i++){
    						if ( res.planete['nom'] !== res.systeme[i]['nom']) {
    							$('#samestarplanets').append(res.systeme[i]['nom']);
    							$('#samestarplanets').append('<br>')
    						}
    					}
                        if(res.planete.mass != '0'){
                            $('#rayon').html(res.planete.mass);
                        }else{
                            $('#rayon').html("Non défini");
                        }
                        if(res.planete.radius != '0'){
                            $('#rayon').html(res.planete.radius);
                        }else{
                            $('#rayon').html("Non défini");
                        }
                        if(res.planete.orbital_period != '0'){
                            $('#periode').html(res.planete.orbital_period);
                        }else{
                            $('#periode').html("Non défini");
                        }
                        if(res.planete.temp_calculated != '0'){
                            $('#tcalc').html(res.planete.temp_calculated);
                        }else if(res.planete.temp_measured != '0'){
                            $('#tcalc').html(res.planete.temp_measured);
                        }else{
                            $('#tcalc').html("Non défini");
                        }
                        if(res.planete.molecules !== ""){
                            $('#molecules').html(res.planete.molecules);
                        }else{
                            $('#molecules').html("Non défini");
                        }
    					$('#starnom').html(res.planete.star_name);
                        if(res.planete.star_distance != "0"){
                            $('#distance').html(res.planete.star_distance);
                        }else{
                            $('#distance').html("Non défini");
                        }
                        if(res.planete.star_age != '0'){
                            $('#starage').html(res.planete.star_age);
                        }else{
                            $('#starage').html("Non défini");
                        }
                        if(res.planete.star_mass != '0'){
                            $('#starmasse').html(res.planete.star_mass);
                        }else{
                            $('#starmasse').html("Non défini");
                        }
                        if(res.planete.star_radius != '0'){
                            $('#starrayon').html(res.planete.star_radius);
                        }else{
                            $('#starrayon').html("Non défini");
                        }
                        if(res.planete.star_teff != '0'){
                            $('#startemp').html(res.planete.star_teff);
                        }else{
                            $('#startemp').html("Non défini");
                        }
                        if(res.planete.star_sp_type !== ""){
                            $('#type').html(res.planete.star_sp_type);
                        }else{
                            $('#type').html("Non défini");
                        }
                    },
                });
            });
		$('#prev').on('click',function(e) {
				e.preventDefault();
				var idplanete = $('#idplanet').html();
				$('#samestarplanets').html("");
				$('#popup').animate({left: '5000px'});
				$('#popup').css({display: 'none'});
				$('#popup').css({left: '-10000px'});
				$('#popup').css({display: "block"});
				$('#popup').animate({left: '15%'});
                var seelectt = $('#select').val();
                var methode =$('#methode').val();
                $.ajax({
                    type : "post",
                    url: "controller/getprev.php",
                    data: {idplanete : idplanete , methodee : methodee , count : count , select : seelectt , methode : methode },
                    success : function(result) {
    					var res = jQuery.parseJSON(result);
    					$('#image').attr('src','view/images/'+res.picture["picturename"]);
    					$('#idplanet').html(res.planete['id']);
    					$('#nom').html(res.planete['nom']);
    					$('#annee').html(res.planete['discovered']);
    					$('#methode').html(res.planete['detection_type']);
    					$('#systeme').html(res.planete['star_name']);
    					for(i = 0; i<res.systeme.length; i++){
    						if ( res.planete['nom'] !== res.systeme[i]['nom']) {
    							$('#samestarplanets').append(res.systeme[i]['nom']);
    							$('#samestarplanets').append('<br>')
    						}
    					}
                        if(res.planete.mass != '0'){
                            $('#rayon').html(res.planete.mass);
                        }else{
                            $('#rayon').html("Non défini");
                        }
                        if(res.planete.radius != '0'){
                            $('#rayon').html(res.planete.radius);
                        }else{
                            $('#rayon').html("Non défini");
                        }
                        if(res.planete.orbital_period != '0'){
                            $('#periode').html(res.planete.orbital_period);
                        }else{
                            $('#periode').html("Non défini");
                        }
                        if(res.planete.temp_calculated != '0'){
                            $('#tcalc').html(res.planete.temp_calculated);
                        }else if(res.planete.temp_measured != '0'){
                            $('#tcalc').html(res.planete.temp_measured);
                        }else{
                            $('#tcalc').html("Non défini");
                        }
                        if(res.planete.molecules !== ""){
                            $('#molecules').html(res.planete.molecules);
                        }else{
                            $('#molecules').html("Non défini");
                        }
                        $('#starnom').html(res.planete.star_name);
                        if(res.planete.star_distance != "0"){
                            $('#distance').html(res.planete.star_distance);
                        }else{
                            $('#distance').html("Non défini");
                        }
                        if(res.planete.star_age != '0'){
                            $('#starage').html(res.planete.star_age);
                        }else{
                            $('#starage').html("Non défini");
                        }
                        if(res.planete.star_mass != '0'){
                            $('#starmasse').html(res.planete.star_mass);
                        }else{
                            $('#starmasse').html("Non défini");
                        }
                        if(res.planete.star_radius != '0'){
                            $('#starrayon').html(res.planete.star_radius);
                        }else{
                            $('#starrayon').html("Non défini");
                        }
                        if(res.planete.star_teff != '0'){
                            $('#startemp').html(res.planete.star_teff);
                        }else{
                            $('#startemp').html("Non défini");
                        }
                        if(res.planete.star_sp_type !== ""){
                            $('#type').html(res.planete.star_sp_type);
                        }else{
                            $('#type').html("Non défini");
                        }
                    },
                });
            });

});
