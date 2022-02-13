<?php

namespace App\Http\Resources;

use App\Models\TimeEntry;
use Illuminate\Http\Resources\Json\JsonResource;

class CreateTimeEntryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {   
        return[
            'id'=>$this->id,
            'date'=>$this->date,
            'task_description'=>$this->task_description,
            'duration'=>round(($this->duration_min)/60,2)."Hrs",
            'user_name'=>TimeEntry::findOrFail($this->id)->user->user_name,
            'project_name'=>TimeEntry::findOrFail($this->id)->project->name

        ];
    }
}
