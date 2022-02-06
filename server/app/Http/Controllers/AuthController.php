<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function login(Request $request){
        $request->validate([
            'user_name'=>'required',
            'password'=>'required',
            'user_type'=>'required', 
        ]);

        $user = User::where('user_name', $request->user_name)->first();

        if(!$user | !Hash::check($request->password , $user->password) | $request->user_type != $user->user_type ){
            return [
                'message' => 'Invalid Credentials '
            ];
        }

        return [
            'user_type'=>$user->user_type,
            'token' => $user->createToken('auth')->accessToken
        ];
    }
    //

    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return[ 
            'message' => 'User Logged Out Succesfully'
        ];
    }

}
