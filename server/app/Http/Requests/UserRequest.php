<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_name' =>'required|max:25|',
            'email'     =>'email:rfc,dns',
            'password'  => 'required|min:8|max:24',
            'first_name'=>'max:25',
            'last_name' => 'max:25', 
        ];
    }
}