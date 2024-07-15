<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Middleware\RedirectIfAuthenticated;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Dashboard routes
Route::prefix('dashboard')->middleware('auth')->group(function () {
	Route::view('/', 'ui.main')->name("dashboard");
	Route::view('/profile', 'ui.main')->name("dashboard.profile");
});

// AUTH ROUTES POST
Route::post('/login', [AuthController::class, 'login'])->name("login.post");
Route::post('/register', [AuthController::class, 'register'])->name("register.post");
Route::get('/logout', [AuthController::class, 'logout'])->name("logout.get");
Route::view('/template/home', 'template.home')->name("template.home");

// Web routes
Route::get('/env.js', [\App\Http\Controllers\EnvController::class, 'index'])->name("env.js");
Route::view('/', 'ui.main')->name('home');
Route::view('/bet', 'ui.main')->name('bet');
Route::view('/login', 'ui.main')->name('login')->middleware([RedirectIfAuthenticated::class]);
Route::view('/register', 'ui.main')->name('register')->middleware([RedirectIfAuthenticated::class]);
Route::view('/forgot', 'ui.main')->name('forgot');
Route::view('/reset', 'ui.main')->name('reset');
Route::get('/terms', function (){
	$md = file_get_contents(resource_path('markdown/es/terms.md'));
	$md = Str::of($md)->markdown();
	return view('terms', ['md' => $md]);
})->name('terms');
Route::get('/conditions', function (){
	$md = file_get_contents(resource_path('markdown/es/conditions.md'));
	$md = Str::of($md)->markdown();
	return view('terms', ['md' => $md]);
})->name('conditions');

// Group games
Route::prefix('games')->group(function () {
	Route::view('/blackjack', 'ui.main')->name("blackjack");
});

// Forms routes
Route::prefix('postman')->group(function () {
	Route::view('/register', 'postman', ['form' => 'register'])->name('postman.register');
	Route::view('/login', 'postman', ['form' => 'login'])->name('postman.login');
});
