<?php

// connexion.php code permettant de se connecter à la base de données
//localhost = serveur local, 3306 = port de connexion au serveur
// dbname nom de la base de donnees
// charset encodage (ecriture)
//root username du serveur
// '' password
try
{
	// On se connecte à MySQL
	$bdd = new PDO('mysql:host=localhost:3306;dbname=senmoneydb;charset=utf8', 'root', '');
}
catch (Exception $e)
{
		// En cas d'erreur, on affiche un message et on arrête tout

        die('Erreur : ' . $e->getMessage());
}
?>