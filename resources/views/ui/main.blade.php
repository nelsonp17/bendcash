<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Laravel</title>
	<link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
	<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
	<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
	<link rel="manifest" href="{{ asset('site.webmanifest') }}">

	<script src="{{ url('env.js')  }}"></script>
	<script src="{{ asset('js/utils.js')  }}"></script>
	@vite(['resources/sass/app.scss', 'resources/js/loader.js', 'resources/js/app.js'])
</head>
<body lang="es">
	<main id="app"></main>

	<script>
		//const APP = @json(\App\Http\Controllers\UtilsController::GetApp());
	</script>

</body>
</html>
