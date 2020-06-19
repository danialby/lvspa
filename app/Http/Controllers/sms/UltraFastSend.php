<?php
namespace App\Http\sms;
/**
 * @author Pejman Kheyri
 * @author Pejman Kheyri <pejmankheyri@gmail.com>
 * @copyright © 2018 The Ide Pardazan (ipe.ir) PHP Group. All rights reserved.
 * @link http://sms.ir/ Documentation of sms.ir RESTful API PHP sample.
 * @version 1.2
 */

try {

	date_default_timezone_set("Asia/Tehran");

	include_once("Classes/UltraFastSend.php");

	// your sms.ir panel configuration
	$APIKey = "2489c6d915be3edaca9c6d";
    $SecretKey = "S)A##)^)ENT!";

    $MobileNumber = $_GET["mobile"];
    $tempID = $_GET["tempID"];



    if(isset($_GET["code"]))
    {
        $Code = $_GET["code"];
   	// message data
       $data = array(
		"ParameterArray" => array(
			array(
				"Parameter" => "RequestFormCode",
				"ParameterValue" => $Code
			)
		),
		"Mobile" => $MobileNumber,
		"TemplateId" => $tempID
    );
    }


    if(isset($_GET["reqCode"]))
    {
        $reqCode = $_GET["reqCode"];
           	// message data
        $data = array(
            "ParameterArray" => array(
                array(
                    "Parameter" => "RequestCode",
                    "ParameterValue" => $reqCode
                )
            ),
            "Mobile" => $MobileNumber,
            "TemplateId" => $tempID
        );
    }



	$SmsIR_UltraFastSend = new SmsIR_UltraFastSend($APIKey,$SecretKey);
	$UltraFastSend = $SmsIR_UltraFastSend->UltraFastSend($data);
	var_dump($UltraFastSend);

} catch (Exeption $e) {
	echo 'Error UltraFastSend : '.$e->getMessage();
}

?>
