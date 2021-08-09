<?php

namespace App\Http\Controllers;

use App\Models\Struct;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Validator;
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
        $parentId = $params["parentId"];
        $userdata = $params["userData"];

        error_log('@@ lara addStruct $parentId'. $parentId);
        error_log('@@ lara addStruct $userdata["ShortOrgName"]'. $userdata["ShortOrgName"]);


        $validator = Validator::make($request->all(), [
            'params.userData.ShortOrgName' => 'required|string|unique:structs,ShortOrgName',
            ///t другие параметры и проверки

        ]);

        if ($validator->fails()) {
            return response()->json([], 404);
//            return redirect('post/create')
//                ->withErrors($validator)
//                ->withInput();
        }

        //error_log('@@ lara addStruct @@ '. $request->params['userData']['ShortOrgName']);

        $agent = new Struct([
            'ShortOrgName' => $request->params['userData']['ShortOrgName'],
        ]);

        //error_log('@@ lara $agent '. $agent->ShortOrgName);

        $parent = Struct::findOrFail($parentId);
        //error_log('@@ lara addStruct '. $parent->id);


        if ( $agent->appendToNode($parent)->save() ) {
            return response()->json( $agent, 200 );
        }
        else {
            return response()->json([], 404);
        }
    }
}
