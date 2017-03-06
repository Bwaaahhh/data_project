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
                let recherchePlanete = jQuery.parseJSON(result);
            }
        });
    });

    $('.parametre').on('click' , function(){
        if($(this).find('img').css('visibility') ==='hidden'){
            $(this).find('img').css('visibility','visible');
        }else{
            $(this).find('img').css('visibility','hidden');
        }
    });


});
