<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class UtilsController extends Controller
{
	// Obtener todas las rutas registradas
	public static function Config () {
		$user = auth()->user();
		$userJson = null;
		if (!empty($user)){
			$userJson = [
				'username' => $user->username,
				'gender' => $user->gender,
				'email' => $user->email,
				'baneado' => $user->baneado
			];
		}
		return [
			'routes' => self::GetRoutes(),
			'list_routes' => self::$listRoute, // lista de rutas para vue
			'url_base' => env('APP_URL'),
			'user' => $userJson,
			'auth' => auth()->check(),
			'assets' => null,
			'logo' => [
				'normal' => asset('img/logo.png'),
				'small' => asset('img/logo-small.png'),
			]
		];
	}

	public static $listRoute = [];

	public static function GetApp() {
		return self::Config();
	}
	public static function GetRoutes () {
		// Obtener todas las rutas registradas
		$routes = Route::getRoutes();
		$routesArray = [];
		// Iterar sobre las rutas y obtener sus detalles
		foreach ($routes as $route) {
			$name = $route->getName();
			//echo(substr($name, 0, 7));
			//echo "<br><br>";
			if ($name == 'sanctum.csrf-cookie' || substr($name, 0, 8) == 'ignition' || $name == "env.js" || substr($name, 0, 7) == 'postman'){
				continue;
			}

			$uri = $route->uri();
			$path = '/'.trim($uri, '/');
			$name = $route->getName();
			$routeItemName = str_replace('.', "_", $name);
			$component = ucfirst($name);
			$routeItem = [
				$routeItemName => [
					'name' => $name,
					'path' => $path,
					'component' => '../pages/'.$component.'.vue'
				],
			];
			self::$listRoute[] = $routeItem;
			$routesArray[] = [
				'name' => $name,
				'uri' => $uri,
				'route' => $routeItem,
				'uri_full' => trim(env('APP_URL').$uri, '/'),
				'method' => $route->methods()[0]
			];
		}

		return $routesArray;
	}

}
