<?php

namespace App\Http\Controllers;

use App\Models\Struct;
use Illuminate\Http\Request;

class StructController extends Controller
{
    public function index()
    {
        $structs = Struct::get()->toTree();
        return view('application', compact('structs'));
        //return view('application', ['structs' => $structs]);
    }

    public function getStructs(Request $request)
    {
        error_log('@@ lara getStructs 1');

        //$usersDB = \App\Models\User::all();
        $usersDB = \App\Models\Struct::get()->toTree();

//        foreach ($usersDB as $user) {
//            $user["role"] = $user->getRoleNames()[0];
//        }


//        $users = array(
//            array(
//                //"email" => $user->email,
//                "id"=> $usersDB[1]->id,
//                "fullName"=> $usersDB[1]->name,
//                "company"=> "Yotz PVT LTD",
//                "role"=> "editor",
//                "username"=> "gslixby0",
//                "country"=> "El Salvador",
//                "contact"=> "(479) 232-9151",
//                "email"=> "gslixby0@abc.net.au",
//                "currentPlan"=> "enterprise",
//                "status"=> "inactive",
//                "avatar"=> "",
//            ),
//        );

//    q = '',
//    perPage = 10,
//    page = 1,
//    sortBy = 'id',
//    sortDesc = false,
//    role = null,
//    plan = null,
//    status = null,

        return response()->json([
            'users' => $usersDB, // $users  $userDB
            'total'=> count($usersDB),
        ], 200);

//        return [
//        200,
//        {
//            users: paginateArray(sortedData, perPage, page),
//          total: filteredData.length,
//        },
//        ]

    }
}
