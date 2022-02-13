<?php

namespace App\Http\Resources;

use App\Models\DepartmentAccess;
use Illuminate\Http\Resources\Json\JsonResource;

class DepartmentAccessResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'DepartmentName'=>DepartmentAccess::findOrfail($this->id)->department->name,
            'UserName'=>DepartmentAccess::findOrfail($this->id)->user->user_name,
            'status'=>$this->status
        ];
    }
}
