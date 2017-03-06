<?php

require_once('pdo.php');
require_once('class/Planete.php');
$recherche = $_POST['search'];


$planete = new Planete();

$result = $planete->GetSpecialPlanete($recherche);

echo json_encode($result);
 ?>
