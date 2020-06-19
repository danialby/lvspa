<?php



namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\irequests;
class AjaxController extends Controller

{
    /**

     * Create a new controller instance.

     *

     * @return void

     */

    public function ajaxRequestPost(Request $request)

    {
            $input = request()->all();
            $irequest = new irequests();
            $irequest->fullname = $input['fullname'];
            $irequest->mobile = $input['mobile'];
            $irequest->model = $input['model'];
            $irequest->subject = $input['subject'];
            $irequest->calldate = $input['calldate'];
            $irequest->calltime = $input['calltime'];
            $irequest->contactType = $input['contactType'];
            $irequest->email = $input['email'];
            $irequest->details = $input['details'];
            $irequest->reqReply = "";
            $irequest->save();
            return response()->json(['success'=>'درخواست شما با موفقیت ثبت شد']);
    }
//     public function uploadImg(Request $request)
//     {
//         $filea = request()->all();
//         $imageName = time().'.'.$request->getClientOriginalExtension();
//         $request->image->move(public_path('/uploadedimages'), $imageName);
//         $target_dir = "/public/dist/imgs/";
//         $target_file = $target_dir . basename($_FILES["upBox"]["name"]);
//         $uploadOk = 1;
//         $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
//         // Check if image file is a actual image or fake image
//         $check = getimagesize($_FILES["upBox"]["name"]);
//         if($check !== false) {
//             echo "File is an image - " . $check["mime"] . ".";
//             $uploadOk = 1;
//         } else {
//             echo "File is not an image.";
//             $uploadOk = 0;
//         }
// }
    }
