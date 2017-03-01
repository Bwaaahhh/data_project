<?php


		if($_GET['mass'] === 'heaviest'){
			
			$result = $planete->getHeaviestPlanete();
		}
		else if($_GET['mass'] === 'lightest'){
			
			$result = $planete->getLightestPlanete();
		}
		else if($_GET['temperature'] === 'coldest'){
			
			$result = $planete->getColdestPlanete();
		}
		else if($_GET['temperature'] === 'hottest'){
			
			$result = $planete->getHottestPlanete();
		}
		else if($_GET['year'] === 'oldest'){
			
			$result = $planete->getOldestPlanete();
		}
		else if($_GET['year'] === 'youngest'){
			
			$result = $planete->getYoungestPlanete();
		}
		else if($_GET['method'] === 'imaging'){
			
			$result = $planete->getPlaneteByImage();
		}
		else if($_GET['method'] === 'transit'){
			
			$result = $planete->getPlaneteByTransit();
		}
		else if($_GET['method'] === 'radial'){
			
			$result = $planete->getPlaneteByRadial();
		}
		

		
		
		   



			

