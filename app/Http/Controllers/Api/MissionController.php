<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mission;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function index(){
        return Mission::orderBy('year', 'asc')->get();
    }

    public function attachPerson(Request $request){
        $person_id = $request->input('person_id');
        $mission_id = $request->input('mission_id');

        Mission::findOrFail($mission_id)->people()->attach($person_id);
    }

    public function detachPerson(Request $request){

        $person_id = $request->input('person_id');
        $mission_id = $request->input('mission_id');

        Mission::findOrFail($mission_id)->people()->detach($person_id);
    }
}
