<?php

require_once('pdo.php');
require_once('class/Planete.php');
$recherche = $_POST['recherche'];


$planete = new Planete();



/////////////    APPEL DE LA METHODE POUR AUTOCOMPLETION


$result = $planete->searchPlanete($recherche);
$count = count($result);
if($count < 1){
    echo "Aucun résultat pour cette recherche";
}else{
    foreach($result as $row){
        echo "<p id='pop' class='planeteGeneree'>$row->nom</p>" ;
    }
}



 ?>
