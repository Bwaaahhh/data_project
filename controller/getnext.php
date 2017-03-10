<?php
require_once ('pdo.php');
require_once ('class/Planete.php');
$idplanete = $_POST['idplanete'];

$planete = new Planete();

$result = $planete->getNextPlanete($idplanete);

$name = $result->star_name;

$res = $planete->getSameStarPlanete($name);
$resimage = $planete->getImagePlanete($name);

$tableau = array( 	"planete" => $result, 
					"systeme" => $res,
					"picture" => $resimage);
echo json_encode($tableau);