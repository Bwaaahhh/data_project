<?php
require_once('pdo.php');
require_once('class/Planete.php');
$recherche = $_POST['search'];

$planete = new Planete();

$result = $planete->GetSpecialPlanete($recherche);


/////////     APPEL DES METHODES POUR RECUPERATION PLANETE , PLANETES SOEURS , IMAGE

$name = $result->star_name;
$res = $planete->getSameStarPlanete($name);

$resimage = $planete->getImagePlanete($name);

$array = array(
    "planete" => $result,
    "systeme" => $res,
	"picture" => $resimage
);

echo json_encode($array);

 ?>
