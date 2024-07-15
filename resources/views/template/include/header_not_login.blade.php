<header class="bg-[#242834] text-white h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
	<!-- Logo -->
	<div class="inline-flex">
		<img src="{{ asset('img/logo-small.png') }}" alt="Logo" class="h-auto w-10">
		<div class="flex ml-3 items-center justify-between">
			<div class="krona-one-regular">Bendcash</div>
		</div>
	</div>

	<!-- Menú -->
	<nav class="hidden md:block krona-one-regular">
		<ul class="flex space-x-10">
			<li><a class="hover:text-gray-200" href="#apuesta">Apuesta</a></li>
			<li><a class="hover:text-gray-200" href="#tablero">Tablero</a></li>
			<li><a class="hover:text-gray-200" href="#ganadores">Ganadores</a></li>
		</ul>
	</nav>

	<!-- Botones -->
	<div class="space-x-4 poppins">
		<button class="bg-[#2D313C] hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 text-sm px-4 py-2 rounded"><i class="fa fa-user mr-2"></i>Iniciar sesión</button>
		<button class="bg-[#2D313C] hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 text-sm px-4 py-2 rounded"><i class="fa fa-user mr-2"></i>Registrarse</button>
	</div>
</header>
