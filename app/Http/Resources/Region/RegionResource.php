<?php

namespace App\Http\Resources\Region;

use Illuminate\Http\Resources\Json\Resource;

class RegionResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'href' => [
                'Countries' => route('countries.index', $this->id)
            ]
        ];
    }
}
