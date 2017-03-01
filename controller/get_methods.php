<?php


		if($_GET['mass'] === 'heaviest'){
			
			$result = $planete->getHeaviestPlanete();
		}
		if($_GET['mass'] === 'lightest'){
			
			$result = $planete->getLightestPlanete();
		}
		if($_GET['temperature'] === 'coldest'){
			
			$result = $planete->getColdestPlanete();
		}
		if($_GET['temperature'] === 'hottest'){
			
			$result = $planete->getHottestPlanete();
		}
		if($_GET['year'] === 'oldest'){
			
			$result = $planete->getOldestPlanete();
		}
		if($_GET['year'] === 'youngest'){
			
			$result = $planete->getYoungestPlanete();
		}
		if($_GET['method'] === 'imaging'){
			
			$result = $planete->getPlaneteByImage();
		}
		if($_GET['method'] === 'transit'){
			
			$result = $planete->getPlaneteByTransit();
		}
		if($_GET['method'] === 'radial'){
			
			$result = $planete->getPlaneteByRadial();
		}

		
		
		   



			

