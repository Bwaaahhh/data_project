<?php
require_once ('pdo.php');
require_once ('class/Planete.php');
$idplanete = $_POST['idplanete'];

$planete = new Planete();

$result = $planete->getPrevPlanete($idplanete);

echo json_encode($result);