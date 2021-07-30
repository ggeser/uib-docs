<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Struct extends Model
{
    use NodeTrait, HasFactory;

    protected $fillable = [
        'comment',
        'INN',
        'KPP',
        'OGRN',
        'FullOrgName',
        'ShortOrgName',
        'UrAddress',
        'FactAddress',
        'dolgnostRuk',
        'nameRuk',
        'familiaRuk',
        'otchestvoRuk',
    ];

}
