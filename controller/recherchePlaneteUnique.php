<?php

require_once('pdo.php');
require_once('class/Planete.php');
$recherche = $_POST['search'];


$planete = new Planete();

$result = $planete->GetSpecialPlanete($recherche);



// $name = $result->star_name;

// $res = $planete->getSameStarPlanete($name);

// $tableau = array( "planete" => $result, "system" => $res);
echo json_encode($result);
 ?>
