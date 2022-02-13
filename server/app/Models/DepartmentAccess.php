<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DepartmentAccess extends Model
{
    use HasFactory;

    protected $fillable = [
        'department_id',
        'user_id',
        'status'
    ];


    //Department Details 
    public function department(){
        return $this->belongsTo('App\Models\Department','department_id');
    }


    //User Details
    public function user(){
        return $this->belongsTo('App\Models\User','user_id');
    }

}
