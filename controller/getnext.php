<?php
require_once ('pdo.php');
require_once ('class/Planete.php');
$idplanete = $_POST['idplanete'];

$planete = new Planete();

$result = $planete->getNextPlanete($idplanete);

// foreach($result as $row){
	// $x = $row->nom;
	
// }

echo json_encode($result);