<?php

class Planete{

    public function getRandomPlanete(){
        global $dbh;
        $query = $dbh->query('SELECT * FROM planete ORDER BY RAND() LIMIT 1 ');
        return $query->fetchAll();
    }
	
	public function getImagePlanete(){
		global $dbh;
		$query = $dbh->query('SELECT picturename FROM imagesplanetes ORDER BY RAND() LIMIT 1');
        return $query->fetch();
		
	}

    public function getNextPlanete($idplanete){
        global $dbh;
		$newid = $idplanete + 1 ;
        $query = $dbh->query("SELECT * FROM planete WHERE id = ".$newid);
        // $query -> execute(array(
            // "idPlanete" => $idPlanete+1
        // ));
        return $query->fetch();
    }

    public function getPrevPlanete($idplanete){
        global $dbh;
        $idprev = $idplanete - 1;
        $query = $dbh->query("SELECT * FROM planete WHERE id = ".$idprev);
        // $query = execute(array(
            // "id_planete" => $idPlanete-1
        // ));
        return $query->fetch();
    }

    public function getSameStarPlanete($starName){
        global $dbh;
        $query = $dbh->query("SELECT nom FROM planete WHERE star_name = '$starName'");
        // $query -> execute(array(
            // "starName" => $starName
        // ));
        return $query->fetchAll();
    }

    public function getSpecialPlanetebySelect($methode,$select,$count){
        global $dbh;
        $query = $dbh->query("SELECT * FROM planete $methode$select LIMIT $count , 1 ");
        return $query->fetch();
    }

    public function GetSpecialPlanete($planeteName){
        global $dbh;
        $query = $dbh->query("SELECT * FROM planete WHERE nom = '$planeteName'");
        // $query -> execute(array(
        //     "planeteName" => $planeteName
        // ));
        return $query->fetch();
    }

    public function searchPlanete($planeteName){
        global $dbh;
        $query = $dbh->query("SELECT nom FROM planete WHERE nom LIKE '$planeteName%' ORDER BY RAND() LIMIT 0 , 20 ");
        // $query -> execute(array(
        //     "planeteName" => $planeteName
        // ));
        return $query->fetchAll();
    }

}

 ?>
