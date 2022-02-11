<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable =['name', 'description','client_id','updated_at', 'created_at' , 'added_by', 'status'];


    //Total users Under a project
    public function users(){
        return $this->belongsToMany('App\Models\User','time_entries','project_id','user_id');
    }
}
