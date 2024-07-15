<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilsController;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Models\AdminUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['login', 'register']]);
    }

    public function login(UserRequest $request): \Illuminate\Http\JsonResponse
	{
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // authentication passed
            return response()->json(['message' => 'Login successful'], 200);
        }

		return response()->json(['error' => 'Unauthenticated'], 401);
    }

    public function register(UserRegisterRequest $request): \Illuminate\Http\JsonResponse
	{
        $userData = $request->all();
        $userData['password'] = Hash::make($userData['password']);
        $user = User::create($userData);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ], 200);
    }

    public function logout(): void
	{
        Auth::logout();
        response()->redirectTo('login');
    }

    public function userProfile(): \Illuminate\Http\JsonResponse
	{
        $user = Auth::user();

        // si es admin
        $admin = AdminUser::where("user_id", $user->id)->first();
        if($admin) {
            $user->admin = true;
            $user->rol = $admin->rol;
        } else {
            $user->admin = false;
        }

		if (!$user) {
			return response()->json(['error' => 'Unauthenticated'], 401);
		}

		return response()->json($user, 200);
    }


}
