<?php

require_once('pdo.php');
require_once('class/Planete.php');
$recherche = $_POST['recherche'];

// var_dump($recherche);

$planete = new Planete();

$result = $planete->searchPlanete($recherche);
foreach($result as $row){
    echo "<p class='planeteGeneree'>$row->nom</p>" ;
}


 ?>
