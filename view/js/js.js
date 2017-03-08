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
        $('#samestarplanets').html("");
		$('#popup').fadeIn();
        $.ajax({
            method: "post",
            url: 'controller/recherchePlaneteUnique.php',
            data: {search : search},
            success : function(result){
                let res = jQuery.parseJSON(result);
					$('#idplanet').html(res.planete['id']);
					$('#nom').html(res.planete.nom);
					$('#annee').html(res.planete['discovered']);
					$('#methode').html(res.planete['detection_type']);
					$('#systeme').html(res.planete['star_name']);
                    for(i = 0; i<res.systeme.length; i++){
                        if(res.systeme[i]['nom'] !== res.planete['nom']){
                            $('#samestarplanets').append(res.systeme[i]['nom']);
                            $('#samestarplanets').append('<br >');
                        }
                    }
					$('#masse').html(res.planete['mass']);
					$('#rayon').html(res.planete['radius']);
					$('#periode').html(res.planete['orbital_period']);
					$('#tcalc').html(res.planete['temp_calculated']);
					$('#tmes').html(res.planete['temp_measured']);
					$('#molecules').html(res.planete['molecules']);
					$('#starnom').html(res.planete['star_name']);
					$('#distance').html(res.planete['star_distance']);
					$('#starage').html(res.planete['star_age']);
					$('#starmasse').html(res.planete['star_mass']);
					$('#starrayon').html(res.planete['star_radius']);
					$('#startemp').html(res.planete['star_teff']);
					$('#type').html(res.planete['star_sp_type']);
            }
        });
    });

    var count = 0 ;

    $('#formSelect').submit(function(e){
        $('#count').val(count);
        e.preventDefault();
        var donnee = $(this).serialize();
        console.log(donnee);
        $.ajax({
            method : 'post',
            url : 'controller/recupSelect.php',
            data : donnee,
            success : function(result){
                let rechercheSelect = jQuery.parseJSON(result);
                console.log(rechercheSelect);
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

    $('.parametre img').on('click' , function(e){
        let select = $(this).attr("select") ;
        $('#select').val(select);
    });
    $('.parametre p').on('click' , function(){
        let methode = $(this).attr("methode");
        $('#methode').val(methode);
    });
    $('#next').on('click' , function(){
        count += 1 ;
        console.log(count);
    });
    $('#prev').on('click' , function(){
        count -=1 ;
    });


});
