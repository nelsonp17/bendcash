<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use function Termwind\render;

class EnvController extends Controller
{
    public function index()
	{
		//header("Content-Type: application/javascript; Cache-Control:	no-cache");
		$app = json_encode(UtilsController::GetApp());
		$list_route = json_encode(UtilsController::$listRoute, 1);
		$textJS = '
const APP='. $app .';

const {auth, user, logo, url_base, routes} = APP

let LIST_ROUTE = '.$list_route.'
		';

		return response($textJS)->header("Content-Type", "application/javascript");
	}
}
