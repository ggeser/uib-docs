<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class StructTableSeeder extends Seeder
{
    public function run()
    {
        $structs = [
            [
                'ShortOrgName' => 'Administrator',
                'children' => [
                    [
                        'ShortOrgName' => 'Agent 1',
                        'children' => [
                            ['ShortOrgName' => 'Sub Agent 1'],
                            ['ShortOrgName' => 'Sub Agent 2'],
                            ['ShortOrgName' => 'Sub Agent 3'],
                        ],
                    ],
                    [
                        'ShortOrgName' => 'Agent 2',
                        'children' => [
                            ['ShortOrgName' => 'Sub Agent 1'],
                            ['ShortOrgName' => 'Sub Agent 2'],
                            ['ShortOrgName' => 'Sub Agent 5'],
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
