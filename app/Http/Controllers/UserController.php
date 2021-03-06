<?php

namespace App\Http\Controllers;

//use App\User;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        //error_log('Some message here. 11111');
        return view('application');
    }

    /**
     * Get users list
     *
     *
     */

    public function getUsers(Request $request)
    {
        error_log('@@ lara getUsers 1');

        $usersDB = \App\Models\User::all();

        foreach ($usersDB as $user) {
            $user["role"] = $user->getRoleNames()[0];
        }


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

//        q = '',
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


    /**
     * Get data for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUserById($id)
    {
        error_log('@@ lara getUserById $id '. $id);

        if ( $userDB = \App\Models\User::findOrFail($id) ) {

            $userDB["role"] = $userDB->getRoleNames()[0];

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

    public function addUser(Request $request)
    {
        error_log('@@ lara addUser');

        $userdata = $request["user"];
        // error_log('$request '. $userdata);

        $request->validate([
            '*.name' => 'required|string',
            '*.email' => 'required|string|unique:users',
            //'password' => 'required|string',
            //'c_password' => 'required|same:password'
        ]);

        $user = new User([
            'name' => $userdata['name'],
            'email' => $userdata['email'],
            //'password' => bcrypt($request->password),
        ]);

        if ($user->save()) {

            $user->assignRole('basic-user');

            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->plainTextToken;

            $tokenResult = $user->createToken('Personal Refresh Token');
            $refreshToken = $tokenResult->plainTextToken;


            return response()->json( $user, 200 );
        }
        else {
            return response()->json([], 404);
        }
    }
}
