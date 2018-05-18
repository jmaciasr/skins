<?php
	$name = $_POST["skinAgent"];
	$domain1 = $_POST["skinDomain1"];
	$domain2 = $_POST["skinDomain2"];
	$skin = $_POST["skinSelected"];

	$basicMaxBet = $_POST["basicMaxBet"];
	$basicMinBetOnline = $_POST["basicMinBetOnline"];
	$basicMinBetPhone = $_POST["basicMinBetPhone"];

	$casinoDailyWin = $_POST["casinoDailyWin"];
	$casinoDailyLost = $_POST["casinoDailyLost"];
	$casinoWeeklyWin = $_POST["casinoWeeklyWin"];
	$casinoWeeklyLost = $_POST["casinoWeeklyLost"];

	$liveCasinoDailyWin = $_POST["liveCasinoDailyWin"];
	$liveCasinoDailyLost = $_POST["liveCasinoDailyLost"];
	$liveCasinoWeeklyWin = $_POST["liveCasinoWeeklyWin"];
	$liveCasinoWeeklyLost = $_POST["liveCasinoWeeklyLost"];

	$horsesProfile = $_POST["horsesProfile"];
	$horsesProfileMaxBet= $_POST["horsesProfileMaxBet"];
	$horsesProfileMaxPayout = $_POST["horsesProfileMaxPayout"];

	$parlayAmount = $_POST["parlayAmount"];
	$parlayDogs = $_POST["parlayDogs"];
	$parlayMaxBet = $_POST["parlayMaxBet"];
	$parlayMaxPayout = $_POST["parlayMaxPayout"];
	$openParlays = $_POST["openParlays"];
	$parlaySpots = $_POST["parlaySpots"];
	$roundRobin = $_POST["roundRobin"];
	$maxRobinBet = $_POST["maxRobinBet"];
	$maxRobinPayout = $_POST["maxRobinPayout"];

	$teaserTegular = $_POST["regularTeaser"]; 
	$teasersAmount = $_POST["teasersRegAmount"];
	$teasersRegularPush = $_POST["regPush"]; 
	$teasersMonster = $_POST["monstTeasers"]; 
	$teasersMonsterPush = $_POST["monstPush"];

	$email_subject = "Nueva solicitud de sitio de _". $skinAgent;
	$email_body = "Nos escribe: " . $name . "\nPrimera opción de domino: " . $domain1 . "\nSegunda opción de domino: " .  $domain2 . "\nSkin: " . $skin . "\n" . "\nBasic bet limits" . "\nMaximum bet: " . $basicMaxBet . "\nMinimum bet online: " . $basicMinBetOnline . "\nMinimum bet phone: " . $basicMinBetPhone . "\n" . "\nRegular Casino limits" . "\nDaily win: " . $casinoDailyWin . "\nDaily lost: " . $casinoDailyLost . "\nWeekly win: " . $casinoWeeklyWin . "\nWeekly lost: " . $casinoWeeklyLost . "\n" . "\nLive Casino limits" . "\nDaily win: " . $liveCasinoDailyWin . "\nDaily lost: " . $liveCasinoDailyLost . "\nWeekly win: " . $liveCasinoWeeklyWin . "\nWeekly lost: " . $liveCasinoWeeklyLost . "\n" . "\nHorses limits" . "\nHorses profile: " . $horsesProfile . "\nMaximum bet: " . $horsesProfileMaxBet . "\nMaximum payout: " . $horsesProfileMaxPayout . "\n" . "\nParlays limits" . "\nAmount of teams: " . $parlayAmount . "\nMaximum dogs: " . $parlayDogs . "\nMaximum bet: " . $parlayMaxBet . "\nMaximum payout: " . $parlayMaxPayout  . "\nOpen parlays: " . $openParlays . "\nParlay spots: " . $parlaySpots . "\nRound robin: " . $roundRobin . "\nMaximum round robin bet: " . $maxRobinBet . "\nMaximum round robin payout: " . $maxRobinPayout . "\n" . "\nTeasers limit" . "\nRegular teaser (6 - 6.5 - 7pt fb / 4 - 4.5 - 5pt bk): " . $teaserTegular . "\nRegular teasers amount teams: " . $teasersAmount . "\nregular push type: " . $teasersRegularPush . "\nMonster teasers (10 - 13pt fb / 8 - 10pt bk): " . $teasersMonster . "\nMonster push type: " . $teasersMonsterPush;
	$to = "cs@payperhead.com , juanmanuel.develop@gmail.com";
	mail($to, $email_subject, $email_body);
	header("Location: sended-profile.html");
?>



