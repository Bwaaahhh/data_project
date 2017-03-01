<?php

   if (isset($_GET)) {


	   $result = $planete->getRandomPlanete();

	   foreach ($result as $row) {

		print "<img src=''>";
		print "<p>".$row->nom."</p>";
		print "<p>".$row->discovered."</p>";
		print "<p>".$row->detection_type."</p>";
		print "<p>Système stellaire : ".$row->star_name."</p>";


	   }
   }

     else if (isset($_GET['categorie'])) {

       $query = $pdo->query("SELECT * FROM articles WHERE nom_categorie='".$_GET['categorie']."' ORDER BY nom_categorie DESC");

     }

     else if (isset($_GET['article'])) {

       $query = $pdo->query("SELECT * FROM articles WHERE id_article='".$_GET['article']."'");

     }
