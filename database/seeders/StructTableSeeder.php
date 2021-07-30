<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class StructTableSeeder extends Seeder
{
    public function run()
    {
        $structs = [
            [
                'ShortOrgName' => 'Books',
                'children' => [
                    [
                        'ShortOrgName' => 'Comic Book',
                        'children' => [
                            ['ShortOrgName' => 'Marvel Comic Book'],
                            ['ShortOrgName' => 'DC Comic Book'],
                            ['ShortOrgName' => 'Action comics'],
                        ],
                    ],
                    [
                        'ShortOrgName' => 'Textbooks',
                        'children' => [
                            ['ShortOrgName' => 'Business'],
                            ['ShortOrgName' => 'Finance'],
                            ['ShortOrgName' => 'Computer Science'],
                        ],
                    ],
                ],
            ],
            [
                'ShortOrgName' => 'Electronics',
                'children' => [
                    [
                        'ShortOrgName' => 'TV',
                        'children' => [
                            ['ShortOrgName' => 'LED'],
                            ['ShortOrgName' => 'Blu-ray'],
                        ],
                    ],
                    [
                        'ShortOrgName' => 'Mobile',
                        'children' => [
                            ['ShortOrgName' => 'Samsung'],
                            ['ShortOrgName' => 'iPhone'],
                            ['ShortOrgName' => 'Xiomi'],
                        ],
                    ],
                ],
            ],
        ];
        foreach ($structs as $struct) {
            \App\Models\Struct::create($struct);
        }
    }
}
