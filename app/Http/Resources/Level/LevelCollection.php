<?php

namespace App\Http\Resources\Level;

use App\Models\Level\Level;
use App\Models\Level\Population;
use App\Models\Person\LevelPerson;
use App\Models\Person\Person;
use Illuminate\Http\Resources\Json\JsonResource;

class LevelCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        return [

            'id' => $this->id,
            'nom' => $this->name,
            'country_id' => $this->country_id,
            'level_id' => $this->level_id,
            'shape' => $this->area,
            'population'=> Population::find(3)->id,

            'detail_level' => [
        'link' => (function () {

            return route('levels.show', [$this->country_id, $this->id]);

        })(),
    ],
        ];
    }
}
