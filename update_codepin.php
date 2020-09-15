<?php 

/*

L' instruction include(ou require) prend tout le texte / code / balisage qui existe dans le fichier spécifié et le copie dans le fichier qui utilise l'instruction include.

L'inclusion de fichiers est très utile lorsque vous souhaitez inclure le même PHP, HTML ou texte sur plusieurs pages d'un site Web.

*/
include 'connexion.php'; 

$idcompte = $_POST['idcompte'];

$montant = $_POST['code_pin'];





$req1 = $bdd->prepare('UPDATE compte SET code = :montant WHERE idcompte = :compte');
$req1->execute(array(
	'montant' => $montant,
	'compte' => $idcompte,
));

echo "Modification Code Pin réussi! \n Voulez-vous retourner au menu?";

?>