<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeEntry extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_description',
        'project_id',
        'user_id',
        'duration_min',
        'date',
        'updated_by'
    ];
}
