<?php  

include 'connexion.php'; 

$val =  $_GET['val'];

$stmt = $bdd->prepare("SELECT solde, code, numero_compte FROM compte WHERE idcompte=? limit 1");
$stmt->execute(array($val));
$stmt->execute();
$result  = $stmt->fetch(PDO::FETCH_ASSOC);


echo "Le solde de votre compte est ".$result['solde']."\n Voulez-vous retourner au menu?";


?>