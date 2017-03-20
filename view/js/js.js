

// ////////////////////////    FONCTION POUR LAUTO COMPLETION   ///////////////////////////////


$(document).ready(function(){
    $('body').on('click' , function(){
        $('.planeteGeneree').html("");
        $('#recherche').val("");
        $('#resultRecherche').css('visibility' , 'hidden');
    });
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


//////////////////////////// GENERATION DE LA POP UP QUAND CLIC SUR UN DES RESULTATS DE RECHERCHE    ////////////////////////



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
				$('#image').attr('src','view/images/'+res.picture["picturename"]);
				$('#idplanet').html(res.planete['id']);
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
            }
        });
    });


    //////////////////////////// GENERATION DE LA POP UP QUAND CLIC RECHERCHE PAR FILTRE    ////////////////////////



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
        $.ajax({
            method : 'post',
            url : 'controller/recupSelect.php',
            data : donnee,
            success : function(result){
                var res = jQuery.parseJSON(result);
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
            }
        });
    });



//     /////////////////////////   GESTION APPARITION DES IMAGES POUR FILTRE       /////////



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




    var choix1 = 0 ;    //    /////////    MISE EN PLACE DES VARIABLES POUR GESTION
    var choix2 = 0 ;    //   /////////     COMPORTEMENT DES BOUTONS DE LA POPUP



    // ////////////////////////////// APPARITION ET GESTION DU TEXTE SELON LES FILTRE CHOISI       ///////////////////



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



//   ////////////      GESTION DU BOUTONS POUR REINITIALISER LES FILTRES   ///////////



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
