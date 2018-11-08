<?php

namespace App\Http\Resources\Country;

use App\Models\Level\Level;
use Illuminate\Http\Resources\Json\Resource;

class CountryCollection extends Resource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'iso_a3' => $this->iso_a3,
            'iso_a2' => $this->iso_a2,
            'iso_n3' => $this->iso_n3,
            'description' => $this->description,
            'capital' => $this->capital,
            'devise' => $this->devise,
            'indicatif_tele' => $this->indicatif_tele,
            'drapeau_url' => $this->drapeau_url,
            'area' => 25421,
            'shape' => $this->area,
            'n_localGovernment_included'=> Level::all()->where('country_id',$this->id)->where('level_id', null)->count(),

            'href' => [
                'link' => route('countries.show', [$this->id]),
            ],
        ];
    }
}
