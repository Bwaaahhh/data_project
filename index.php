<?php

// APPELS DES FICHIERS NECESSAIRES


require_once 'controller/pdo.php';
require_once 'controller/class/Planete.php';
require_once 'controller/recupSelect.php';


$planete = new Planete();

$page = "index.php";        // MISE EN PLACE VARIABLE $PAGE POUR GESTION WEBROOT + REECRITURE URL

define('WEBROOT', str_replace($page, '', $_SERVER['SCRIPT_NAME']));


    $page = "view/index.php";       // CHANGEMENT VARIABLE $PAGE POUR GESTION DE LA VUE


    if (isset($_GET['page'])) {                         // CHANGEMENT VARIABLE $PAGE POUR GESTION CHANGEMENT DE VUE
        $page = "view/".$_GET['page'].".php";
    }



include("view/template/index.php");
