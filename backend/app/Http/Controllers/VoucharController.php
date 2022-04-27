<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vouchar;
use Validator;

class VoucharController extends Controller
{
    public function store(Request $req)
    {
        $vouchar = "nft102";

        $validation = Validator::make($req->all(),[ 
            'vouchar' => 'required',
            'meta_mask_account' => 'required',
        ]);

        if ($validation->fails()) 
        {
            $response['message'] = $validation->messages()->first();
            return response()->json($response);
        }
        else if($vouchar != $req->vouchar)
        {
            return response()->json([
                "message"=>"invalid vouchar"
            ]);
        }
        else 
        {
            $check = Vouchar::where("vouchar",$req->vouchar)->where("meta_mask_account",$req->meta_mask_account)->count();
            if($check === 0)
            {
                $model = new Vouchar();
                $model->vouchar = $req->vouchar;
                $model->meta_mask_account = $req->meta_mask_account;
                $model->nft_id = "abc_".$req->vouchar;

                $model->save();

                if(! empty($model->id))
                {
                    return response()->json([
                        "message"=>"Vouchar Applied Successfully",
                        "status"=>true
                    ]);
                }
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
