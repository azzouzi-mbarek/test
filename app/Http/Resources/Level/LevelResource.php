<?php

namespace App\Http\Resources\Level;

use App\Models\Country;
use App\Models\Level\CategoryLevel;
use App\Models\Level\Level;
use App\Models\Person\LevelPerson;
use Illuminate\Http\Resources\Json\JsonResource;

class LevelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'web_site' => $this->web_site,
            'email' => $this->email,
            'number_phone' => $this->number_phone,
            'population' => $this->number_phone,
            'census_date_population' => $this->number_phone,
            'category_level' => CategoryLevel::find($this->category_level_id)->name,

            'region_id' => $this->country->region->id,
            'shape' => $this->area,
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
            'N de partenaires'=>Level::find($this->id)->Institutions->count(),

//            'population' => [
//                'link' => (function () {
//
//                    return route('population.index', [$this->country_id, $this->id]);
//                })(),
//            ],
            // 'legal_framework' => [
            //     'link' => (function () {

            //         return route('legal_frameworks.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],
            // 'leaderships' => [
            //     'link' => (function () {

            //         return route('persons.index', [$this->country_id, $this->id]);
            //     })(),
            // ],
            // 'communication_tools' => [
            //     'link' => (function () {

            //         return route('communication_tools.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],
            // 'finances' => [
            //     'link' => (function () {

            //         return route('finances.index', [$this->country_id, $this->id]);
            //     })(),
            // ],
            // 'evenements' => [
            //     'link' => (function () {

            //         return route('evenements.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],
            // 'programmes' => [
            //     'link' => (function () {

            //         return route('programmes.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],
            // 'Partenaires' => [
            //     'link' => (function () {

            //         return route('institutions.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],

            // 'Indicators of transparency' => [
            //     'link' => (function () {

            //         return route('indicators.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],

            'level_id' => $this->level,
            'emp' => 'LevelResource',
            'key' => $this->key,
            'href' => [
                'child_levels ' => (function () {

                    return route('levels.index', [$this->country_id, 'id' => $this->id]);

                })(),
            ],
        ];
    }
}
