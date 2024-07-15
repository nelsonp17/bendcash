<form action="{{ url('api/v1/auth/login') }}" method="post">
	@csrf
	<input type="email" name="email" placeholder="email">
	<input type="password" name="password" placeholder="password">
	<button type="submit">Enviar</button>
</form>
