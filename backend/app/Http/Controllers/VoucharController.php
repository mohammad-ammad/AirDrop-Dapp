<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vouchar;
use App\Models\User;
use App\Models\Coupon;
use Validator;

class VoucharController extends Controller
{
    public function store(Request $req)
    {
        $validation = Validator::make($req->all(),[ 
            'vouchar' => 'required',
            'meta_mask_account' => 'required',
        ]);

        $vouchar = Coupon::where('code',$req->vouchar)->count();

        if ($validation->fails()) 
        {
            $response['message'] = $validation->messages()->first();
            return response()->json($response);
        }

        else if($vouchar === 0)
        {
            return response()->json([
                "message"=>"invalid vouchar"
            ]);
        }

        else 
        {
            $meta = User::where('meta_mask_account',$req->meta_mask_account)->count();

            if($meta === 0)
            {
                $model = new User();
                $model->meta_mask_account = $req->meta_mask_account;
                $model->save();

                if(! empty($model->id))
                {
                    $voucharModel = new Vouchar();
                    $voucharModel->vouchar = $req->vouchar;
                    $voucharModel->user_id = $model->id;
                    $voucharModel->save();

                    return response()->json([
                        "message"=>"Vouchar Applied Successfully",
                        "status"=>true
                    ]);
                }

            }
            else 
            {
                $user = User::where('meta_mask_account',$req->meta_mask_account)->select('id')->get();
                $check = Vouchar::where('vouchar',$req->vouchar)->where('user_id',$user[0]->id)->count();

                if(!empty ($user[0]->id) && $user[0]->id > 0 && $check === 0)
                {
                    $voucharModel = new Vouchar();
                    $voucharModel->vouchar = $req->vouchar;
                    $voucharModel->user_id = $user[0]->id;
                    $voucharModel->save();

                    return response()->json([
                        "message"=>"Vouchar Applied Successfully",
                        "status"=>true
                    ]);
                }

                else 
                {
                    return response()->json([
                        "message"=>"vouchar already used"
                    ]);
                }

               
            }
        }

    }
}
