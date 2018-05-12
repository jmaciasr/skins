<?php
	$name = $_POST["skinAgent"];
	$domain1 = $_POST["skinDomain1"];
	$domain2 = $_POST["skinDomain2"];
	$skin = $_POST["skinSelected"];
	$email_subject = "Nueva solicitud de sitio de _". $name;
	$email_body = "Nos escribe: " . $name . "\nPrimera opción de domino: " . $domain1 . "\n$Segunda opción de domino: " .  $domain2 . "\nSkin: " . $skin;
	$to = "juanmanuel.develop@gmail.com";
	mail($to, $email_subject, $email_body);
	header("Location: sended.html");
?>