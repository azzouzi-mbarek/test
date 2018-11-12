<?php

namespace App\Http\Resources\Country;

use App\Models\Country;
use App\Models\Level\CategoryLevel;
use App\Models\Level\InstitutionLevel;
use App\Models\Level\Level;
use App\Models\Person\CountryPerson;
use App\Models\Person\LevelPerson;
use Illuminate\Http\Resources\Json\Resource;
use Carbon\Carbon;
use phpDocumentor\Reflection\Types\Integer;

class CountryCollection extends Resource
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
            'n_localGovernment_included' => Level::all()->where('country_id', $this->id)->where('level_id', null)->count(),
            'partie-genre-male' => Country::find($this->id)->Persons->where('sex', 'male')->count(),
            'partie-genre-female' => Country::find($this->id)->Persons->where('sex', 'female')->count(),
            'N of person élu' => CountryPerson::all()->where('country_id', $this->id)->where('status', 'élu')->count(),
            'N of person nommé' => CountryPerson::all()->where('country_id', $this->id)->where('status', 'nommé')->count(),
            'N academic_levels' => [
                'dont have Bac' => Country::find($this->id)->Persons->where('academic_level', 'bac+0')->count(),
                'Bac+1' => Country::find($this->id)->Persons->where('academic_level', 'bac+1')->count(),
                'Bac+2' => Country::find($this->id)->Persons->where('academic_level', 'bac+2')->count(),
                'Bac+3' => Country::find($this->id)->Persons->where('academic_level', 'bac+3')->count(),
                'Bac+4' => Country::find($this->id)->Persons->where('academic_level', 'bac+4')->count(),
                'Bac+5' => Country::find($this->id)->Persons->where('academic_level', 'bac+5')->count(),
                'Bac+6' => Country::find($this->id)->Persons->where('academic_level', 'bac+6')->count(),
                'Bac+7' => Country::find($this->id)->Persons->where('academic_level', 'bac+7')->count(),
                'Bac+8' => Country::find($this->id)->Persons->where('academic_level', 'bac+8')->count(),
            ],
            'N de Ministres' => CountryPerson::all()->where('country_id', $this->id)->where('function', 'Ministre')->count(),
            'href' => [
                'link' => route('countries.show', [$this->id]),
            ],
        ];
    }
}
