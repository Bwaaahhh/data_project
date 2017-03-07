$(document).ready(function() {


        $('#next').on('click',function(e) {
				e.preventDefault();
				var idplanete = $('#idplanet').html();
				var origin = $('#popup').css({left: '15%'});
				$('#popup').animate({left: '-5000px'});
				$('#popup').css({display: 'none'});
				$('#popup').css({left: '10000px'});
				$('#popup').css({display: "block"});
				$('#popup').animate({left: '15%'});
				
				console.log(idplanete);
                $.ajax({
                    type : "post",
                    url: "controller/getnext.php",
                    data: {idplanete : idplanete},
                    success : function(result) {		 
					var res = jQuery.parseJSON(result);
					console.log(res);
					$('#idplanet').html(res.id);
					$('#nom').html(res.nom);
					$('#masse').html(res.mass);
					$('#rayon').html(res.radius);
					$('#periode').html(res.orbital_period);
					$('#tcalc').html(res.temp_calculated);
					$('#tmes').html(res.temp_measured);
					$('#molecules').html(res.molecules);
					$('#starnom').html(res.star_name);
					$('#distance').html(res.star_distance);
					$('#starage').html(res.star_age);
					$('#starmasse').html(res.star_mass);
					$('#starrayon').html(res.star_radius);
					$('#startemp').html(res.star_teff);
					$('#type').html(res.star_sp_type);
					console.log(res.nom);
                    },
                });
            });
		$('#prev').on('click',function(e) {
				e.preventDefault();
				var idplanete = $('#idplanet').html();
				$('#popup').animate({left: '5000px'});
				$('#popup').css({display: 'none'});
				$('#popup').css({left: '-10000px'});
				$('#popup').css({display: "block"});
				$('#popup').animate({left: '15%'});
				
				console.log(idplanete);
                $.ajax({
                    type : "post",
                    url: "controller/getprev.php",
                    data: {idplanete : idplanete},
                    success : function(result) {		 
					var res = jQuery.parseJSON(result);
					console.log(res);
					$('#idplanet').html(res.id);
					$('#nom').html(res.nom);
					$('#masse').html(res.mass);
					$('#rayon').html(res.radius);
					$('#periode').html(res.orbital_period);
					$('#tcalc').html(res.temp_calculated);
					$('#tmes').html(res.temp_measured);
					$('#molecules').html(res.molecules);
					$('#starnom').html(res.star_name);
					$('#distance').html(res.star_distance);
					$('#starage').html(res.star_age);
					$('#starmasse').html(res.star_mass);
					$('#starrayon').html(res.star_radius);
					$('#startemp').html(res.star_teff);
					$('#type').html(res.star_sp_type);
					console.log(res.nom);
                    },
                });
            });	
		
});