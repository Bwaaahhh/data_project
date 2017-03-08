<?php
require_once ('pdo.php');
require_once ('class/Planete.php');
$idplanete = $_POST['idplanete'];

$planete = new Planete();

$result = $planete->getPrevPlanete($idplanete);


$name = $result->star_name;

$res = $planete->getSameStarPlanete($name);

$tableau = array( "planete" => $result, "system" => $res);
echo json_encode($tableau);