<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Depart extends Model
{
    use NodeTrait, HasFactory;

    protected $fillable = [
        'name',
        'description',
        'comment',
        'OtdelDolgn',
    ];
}
