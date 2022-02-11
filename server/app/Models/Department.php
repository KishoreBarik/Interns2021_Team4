<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'added_by',
        'status'
    ];

    //Users List Under a Department
    public function users(){
        return $this->belongsToMany('App\Models\User','department_accesses','department_id','user_id');
    }

    //Projects Under A department
    public function projects(){
        return $this->hasManyThrough('App\Models\Project','App\Models\Client','department_id','client_id');
    }


    //Total Clients Under a department
    public function clients(){
        return $this->hasMany('App\Models\Client','department_id');
    }
}
