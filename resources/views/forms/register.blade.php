<form action="{{ url('api/v1/auth/register') }}" method="post">
	@csrf
	<input type="text" name="username" placeholder="username">
	<input type="email" name="email" placeholder="email">
	<input type="password" name="password" placeholder="password">
	<button type="submit">Enviar</button>
</form>
