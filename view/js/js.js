$(document).ready(function(){
    $('#recherche').keyup(function(){
        const recherche = $(this).val();
        console.log(recherche);
        $.ajax({
            method: "post",
            url: 'controller/rechercheAjax.php',
            data : {recherche : recherche},
            success : function(result){
                console.log(result);
            }
        });
    });
});
