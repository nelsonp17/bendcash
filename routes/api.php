<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\UtilsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
/**
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});**/

/**
* // API routes
* Route::prefix('v1')->group(function () {
    * // Auth routes
	* Route::prefix('auth')->group(function () {
		* Route::controller(AuthController::class)->group(function () {
            * Route::post('login', 'login');
            * Route::post('register', 'register');
            * Route::post('logout', 'logout');
            * Route::post('refresh', 'refresh');
        * });
		* Route::post('user-data', [AuthController::class, 'userProfile']);
		* Route::post('profile/update/{id}', [ProfileController::class, 'update']);
 * });
 * });
 */


