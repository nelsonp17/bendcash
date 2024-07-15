<template>
	<section class="bg-gray-100 w-full">
		<section class="py-8">
			<div class="flex items-center min-h-screen p-4 lg:justify-center">
				<div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md px-5 py-5">
					<div class="p-5 bg-white md:flex-1">
						<h3 class="my-4 text-2xl font-semibold text-gray-700 text-center">Registrar usuario</h3>
						<form class="flex flex-col space-y-5">
							<div class="flex flex-col space-y-1">
								<div class="flex items-center justify-between">
									<label for="username" class="label-bend">Correo Electrónico</label>
								</div>
								<div class="mt-2">
									<input id="email" type="email" name="email" class="input-text-bend" v-model="form.email">
								</div>
							</div>

							<div class="flex flex-col space-y-1">
								<div class="flex items-center justify-between">
									<label for="username" class="label-bend">Nombre de usuario</label>
								</div>
								<div class="mt-4">
									<input id="username" type="password" name="username" class="input-text-bend" v-model="form.username">
								</div>
							</div>

							<div class="flex flex-col space-y-1">
								<div class="flex items-center justify-between">
									<label for="password" class="label-bend">Contraseña</label>
								</div>
								<div class="mt-4">
									<input id="password" type="password" name="password" class="input-text-bend" v-model="form.password">
								</div>
							</div>

							<div class="flex flex-col space-y-1">
								<div class="flex items-center justify-between">
									<label for="gender" class="label-bend">Genero</label>
								</div>
								<div class="mt-4">
									<select id="gender" name="username" class="input-text-bend" v-model="form.gender">
										<option value="">Seleccione una opción</option>
										<option value="Hombre">Hombre</option>
										<option value="Mujer">Mujer</option>
									</select>
								</div>
							</div>

							<div>
								<button type="submit" class="btn-primary w-full text-lg font-semibold">
									Registrar
								</button>
							</div>

							<div class="border-b border-1 border-gray-300 pt-6"></div>
							<p class="flex flex-col items-center justify-center mt-10 text-center">
								<router-link to="/login" class="underline">Inicia Sesión</router-link>
							</p>

						</form>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import Logo from "../components/logo/Logo.vue";

export default defineComponent({
	name: "Register",
	components: {Logo},
	data: ()=> ({
		form: {
			username: '',
			email: '',
			password: '',
			gender: '',
		}
	})
})
</script>
