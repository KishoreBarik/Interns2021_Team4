<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            'ProjectId' => $this->id,
            'ProjectName' => $this->name,
            'description' => $this->description,
            'ClientId' => $this->client_id,
            'status' => $this->status,
        ];
    }
}
