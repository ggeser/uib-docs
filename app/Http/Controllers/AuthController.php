<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;

class AuthController extends Controller
{
    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function register(Request $request)
    {

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|string',
            'c_password' => 'required|same:password'
        ]);

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        if ($user->save()) {

            $user->assignRole('basic-user');

            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->plainTextToken;

            $tokenResult = $user->createToken('Personal Refresh Token');
            $refreshToken = $tokenResult->plainTextToken;

            $userData = array(
                "email" => $user->email,
                //"password" => $user->password,
                "username" => $user->name,
                "fullName" => $user->name,
                "avatar" => null,
                "role" => "admin",
                "ability" => array(array(
                    "action" => "manage",
                    "subject" => "all",
                ))
            );

            return response()->json([
                'message' => 'Successfully created user!',
                'userData'=> $userData,
                'accessToken' => $token,
                'refreshToken' => $refreshToken,
                'userid' => $user->id,
            ], 201);


        } else {
            return response()->json(['error' => 'Provide proper details']);
        }
    }


    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     */

    public function login(Request $request)
    {
        error_log('lara login 1');
        error_log('$request->remember_me = '. $request->remember_me);

        $status_remember_me = false;
        if ( $request->remember_me) {
            $status_remember_me = true;
        }

        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            $status_remember_me => 'boolean',
        ]);

        error_log('lara login 2');


        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $user = $request->user();

        $userData = array(
            "email" => $user->email,
            //"password" => $user->password,
            "username" => $user->name,
            "fullName" => $user->name,
            "avatar" => null,
            "role" => "admin",
            "ability" => array(array(
                "action" => "manage",
                "subject" => "all",
            ))
        );


        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;

        $tokenResult = $user->createToken('Personal Refresh Token');
        $refreshToken = $tokenResult->plainTextToken;

        return response()->json([
            'message' => 'Successfully login user!',
            'userData'=> $userData,
            'accessToken' => $token,
            'refreshToken' => $refreshToken,
            'userid' => $user->id,
        ], 201);

    }


    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }


    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        error_log("logout");

        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);

    }
}
