<?php

// вкладка Партнеры

namespace App\Http\Controllers;

use App\Models\Struct;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
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

    // public function getStructsList($id)
    public function getStructsList(Request $request) // отображение дерева Партнеров
    {
        $target_id = $request["id"]; // запрашиваемый id начиная с которого отображать дерево партнеров
        error_log('@@ lara getStructsList $target_id'. $target_id);


        $user = Auth::user();   // $user = $request->user();  // получаем пользователя который запрашивает отображение ветки Партнеров
        //$user = User::find(Auth::id());

        error_log('@@ $user->tokens->count() '. $user->tokens->count());

        $canSeeId = $user->struct_id;
        // error_log('@@ lara $canSeeId= ' . $canSeeId);

//        $breadcrumbsDB = Struct::ancestorsAndSelf($target_id);
//        for ( $i = count($breadcrumbsDB)-1; $i>=0; $i-- ) {
//            $tmpBread = $breadcrumbsDB[$i];
//            $rezBread[] = $tmpBread;
//
//            if ( $tmpBread->id == $canSeeId ) { break; }
//        }

        if ( $target_id != $canSeeId ) {
            $parent = Struct::findOrFail($canSeeId);
            $target = Struct::findOrFail($target_id);

            if ( !$parent->isAncestorOf($target) ) {  // проверяем является ли агент родителем того что он запрашивает
                $target_id = $canSeeId;
            }
        }

        if ( $target_id == 1 ) {
            $target_id = $canSeeId;
        }

        //$usersDB = User::all();
        $usersDB = Struct::get()->toTree($target_id); //$usersDB = Struct::descendantsOf(1)->toTree(1);



        $breadcrumbsDB = Struct::ancestorsAndSelf($target_id);

        $rezBread = null;
        for ( $i = count($breadcrumbsDB)-1; $i>=0; $i-- ) {
            $tmpBread = $breadcrumbsDB[$i];
            $rezBread[] = $tmpBread;

            if ( $tmpBread->id == $canSeeId ) { break; }
        }
        $rezBread = array_reverse($rezBread);

//        $breadcrumbsDB = Struct::defaultOrder()->ancestorsOf($target_id);

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
            'breadcrumbs' => $rezBread,
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
    public function getStructById($id)  // получаем данные о выбранном партнере
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
    public function addStruct(Request $request)  // создать нового партнера
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
