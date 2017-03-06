$(document).ready(function(){
    $('#recherche').keyup(function(){
        const recherche = $(this).val();
        $.ajax({
            method: "post",
            url: 'controller/rechercheAjax.php',
            data : {recherche : recherche},
            success : function(result){
                $('#resultRecherche').html(result);
            }
        });
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
                console.log('lala');
                let recherchePlanete = jQuery.parseJSON(result)
                console.log(recherchePlanete);
            }
        });
    });

});
