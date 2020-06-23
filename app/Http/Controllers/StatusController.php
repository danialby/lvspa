<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\SmsController;
use App\irequests;
class StatusController extends Controller
{
    public function codeGet( $reqID , $uCode )
    {
        $c = $_COOKIE['sentCode'];
        if($uCode === $c)
        {
            $results = irequests::where('reqCode', $reqID)->first();
            return response()->json(['results' => $results]);
        }
        else
        {
            return response()->json(['notfound' => 'کد وارد شده اشتباه است']);
        }
    }

    public function reqinit( $mobile )
    {
                date_default_timezone_set("Asia/Tehran");
                // your sms.ir panel configuration
                $APIKey = "2489c6d915be3edaca9c6d";
                $SecretKey = "S)A##)^)ENT!";
                $fourdigitrandom = rand(1000,9999);
                $MobileNumber = $mobile;
                setcookie('sentCode', $fourdigitrandom, time() + (120 * 30), "/"); // 86400 = 1 day
                   $data = array(
                    "ParameterArray" => array(
                        array(
                            "Parameter" => "StatusValCode",
                            "ParameterValue" => $fourdigitrandom
                        )
                    ),
                    "Mobile" => $MobileNumber,
                    "TemplateId" => "27167"
                );
                $SmsIR_UltraFastSend = new SmsController($APIKey,$SecretKey);
                $UltraFastSend = $SmsIR_UltraFastSend->UltraFastSend($data);
                var_dump($UltraFastSend);
            }

    public function statInit( $reqID )
    {
            $freq = irequests::where('reqCode', $reqID)->first();
            if($freq != null)
            {
                $mobile = $freq['mobile'];
                try {
                    date_default_timezone_set("Asia/Tehran");
                    // your sms.ir panel configuration
                    $APIKey = "2489c6d915be3edaca9c6d";
                    $SecretKey = "S)A##)^)ENT!";
                    $fourdigitrandom = rand(1000,9999);
                    $MobileNumber = $mobile;
                    $sentmob = substr($MobileNumber, -4);
                    setcookie('sentCode', $fourdigitrandom, time() + (120 * 30), "/"); // 86400 = 1 day
                    setcookie('sentmobile', $sentmob, time() + (120 * 30), "/"); // 86400 = 1 day
                       $data = array(
                        "ParameterArray" => array(
                            array(
                                "Parameter" => "StatusValCode",
                                "ParameterValue" => $fourdigitrandom
                            )
                        ),
                        "Mobile" => $MobileNumber,
                        "TemplateId" => "27167"
                    );
                    $SmsIR_UltraFastSend = new SmsController($APIKey,$SecretKey);
                    $UltraFastSend = $SmsIR_UltraFastSend->UltraFastSend($data);
                    var_dump($UltraFastSend);
                }
                catch (Exeption $e) {
                    echo 'Error UltraFastSend : '.$e->getMessage();
                }
            }
            else
            {
                $_SESSION["errora"]='نتیجه ای یافت نشد.';
                echo $_SESSION["errora"];
            }
        }

	public function forgotCode($mobile)
	{
        $fgcode = irequests::where('mobile', $mobile)->first()['reqCode'];
        if($fgcode != null)
            {
                try {
                    date_default_timezone_set("Asia/Tehran");
                    // your sms.ir panel configuration
                    $APIKey = "2489c6d915be3edaca9c6d";
                    $SecretKey = "S)A##)^)ENT!";
                    $fourdigitrandom = rand(1000,9999);
                    $MobileNumber = $mobile;
                    $sentmob = substr($MobileNumber, -4);
                    setcookie('recsentmobile', $sentmob, time() + (120 * 30), "/"); // 86400 = 1 day
                       $data = array(
                        "ParameterArray" => array(
                            array(
                                "Parameter" => "RequestCode",
                                "ParameterValue" => $fgcode
                            )
                        ),
                        "Mobile" => $MobileNumber,
                        "TemplateId" => "26427"
                    );
                    $SmsIR_UltraFastSend = new SmsController($APIKey,$SecretKey);
                    $UltraFastSend = $SmsIR_UltraFastSend->UltraFastSend($data);
                    var_dump($UltraFastSend);
                }
                catch (Exeption $e) {
                    echo 'Error UltraFastSend : '.$e->getMessage();
                }
            }
            else
            {
                $_SESSION["errora"]='نتیجه ای یافت نشد.';
                echo $_SESSION["errora"];
            }
	}
    }
