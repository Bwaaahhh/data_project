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
        $query = $dbh->prepare('SELECT * FROM planete WHERE id = :id_planete ');
        $query = execute(array(
            "id_planete" => $idPlanete+1
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


}

 ?>
