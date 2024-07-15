<template>
	<section class="bg-gray-100 w-full">
		<section class="py-8">
			<div class="flex items-center min-h-screen p-4 lg:justify-center">
				<div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
					<div class="p-4 py-6 text-white bg-primary md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
						<div class="my-3 text-4xl font-bold tracking-wider text-center">
							<router-link to="/" class="">
								<logo/>
							</router-link>
						</div>
						<p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
							{{ card.text1 }}
						</p>
						<p class="flex flex-col items-center justify-center mt-10 text-center">
							<span>¿No tienes una cuenta?</span>
							<router-link to="/register" class="underline">¡Comenzar!</router-link>
						</p>
						<p class="mt-6 text-sm text-center text-gray-300">
							Lea nuestros <a href="/terms" target="_blank">términos</a> y <a href="/conditions" target="_blank">condiciones</a>
						</p>
					</div>
					<div class="p-5 bg-white md:flex-1">
						<h3 class="my-4 text-2xl font-semibold text-gray-700 text-center">Iniciar Sesión</h3>
						<form class="flex flex-col space-y-5" @submit.prevent="send" ref="formRef">
							<div class="flex flex-col space-y-1">
								<div class="flex items-center justify-between">
									<label for="password" class="label-bend">Correo Electrónico</label>
								</div>
								<div class="mt-2">
									<input id="email" type="email" name="email" class="input-text-bend" v-model="v$.form.email.$model">
								</div>
								<div class="input-msg-errors" v-for="error of v$.form.email.$errors" :key="error.$uid">
									<div class="error-msg">{{ error.$message }}</div>
								</div>
							</div>
							<div class="flex flex-col space-y-1">
								<div class="flex items-center justify-between">
									<label for="password" class="label-bend">Contraseña</label>
									<router-link to="/forgot" class="text-xs text-blue-600 hover:underline focus:text-blue-800">¿Olvidaste tu contraseña?</router-link>
								</div>
								<div class="mt-4">
									<input id="password" type="password" name="password" v-model="v$.form.password.$model" class="input-text-bend">
								</div>
								<div class="input-msg-errors" v-for="error of v$.form.password.$errors" :key="error.$uid">
									<div class="error-msg">{{ error.$message }}</div>
								</div>
							</div>
							<div class="flex items-center space-x-2">
								<div class="flex h-6 items-center">
									<input id="remember" type="checkbox" name="remember" class="checkbox-bend" v-model="v$.form.remember.$model">
								</div>
								<div class="text-sm leading-6">
									<label for="remember" class="font-medium text-gray-900">Recordar</label>
								</div>
							</div>
							<div>
								<button type="submit" class="btn-primary w-full text-lg font-semibold">
									Iniciar Sesion
								</button>
							</div>

						</form>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Logo from "../components/logo/Logo.vue";
import Auth from "../https/auth";
import { useVuelidate } from "@vuelidate/core";
import Errors from "../https/errors";
import { required, minLength, maxLength, email } from '@/i18n/i18n-validators'

export default defineComponent({
	name: "Login",
	components: {Logo},
	setup () {
		const auth = new Auth()
		const formRef = ref(null)

		return {
			auth,
			formRef,
			errors: new Errors(),
			v$: useVuelidate()
		}
	},
	data: () => ({
		card: {
			text1: "Con el poder de Laragon, ahora puede concentrarse solo en los funcionarios de sus productos digitales, mientras deja el diseño de la interfaz de usuario en nosotros!",
		},
		form: {
			email: '',
			password: '',
			remember: false,
		}
	}),
	validations () {
		return {
			form: {
				email: {
					required: required,
					email: email,
					minLength: minLength(4),
					maxLength: maxLength(255)
				},
				password: {
					required: required,
					minLength: minLength(8),
					maxLength: maxLength(25)
				},
				remember: {}
			}
		}
	},
	methods: {
		getBackRoute(){
			if(this.$route.meta && this.$route.meta.previousRoute){
				return this.$route.meta.previousRoute
			}
			return '/'
		},
		async send(){
			// eliminar espacios en blanco
			this.form.email = this.form.email.trim()

			// validacion de campos
			const isFormCorrect = await this.v$.$validate()
			if (!isFormCorrect) return

			// intento de registro
			await this.auth.login(this.form).then((response) => {
				//console.log("response", response)
				// si todo sale bien
				if (response.status === 200) {
					// redireccionar a login
					this.$router.push('/dashboard')
				} else {
					// mostrar error
					this.$toast.error("Ah ocurrido un error")
				}
			}).catch((error: never) => {
				//console.log("error", error)
				const errorValidationForm = this.errors.is422(error)
				for (const e of errorValidationForm) {
					this.$toast.error(e)
				}
			})
		}
	}
})
</script>
