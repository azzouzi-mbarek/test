<?php

use App\Models\Region;
use Faker\Generator as Faker;

$factory->define(App\Models\Country::class, function (Faker $faker) {
    return [
        'region_id' => function () {
            return Region::all()->random();
        },
        'name' => $faker->country,
        'population' => $faker->numberBetween($min = 1000, $max = 9000),
        'population_year' => $faker->year,
        'description' => $faker->text,
        'capital' => $faker->city,
        'devise' => $faker->currencyCode,
    ];
});
