<?php 

include 'connexion.php'; 

$val =  $_GET['val'];

$stmt = $bdd->prepare("SELECT montant, date_record FROM transfert WHERE compte_id=$val");

$stmt->execute();
$result  = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($result as $r){
    echo "Montant : ".$r['montant']." date : ".$r['date_record']." <br> \n";
}


?>