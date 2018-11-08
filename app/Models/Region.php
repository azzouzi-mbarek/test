<?php

namespace App\Models;

use Grimzy\LaravelMysqlSpatial\Eloquent\SpatialTrait;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use spatialTrait;
    protected $fillable = [
        'name',
    ];

    protected $spatialFields = [
        'area',
    ];

    public function Country()
    {
        return $this->hasMany(Country::class);
    }
}
