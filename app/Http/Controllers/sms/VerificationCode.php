<?php

/**
 * @author Pejman Kheyri
 * @author Pejman Kheyri <pejmankheyri@gmail.com>
 * @copyright © 2018 The Ide Pardazan (ipe.ir) PHP Group. All rights reserved.
 * @link http://sms.ir/ Documentation of sms.ir RESTful API PHP sample.
 * @version 1.2
 */

try {

	date_default_timezone_set("Asia/Tehran");

	include_once("Classes/VerificationCode.php");

	// your sms.ir panel configuration
	$APIKey = "2489c6d915be3edaca9c6d";
	$SecretKey = "S)A##)^)ENT!";
    if( $_GET["code"] && $_GET["mobile"] )
{
$Code = $_GET["code"];
$MobileNumber = $_GET["mobile"];
}

	$SmsIR_VerificationCode = new SmsIR_VerificationCode($APIKey,$SecretKey);
	$VerificationCode = $SmsIR_VerificationCode->VerificationCode($Code, $MobileNumber);
	var_dump($VerificationCode);

} catch (Exeption $e) {
	echo 'Error VerificationCode : '.$e->getMessage();
}

?>
