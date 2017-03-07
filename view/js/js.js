$(document).ready(function(){
    $('#recherche').keyup(function(){
        const recherche = $(this).val();
        if(recherche === ""){
            $('.planeteGeneree').html("");
        }else{
            $.ajax({
                method: "post",
                url: 'controller/rechercheAjax.php',
                data : {recherche : recherche},
                success : function(result){
                    $('#resultRecherche').html(result);
                }
            });
        }

    });

    $('.resultRecherche').on('click', ".planeteGeneree" ,function(){
        const search = $(this).html();
        $('.planeteGeneree').html("");
        $('#recherche').val("");
		$('#popup').fadeIn();
        $.ajax({
            method: "post",
            url: 'controller/recherchePlaneteUnique.php',
            data: {search : search},
            success : function(result){
                let res = jQuery.parseJSON(result);
                console.log(res);
					$('#idplanet').html(res.id);
					$('#nom').html(res.nom);
					$('#annee').html(res.discovered);
					$('#methode').html(res.detection_type);
					$('#systeme').html(res.star_name);
					$('#samestarplanets').html(res.nom);
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
            }
        });
    });

});