$(document).ready(function() {

    var count = 0 ;

    $('#next').on('click' , function(){
        count += 1 ;
    });
    $('#prev').on('click' , function(){
        count -=1 ;
    });
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

                $.ajax({
                    type : "post",
                    url: "controller/getnext.php",
                    data: {idplanete : idplanete},
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
					$('#masse').html(res.planete.mass);
					$('#rayon').html(res.planete.radius);
					$('#periode').html(res.planete.orbital_period);
					$('#tcalc').html(res.planete.temp_calculated);
					$('#tmes').html(res.planete.temp_measured);
					$('#molecules').html(res.planete.molecules);
					$('#starnom').html(res.planete.star_name);
					$('#distance').html(res.planete.star_distance);
					$('#starage').html(res.planete.star_age);
					$('#starmasse').html(res.planete.star_mass);
					$('#starrayon').html(res.planete.star_radius);
					$('#startemp').html(res.planete.star_teff);
					$('#type').html(res.planete.star_sp_type);
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

                $.ajax({
                    type : "post",
                    url: "controller/getprev.php",
                    data: {idplanete : idplanete},
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
					$('#masse').html(res.planete.mass);
					$('#rayon').html(res.planete.radius);
					$('#periode').html(res.planete.orbital_period);
					$('#tcalc').html(res.planete.temp_calculated);
					$('#tmes').html(res.planete.temp_measured);
					$('#molecules').html(res.planete.molecules);
					$('#starnom').html(res.planete.star_name);
					$('#distance').html(res.planete.star_distance);
					$('#starage').html(res.planete.star_age);
					$('#starmasse').html(res.planete.star_mass);
					$('#starrayon').html(res.planete.star_radius);
					$('#startemp').html(res.planete.star_teff);
					$('#type').html(res.planete.star_sp_type);
                    },
                });
            });

});
