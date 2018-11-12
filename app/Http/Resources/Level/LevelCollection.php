<?php

namespace App\Http\Resources\Level;

use App\Models\Level\CategoryLevel;
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
            'category_level' => CategoryLevel::find($this->category_level_id)->name,
            'population' => $this->population,
            'census_date_population' => $this->census_date_population,
            'n_localGovernment_included' => Level::all()->where('level_id', $this->id)->count(),
            'partie_genre' => [
                'male' => Level::find($this->id)->Persons->where('sex', 'male')->count(),
                'female' => Level::find($this->id)->Persons->where('sex', 'female')->count(),
            ],
            'person status(élu or nommé)' => [
                'N of person élu' => LevelPerson::all()->where('level_id', $this->id)->where('status', 'élu')->count(),
                'N of person nommé' => LevelPerson::all()->where('level_id', $this->id)->where('status', 'nommé')->count(),
            ],
            'N academic_levels' => [
                'dont have Bac' => Level::find($this->id)->Persons->where('academic_level', 'bac+0')->count(),
                'Bac+1' => Level::find($this->id)->Persons->where('academic_level', 'bac+1')->count(),
                'Bac+2' => Level::find($this->id)->Persons->where('academic_level', 'bac+2')->count(),
                'Bac+3' => Level::find($this->id)->Persons->where('academic_level', 'bac+3')->count(),
                'Bac+4' => Level::find($this->id)->Persons->where('academic_level', 'bac+4')->count(),
                'Bac+5' => Level::find($this->id)->Persons->where('academic_level', 'bac+5')->count(),
                'Bac+6' => Level::find($this->id)->Persons->where('academic_level', 'bac+6')->count(),
                'Bac+7' => Level::find($this->id)->Persons->where('academic_level', 'bac+7')->count(),
                'Bac+8' => Level::find($this->id)->Persons->where('academic_level', 'bac+8')->count(),

            ],

            'N des Elus locaux'=>Level::find($this->id)->Persons->count(),
            'N de partenaires' => Level::find($this->id)->Institutions->count(),
            'N des conseillers communaux'=> LevelPerson::all()->where('function','like','%conseil')->count(),


            'detail_level' => [
                'link' => (function () {

                    return route('levels.show', [$this->country_id, $this->id]);

                })(),
            ],
        ];
    }
}
