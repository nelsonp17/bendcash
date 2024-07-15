<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthViewsController extends Controller
{
    public function login(Request $request)
    {
        return view('auth.login');
    }

    public function register(Request $request)
    {
        return view('auth.register');
    }

    public function forgot(Request $request)
    {
        return view('auth.forgot');
    }
    public function reset(Request $request)
    {
        return view('auth.reset');
    }

    public function logout(Request $request)
    {
        return view('auth.logout');
    }
}
