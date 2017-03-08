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
        $.ajax({
            method: "post",
            url: 'controller/recherchePlaneteUnique.php',
            data: {search : search},
            success : function(result){
                console.log(result);
               let recherchePlanete = jQuery.parseJSON(result);
            }
        });
    });
































    $('#formSelect').submit(function(e){
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


});
