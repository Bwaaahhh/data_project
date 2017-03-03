<?php

class Planete{

    public function getRandomPlanete(){
        global $dbh;
        $query = $dbh->query('SELECT * FROM planete ORDER BY RAND() LIMIT 1 ');
        return $query->fetchAll();
    }

    public function getNextPlanete(){
        global $dbh;
        $idPlanete = $_GET['id_planete'];
        $query = $dbh->prepare('SELECT * FROM planete WHERE id = :idPlanete ');
        $query -> execute(array(
            "idPlanete" => $idPlanete+1
        ));
        return $query->fetchAll();
    }

    public function getPrevPlanete(){
        global $dbh;
        $idPlanete = $_GET['id_planete'];
        $query = $dbh->prepare('SELECT * FROM planete WHERE id = :id_planete');
        $query = execute(array(
            "id_planete" => $idPlanete-1
        ));
        return $query->fecthAll();
    }

    public function getHotestPlanete($item=0){
        global $dbh;
        $query = $dbh->query("SELECT * FROM planete WHERE temp_calculated != '' ORDER BY temp_calculated DESC LIMIT '.$item.' , 1");
        return $query->fetchAll();
    }

    public function getColdestPlanete($item=0){
        global $dbh;
        $query = $dbh->query("SELECT * FROM planete WHERE temp_calculated !='' ORDER BY temp_calculated ASC LIMIT '.$item.' , 1");
    }

    public function getHeaviestPlanete($item=0){
        global $dbh;
        $query = $dbh->query("SELECT * FROM planete WHERE mass !='' ORDER BY mass DESC LIMIT '.$item.' , 1");
        return $query->fetchAll();
    }

    public function getLightestPlanete($item=0){
        global $dbh;
        $query = $dbh->query("SELECT * FROM planete WHERE mass !='' ORDER BY mass ASC LIMIT '.$item.' , 1");
        return $query->fetchAll();
    }

    public function getOldestDiscoveryPlanete($item=0){
        global $dbh;
        $query = $dbh->query("SELECT * FROM planete WHERE discovered !='' ORDER BY discovered ASC LIMIT '.$item.' , 1");
        return $query->fetchAll();
    }

    public function getYoungestDiscoveryPlanete($item=0){
        global $dbh;
        $query = $dbh->query("SELECT * FROM planete WHERE discovered !='' ORDER BY discovered DESC LIMIT '.$item.' , 1");
        return $query->fetchAll();
    }

    public function getPlaneteByImage($item=0){
        global $dbh;
        $query = $dbh->query("SELECT * FROM planete WHERE detection_type = 'Imaging' LIMIT '.$item.' , 1");
        return $query->fetchAll();
    }

    public function getPlaneteByTransit($item=0){
        global $dbh;
        $query = $dvh->query("SELECT * FROM planete WHERE detection_type = 'Primary Transit' LIMIT '.$item.' , 1");
        return $query->fetchAll();
    }

    public function getPlaneteByRadial($item=0){
        global $dbh;
        $query = $dbh->query("SELECT * FROM planete WHERE detection_type = 'Radial Velocity' LIMIT '.$item.' , 1");
        return $query->fetchAll();
    }

    public function getSameStarPlanete($starName){
        global $dbh;
        $query = $dbh->prepare('SELECT nom FROM planete WHERE star_name = :starName');
        $query -> execute(array(
            "starName" => $starName
        ));
        return $query->fetchAll();
    }

    public function GetSpecialPlanete($planeteName){
        global $dbh;
        $query = $dbh->prepare("SELECT * FROM planete WHERE nom = :planeteName ");
        $query -> execute(array(
            "planeteName" => $planeteName
        ));
        return $query->fetchAll();
    }

    public function searchPlanete($planeteName){
        global $dbh;
        $query = $dbh->prepare("SELECT * FROM planete WHERE nom LIKE %:planeteName% ");
        $query -> execute(array(
            "planeteName" => $planeteName
        ));
        return $query->fetchAll();
    }

}

 ?>
