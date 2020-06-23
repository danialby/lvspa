<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\irequests;
class AdminController extends Controller
{

    public function index()
    {
        $reqs = irequests::all();
        return view('reqList',compact($reqs));
    }
    public function fetchData()
    {
        $reqs = irequests::all();
        return $reqs;
    }
    public function RemoveReq($id)
    {
        irequests::where('id', $id)->delete();
        DB::statement('ALTER TABLE irequests AUTO_INCREMENT = 1;');
    }
    public function Smsed($reqCode,$MobileNumber)
    {
        try {
            date_default_timezone_set("Asia/Tehran");
            // your sms.ir panel configuration
            $APIKey = "2489c6d915be3edaca9c6d";
            $SecretKey = "S)A##)^)ENT!";
               $data = array(
                "ParameterArray" => array(
                    array(
                        "Parameter" => "RequestCode",
                        "ParameterValue" => $reqCode
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
    public function UpdateReq($id,$reqCode,$reqStat,$reqReply,$isReg)
    {
        if($isReg == 0)
        {
                $isReg = 1;
                irequests::where('id', $id)->update(['reqCode' => $reqCode,'reqStat' => $reqStat, 'reqReply' => $reqReply , 'isReg' => $isReg]);
        }
        else
        {
            irequests::where('id', $id)->update([ 'reqStat' => $reqStat, 'reqReply' => $reqReply]);
        }
    }
    public function isRegistered($reqCode)
    {
        $req = irequests::where('reqCode', $reqCode)->get();
        if (empty($req[0]))
        {
          return response()->json([
            'isRegistered' => '0',]);
        }
        else
        {
            return response()->json([
            'isRegistered' => '1',]);
        }
    }
}
