<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mission;

class MissionController extends Controller
{
    public function index(){
        return Mission::orderBy('year', 'asc')->get();
    }
}
