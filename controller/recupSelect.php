<?php

if(isset($_POST['selection'])){
    if($_POST['select'] != ""){
        if($_POST['select'] == "poidAsc" ){
            $select = " ORDER BY mass ASC ";
        }else if($_POST['select'] == "poidDesc"){
            $select = " ORDER BY mass DESC ";
        }else if($_POST['select'] == "tempAsc"){
            if($_POST['methode']!= ""){
                $select = " AND temp_calculated != '0' OR temp_measured != '0' ORDER BY temp_calculated ASC ";
            }else{
                $select = " WHERE temp_calculated != '0' OR temp_measured != '0' ORDER BY temp_calculated ASC ";
            }
        }else if($_POST['select'] == "tempDesc"){
            if($_POST['methode']!= ""){
                $select = " AND temp_calculated != '0' OR temp_measured != '0' ORDER BY temp_calculated DESC";
            }else{
                $select = " WHERE temp_calculated != '0' OR temp_measured != '0' ORDER BY temp_calculated DESC ";
            }
        }else if($_POST['select'] == "anneeAsc"){
            $select = " ORDER BY discovered ASC ";
        }else if($_POST['select'] == "anneeDesc"){
            $select = " ORDER BY discovered ASC ";
        }else{
            $select = "";
        }
    }

    if($_POST['methode']!= ""){
        if($_POST['methode'] == "Primary" ){
            $select = " WHERE detection_type ='Primary Transit' ";
        }else if($_POST['methode'] == "Radial"){
            $select = " WHERE detection_type ='Radial Velocity' ";
        }else if($_POST['methode'] == "Imaging"){
            $select = " WHERE detection_type ='Imaging' ";
    }
}
 ?>




SELECT * FROM `planete` WHERE temp_calculated != "0" OR temp_measured != "0" ORDER BY mass DESC , discovered ASC , temp_calculated DESC ;
