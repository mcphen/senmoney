<?php 
/*

L' instruction include(ou require) prend tout le texte / code / balisage qui existe dans le fichier spécifié et le copie dans le fichier qui utilise l'instruction include.

L'inclusion de fichiers est très utile lorsque vous souhaitez inclure le même PHP, HTML ou texte sur plusieurs pages d'un site Web.

*/
include 'connexion.php'; 

// On récupère tout le contenu de la table jeux_video
$reponse = $bdd->query('SELECT * FROM compte');

$donnees = $reponse->fetchAll();






$tab = array();
$i=0;
foreach ($donnees as $d) {
	$tab[$i] = $d;

	$i++;
}

$myJSON = json_encode($tab);

echo $myJSON;

?>