<?php

namespace App\Http\Controllers;

use App\Http\Resources\Level\LevelCollection;
use App\Http\Resources\Level\LevelResource;
use App\Models\Country;
use App\Models\Level\Level;
use GeoJson\GeoJson;
use Grimzy\LaravelMysqlSpatial\Types\Geometry;
use Illuminate\Http\Request;

class LevelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($country_id = null, Request $request)
    {
        $level_id = $request->id;

        // return level only level one
        if ($level_id == null) {
            $country = Country::find($country_id);
            $levels = $country->levels()->where('level_id', $level_id)->get();

        } else {
            $level = Level::find($level_id);
            $levels = $level->levels()->where('level_id', $level_id)->get();

        }

        return LevelCollection::collection($levels);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($country_id = null, Request $request)
    {

        if (isset($request->single_shape)) {
            dd('not single');
        } else {

            // test if file in request from Frontend
            if ($request->hasFile('geojson')) {
                // get file from request
                $file = $request->file('geojson');
                // get content from file
                // file format type STRING  "{ \n "type" :"Feature" ,\n  "name"... }
                $fileContents = file_get_contents($file);
                // decode it to PHP Object format "{type: "Feature", name: "mauritanie",…}"
                $FilePhpObjectFormat = json_decode($fileContents);

                // Parse to file to GeoJson format
                $features = GeoJson::jsonUnserialize($FilePhpObjectFormat);
                // dd($features);
                // save each feature
                foreach ($features as $value) {
                    // create new region
                    $level = new Level();
                    // get propreties from propreties geom
                    $level->name = $value->getProperties()['ADM1'];

                    //get geometry in Object PHP format
                    $geometry = $value->getGeometry();
                    // create Geometry from json
                    $level->country_id = $country_id;
                    $level->area = Geometry::fromJson(json_encode($geometry));
                    // dd($country->area instanceof Polygon);
                    // dd($level);
                    $level->save();
                }
            }
        }
        return response(
            [
                // 'data' => new CountryResource($country),

            ],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Level\Level  $level
     * @return \Illuminate\Http\Response
     */
    public function show($country_id, $level_id)
    {
        $level = Level::find($level_id);

        return new LevelResource($level);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Level\Level  $level
     * @return \Illuminate\Http\Response
     */
    public function edit(Level $level)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Level\Level  $level
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Level $level)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Level\Level  $level
     * @return \Illuminate\Http\Response
     */
    public function destroy(Level $level)
    {
        //
    }
}
