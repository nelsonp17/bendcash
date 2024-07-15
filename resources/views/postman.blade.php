<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/cache.css') }}">
		<meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body lang="es">
	{{ $form }}

	{{ $errors }}
	@switch($form)
		@case('login')
		@includeIf('forms.login', ['form' => 'login'])
		@break

		@case('register')
		@includeIf('forms.register', ['form' =>'register'])
		@break
	@endswitch

	</body>
</html>
