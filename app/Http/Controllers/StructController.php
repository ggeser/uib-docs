<?php

namespace App\Http\Controllers;

use App\Models\Struct;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class StructController extends Controller
{
    public function index()
    {
        $structs = Struct::get()->toTree();
        return view('application', compact('structs'));
        //return view('application', ['structs' => $structs]);
    }

    //public function getStructsList(Request $request)
    public function getStructsList($id)
    {
        error_log('@@ lara getStructsList $id= ' . $id);

        //$usersDB = User::all();
        $usersDB = Struct::get()->toTree($id); ///t тут подставлять id той структуры начиная с которой может видеть Пользователь
        //$usersDB = Struct::descendantsOf(1)->toTree(1);

        $breadcrumbsDB = Struct::ancestorsAndSelf($id);

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
            'breadcrumbs' => $breadcrumbsDB,
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




    /**
     * Get data for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getStructById($id)
    {
        error_log('@@ lara getStructById $id '. $id);

        if ( $userDB = Struct::get()->toTree($id) ) {

            //$userDB["role"] = $userDB->getRoleNames()[0];

            return response()->json( $userDB, 200 );
        }
        else {
            return response()->json([], 404);
        }
    }


    /**
     * add User
     *
     *
     */

    //public function addStruct(Request $request)
    public function addStruct(Request $request)
    {
        error_log('@@ lara addStruct');

        $params = $request["params"];
        $parrentId = $params["parrentId"];
        $userdata = $params["userData"];

        error_log('@@ lara addStruct '. $parrentId);
        error_log('@@ lara addStruct '. $userdata["ShortOrgName"]);



        $userdata->validate([
            'ShortOrgName' => 'required|string',
            //'*.ShortOrgName' => 'required|string',
            //'*.email' => 'required|string|unique:users',
            //'password' => 'required|string',
            //'c_password' => 'required|same:password'
        ]);

        $parrent = Struct::findOrFail($parrentId);
        error_log('@@ lara addStruct '. $parrent.id);

//
//        $user = new Struct([
//            'name' => $userdata['name'],
//            'email' => $userdata['email'],
//            //'password' => bcrypt($request->password),
//        ]);
//
//        if ($user->save()) {
//
//            $user->assignRole('basic-user');
//
//            $tokenResult = $user->createToken('Personal Access Token');
//            $token = $tokenResult->plainTextToken;
//
//            $tokenResult = $user->createToken('Personal Refresh Token');
//            $refreshToken = $tokenResult->plainTextToken;
//
//
//            return response()->json( $user, 200 );
//        }
//        else {
//            return response()->json([], 404);
//        }
    }
}
