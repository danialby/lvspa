<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\SmsController;
use App\irequests;
use Illuminate\Http\Request;

class AloController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
        public function reqinit( $mobile )
        {
                try {
                    date_default_timezone_set("Asia/Tehran");
                    // your sms.ir panel configuration
                    $APIKey = "2489c6d915be3edaca9c6d";
                    $SecretKey = "S)A##)^)ENT!";
                    $fourdigitrandom = rand(1000,9999);
                    $MobileNumber = $mobile;
                    setcookie('reqsentCode', $fourdigitrandom, time() + (120 * 30), "/"); // 86400 = 1 day
                       $data = array(
                        "ParameterArray" => array(
                            array(
                                "Parameter" => "RequestFormCode",
                                "ParameterValue" => $fourdigitrandom
                            )
                        ),
                        "Mobile" => $MobileNumber,
                        "TemplateId" => "26322"
                    );
                    $SmsIR_UltraFastSend = new SmsController($APIKey,$SecretKey);
                    $UltraFastSend = $SmsIR_UltraFastSend->UltraFastSend($data);
                    var_dump($UltraFastSend);
                }
                catch (Exeption $e) {
                    echo 'Error UltraFastSend : '.$e->getMessage();
                }
            }
}
