<?php

namespace App\Http\Controllers;

use App\Models\Depart;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Validator;
use Illuminate\Http\Request;

class DepartController extends Controller
{
    public function index()
    {
        $departs = Depart::get()->toTree();
        return view('application', compact('departs'));
    }


    public function getDepartsList($id)
    {
        error_log('@@ lara getDepartsList $id= ' . $id);

        $usersDB = Depart::get()->toTree($id); ///t тут подставлять id той структуры начиная с которой может видеть Пользователь
        //$usersDB = Depart::descendantsOf(1)->toTree(1);

        $breadcrumbsDB = Depart::ancestorsAndSelf($id);

        return response()->json([
            'users' => $usersDB, // $users  $userDB
            'breadcrumbs' => $breadcrumbsDB,
            'total'=> count($usersDB),
        ], 200);
    }




    /**
     * Get data for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDepartById($id)
    {
        error_log('@@ lara getDepartById $id '. $id);

        if ( $userDB = Depart::get()->toTree($id) ) {

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

    public function addDepart(Request $request)
    {
        error_log('@@ lara addDepart');

        $params = $request["params"];
        $parentId = $params["parentId"];
        $userdata = $params["userData"];

        error_log('@@ lara addDepart $parentId'. $parentId);
        error_log('@@ lara addDepart $userdata["ShortOrgName"]'. $userdata["ShortOrgName"]);


        $validator = Validator::make($request->all(), [
            'params.userData.ShortOrgName' => 'required|string|unique:departs,ShortOrgName',
            ///t другие параметры и проверки

        ]);

        if ($validator->fails()) {
            return response()->json([], 404);
//            return redirect('post/create')
//                ->withErrors($validator)
//                ->withInput();
        }

        //error_log('@@ lara addDepart @@ '. $request->params['userData']['ShortOrgName']);

        $agent = new Depart([
            'ShortOrgName' => $request->params['userData']['ShortOrgName'],
        ]);

        //error_log('@@ lara $agent '. $agent->ShortOrgName);

        $parent = Depart::findOrFail($parentId);
        //error_log('@@ lara addDepart '. $parent->id);


        if ( $agent->appendToNode($parent)->save() ) {
            return response()->json( $agent, 200 );
        }
        else {
            return response()->json([], 404);
        }
    }
}
