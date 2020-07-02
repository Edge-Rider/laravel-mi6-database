<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mission extends Model
{
    protected $fillable = [
        'name',
        'year'
    ];

    public function people(){
        return $this->belongsToMany(Person::class);
    }

}
