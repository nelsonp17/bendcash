<template>
	<header class="bg-[#242834] text-white body-font">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
			<router-link to=/ class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
				<!-- Logo -->
				<div class="inline-flex">
					<img v-bind:src="asset('img/logo-small.png')" alt="Logo" class="h-auto w-10">
					<div class="flex ml-3 items-center justify-between">
						<div class="krona-one-regular text-white">Bendcash</div>
					</div>
				</div>
			</router-link>
			<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center poppins">
				<router-link to="/bet" class="mr-5 hover:text-gray-400 cursor-pointer">Apuesta</router-link>
				<a class="mr-5 hover:text-gray-400 cursor-pointer">Tablero</a>
				<a class="mr-5 hover:text-gray-400 cursor-pointer">Ganadores</a>
			</nav>
			<div class="space-x-4 poppins" v-if="!isLogin">
				<router-link to="/login" class="bg-[#2D313C] hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 text-sm px-4 py-2 rounded"><i class="fa fa-user mr-2"></i>Iniciar sesión</router-link>
				<router-link to="/register" class="bg-[#2D313C] hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 text-sm px-4 py-2 rounded"><i class="fa fa-user mr-2"></i>Registrarse</router-link>
			</div>
			<div class="space-x-4 poppins" v-else>
				<button class="bg-[#2D313C] hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 text-sm px-4 py-2 rounded"><i class="fa fa-user mr-2"></i>Cuenta</button>
			</div>
		</div>
	</header>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "headerSimple",
	props: {
        isLogin: {
			type: Boolean,
			Default: false
		}
    },
	setup(){
		return {
            asset: (path: string) => {
                return assets(path)
            }
		}
	}
})
</script>
