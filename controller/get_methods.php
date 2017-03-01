<?php 


   if (isset($_GET['planet'])) {
	   
	   $result->getRandomPlanete();
	   
	   foreach ($result as $row) {
		
		print "<img src=''>"
		print "<p>".$row['nom']."</p>";
		print "<p>".$row['discovered']."</p>";
		print "<p>".$row['detection_type']."</p>";
		print "<p>Système stellaire : ".$row['star_name']."</p>";
		   
		   
	   }
   }