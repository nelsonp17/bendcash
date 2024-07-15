<template>
	<div class="mx-0 px-0" id="header">
		<!-- Top Header -->
		<header class="bg-white py-6">
			<!-- Nabar Desktop -->
			<nav class="hidden md:flex mx-auto max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
				<!-- Logo Desktop -->
				<router-link aria-current="page" to="/" class="router-link-active router-link-exact-active text-3xl font-bold">
					<Logo/>
				</router-link>
				<!-- Navbar items -->
				<div class="flex items-center space-x-4">
					<div class="flex space-x-1">
						<router-link to="/login" class="font-semibold leading-6 text-gray-900 py-2 px-3 rounded text-sm hover:bg-gray-50 flex">
							<div class="pr-2">
								<i class="fi fi-person"></i>
							</div>
							Iniciar Sesión
						</router-link>
						<router-link to="/register" class="font-semibold leading-6 text-gray-900 py-2 px-3 rounded text-sm hover:bg-gray-50 flex">
							<div class="pr-2">
								<i class="fi fi-person"></i>
							</div>
							Registrarse
						</router-link>
					</div>
				</div>
			</nav>
			<!-- Navabar Mobile -->
			<nav class="md:hidden mx-auto flex max-w-7xl items-center justify-between px-4" aria-label="Global">
				<!-- Logo Mobile -->
				<router-link aria-current="page" to="/" class="router-link-active router-link-exact-active text-3xl font-bold">
					<LogoSmall/>
				</router-link>

				<!-- Navbar items -->
				<div class="flex">
					<div data-headlessui-state="" class="relative inline-block text-center">
						<div>
							<button id="headlessui-menu-button-5" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" class="inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2">
								<i class="fi fi-nav-icon"></i>
							</button>
						</div>
						<!---->
					</div>
				</div>
			</nav>
			<!-- / Navbar mobile -->
		</header>
		<!-- Bottom Header -->
		<header class="bg-primary py-4">
			<div class="container-navbar container mx-auto flex justify-between items-center">
				<nav class="hidden md:flex space-x-6 text-sm">
					<router-link aria-current="page" to="/" class="router-link-active router-link-exact-active text-gray-800 text-white hover:text-gray-300">Inicio</router-link>
					<a href="/shop" class="text-gray-800 text-white hover:text-gray-300">Tienda</a>
					<a href="/contact" class="text-gray-800 text-white hover:text-gray-300">Contacto</a>
					<a href="/about" class="text-gray-800 text-white hover:text-gray-300">Acerca de</a>
				</nav>
				<nav class="md:hidden">
					<div data-headlessui-state="" class="relative inline-block text-left">
						<div>
							<button id="headlessui-menu-button-7" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-black text-white">
								Menú
								<i class="fi fi-nav-icon"></i>
							</button>
						</div>
						<!---->
					</div>
				</nav>
				<a href="/cart" class="flex items-center text-sm text-white font-normal hover:text-gray-300">
					<i class="fi fi-shopping-bag"></i>
					0
				</a>
			</div>
		</header>
	</div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import Logo from "../logo/Logo.vue";
import LogoSmall from "../logo/LogoSmall.vue";

export default defineComponent({
	name: 'HeaderMain',
	components: {
		LogoSmall,
		Logo
	},
	data: () => ({

	}),
	methods: {
	},
	mounted() {
	},
	computed: {
	}
})
</script>
