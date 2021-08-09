<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DepartTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $departs = [
            [
                'name' => 'UIB',
                'children' => [
                    [
                        'name' => 'Programmers',
                        'children' => [
                            ['name' => 'Sub Depart 1'],
                            ['name' => 'Sub Depart 2'],
                            ['name' => 'Sub Depart 3'],
                        ],
                    ],
                    [
                        'name' => 'Buh',
                        'children' => [
                            ['name' => 'Sub Depart 1'],
                            ['name' => 'Sub Depart 2'],
                            ['name' => 'Sub Depart 5'],
                        ],
                    ],
                ],
            ],
        ];
        foreach ($departs as $depart) {
            \App\Models\Depart::create($depart);
        }
    }
}
