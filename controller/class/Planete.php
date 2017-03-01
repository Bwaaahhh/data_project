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
        $query = execute(array(
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

    public function getHotestPlanete(){
        global $dbh;
        $query = $dbh->query('SELECT * FROM planete WHERE temp_calculated != "" ORDER BY temp_calculated DESC LIMIT 1');
        return $query->fetchAll();
    }

    public function getColdestPlanete(){
        global $dbh;
        $query = $dbh->query('SELECT * FROM planete WHERE temp_calculated !="" ORDER BY temp_calculated ASC LIMIT 1');
    }

    public function getHeaviestPlanete(){
        global $dbh;
        $query = $dbh->query('SELECT * FROM planete WHERE mass !="" ORDER BY mass DESC LIMIT 1');
        return $query->fetchAll();
    }

    public function getLightestPlanete(){
        global $dbh;
        $query = $dbh->query('SELECT * FROM planete WHERE mass !="" ORDER BY mass ASC LIMIT 1');
        return $query->fetchAll();
    }

    public function getOldestDiscoveryPlanete(){
        global $dbh;
        $query = $dbh->query('SELECT * FROM planete WHERE discovered !="" ORDER BY discovered ASC LIMIT 1');
        return $query->fetchAll();
    }

    public function getYoungestDiscoveryPlanete(){
        global $dbh;
        $query = $dbh->query('SELECT * FROM planete WHERE discovered !="" ORDER BY discovered DESC LIMIT 1');
        return $query->fetchAll();
    }

    public function getPlaneteByImage(){
        global $dbh;
        $query = $dbh->query('SELECT * FROM planete WHERE detection_type = "Imaging" LIMIT 1');
        return $query->fetchAll();
    }

    public function getPlaneteByTransit(){
        global $dbh;
        $query = $dvh->query('SELECT * FROM planete WHERE detection_type = "Primary Transit" LIMIT 1');
        return $query->fetchAll();
    }

    public function getPlaneteByRadial(){
        global $dbh;
        $query = $dbh->query('SELECT * FROM planete WHERE detection_type = "Radial Velocity" LIMIT 1');
        return $query->fetchAll();
    }

    public function GetSpecialPlanete($planeteName){
        global $dbh;
        $query = $dbh->prepare("SELECT * FROM planete WHERE nom = :planeteName ");
        $query = execute(array(
            "planeteName" => $planeteName
        ));
        return $query->fetchAll();
    }

    public function searchPlanete($planeteName){
        global $dbh;
        $query = $dbh->prepare("SELECT * FROM planete WHERE nom LIKE %:planeteName% ");
        $query = execute(array(
            "planeteName" => $planeteName
        ));
        return $query->fetchAll();
    }

}

 ?>
