$(document).ready(function(){
    $('#recherche').keyup(function(){
        const recherche = $(this).val();
        if(recherche === ""){
            $('.planeteGeneree').html("");
            $('#resultRecherche').css('visibility' , 'hidden');
        }else{
            $.ajax({
                method: "post",
                url: 'controller/rechercheAjax.php',
                data : {recherche : recherche},
                success : function(result){
                    $('#resultRecherche').html(result);
                    $('#resultRecherche').css('visibility' , 'visible');
                }
            });
        }

    });

    $('.resultRecherche').on('click', ".planeteGeneree" ,function(){
        const search = $(this).html();
        $('.planeteGeneree').html("");
        $('#recherche').val("");
        $('#samestarplanets').html("");
        $('.presentation').fadeOut();
		$('#popup').delay(500).fadeIn();
        $('#multiSelect').html('');
        $('#selectt').html('');
        $('#methodde').html('');
        $('#choixSelect').css('visibility' , 'hidden');
        $('.buttonRecherche').css('visibility' , 'hidden');
        $('.parametre img').css('visibility' , 'hidden');
        $('.parametre .pMethodeRecherche').css('visibility' , 'hidden');
        $('#resultRecherche').css('visibility' , 'hidden');
        $.ajax({
            method: "post",
            url: 'controller/recherchePlaneteUnique.php',
            data: {search : search},
            success : function(result){
                let res = jQuery.parseJSON(result);
					$('#idplanet').html(res.planete.id);
					$('#nom').html(res.planete.nom);
					$('#annee').html(res.planete.discovered);
					$('#methodeeee').html(res.planete.detection_type);
					$('#systeme').html(res.planete.star_name);
                    for(i = 0; i<res.systeme.length; i++){
                        if(res.systeme[i].nom !== res.planete.nom){
                            $('#samestarplanets').append(res.systeme[i].nom);
                            $('#samestarplanets').append('<br >');
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
            }
        });
    });

    var count = 0 ;

    $('#formSelect').submit(function(e){
        $('#count').val(count);
        $('.presentation').fadeOut();
		$('#popup').delay(500).fadeIn();
        $('#samestarplanets').html("");
        $('#multiSelect').html('');
        $('#selectt').html('');
        $('#methodde').html('');
        $('#choixSelect').css('visibility' , 'hidden');
        $('.buttonRecherche').css('visibility' , 'hidden');
        $('.parametre img').css('visibility' , 'hidden');
        $('.parametre .pMethodeRecherche').css('visibility' , 'hidden');
        e.preventDefault();
        var donnee = $(this).serialize();
        console.log(donnee);
        $.ajax({
            method : 'post',
            url : 'controller/recupSelect.php',
            data : donnee,
            success : function(result){
                var res = jQuery.parseJSON(result);
                console.log(res);
                $('#idplanet').html(res.id);
                $('#nom').html(res.nom);
                $('#annee').html(res.discovered);
                $('#methodeeee').html(res.detection_type);
                $('#systeme').html(res.star_name);
                for(i = 0; i<res.systeme.length; i++){
                    if(res.systeme[i].nom !== res.planete.nom){
                        $('#samestarplanets').append(res.systeme[i].nom);
                        $('#samestarplanets').append('<br >');
                    }
                }
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

    $('#facteurMasse').on('click', function(){
        if($('#imagePoid').css('visibility') === 'hidden'){
            $('#imagePoid').css('visibility','visible');
            $('#imagePlume').css('visibility','visible');
        }else{
            $('#imagePoid').css('visibility','hidden');
            $('#imagePlume').css('visibility','hidden');
        }
    });
    $('#facteurTemp').on('click', function(){
        if($('#imageChaud').css('visibility') === 'hidden'){
            $('#imageChaud').css('visibility','visible');
            $('#imageFroid').css('visibility','visible');
        }else{
            $('#imageChaud').css('visibility','hidden');
            $('#imageFroid').css('visibility','hidden');
        }
    });
    $('#facteurAnnee').on('click', function(){
        if($('#imageVieux').css('visibility') === 'hidden'){
            $('#imageVieux').css('visibility','visible');
            $('#imageJeune').css('visibility','visible');
        }else{
            $('#imageVieux').css('visibility','hidden');
            $('#imageJeune').css('visibility','hidden');
        }
    });

    $('#methodeRecherche').on('click', function(){
        if($('.pMethodeRecherche').css('visibility') === 'hidden'){
            $('.pMethodeRecherche').css('visibility' ,'visible');
        }else{
            $('.pMethodeRecherche').css('visibility', 'hidden');
        }
    });

    var choix1 = 0 ;
    var choix2 = 0 ;

    $('.parametre img').on('click' , function(e){
        $('#choixSelect').css('visibility' , 'visible');
        let select = $(this).attr("select") ;
        var textSelect = "" ;
        $('#select').val(select);
        if(select == "poidAsc" ){
            textSelect = " de trier les planètes en commencant par les plus légères" ;
        }else if(select == "poidDesc"){
            textSelect = " de trier les planètes en commencant par les plus lourdes" ;
        }else if(select == "tempAsc"){
            textSelect = " de trier les planètes en commencant les plus froides" ;
        }else if(select == "tempDesc"){
            textSelect = " de trier les planètes en commencant les plus chaudes" ;
        }else if(select == "anneeAsc"){
            textSelect = " de trier les planètes en commencant par celles découverte il y a le plus longtemps" ;
        }else if(select == "anneeDesc"){
            textSelect = " de trier les planètes en commencant par celles découverte il y a le moins longtemps" ;
        }
        $('#selectt').html(textSelect);
        choix1 = 1 ;
        $('.buttonRecherche').css('visibility' , 'visible');
        if(choix1 === 1 && choix2 === 1){
            $('#multiSelect').html(' et');
        }
    });
    $('.pMethodeRecherche').on('click' , function(){
        let methode = $(this).attr("methode");
        var methodeSelect = "";
        $('#methode').val(methode);
        $('#choixSelect').css('visibility' , 'visible');
        if(methode == "Primary" ){
            methodeSelect = "de ne voir que celles détectées par la méthode du transit";
        }else if(methode == "Radial"){
            methodeSelect = "de ne voir que celles détectées par la méthode de vitesse radiale";
        }else if(methode == "Imaging"){
            methodeSelect = "de ne voir que celles détectées par l'effet de microlentille gravitationnelle";
        }
        $('#methodde').html(methodeSelect);
        choix2 = 1 ;
        if(choix1 === 1 && choix2 === 1){
            $('#multiSelect').html(' et ');
        }
        $('.buttonRecherche').css('visibility' , 'visible');
    });

    $('#annulerRecherche').click(function(){
        $('#multiSelect').html('');
        $('#selectt').html('');
        $('#methodde').html('');
        $('#choixSelect').css('visibility' , 'hidden');
        $('.buttonRecherche').css('visibility' , 'hidden');
        $('.parametre img').css('visibility' , 'hidden');
        $('.parametre .pMethodeRecherche').css('visibility' , 'hidden');
    });

});
