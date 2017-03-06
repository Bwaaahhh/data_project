$(document).ready(function() {


        $('#next').on('click',function() {
				// var next = $(this).attr("id_next");
				var idplanete = $('#idplanet').html();
				console.log(idplanete);
				var div = $('#popup').hide();
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
});