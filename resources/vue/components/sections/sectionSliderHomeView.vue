<template>
	<div class="bg-cover bg-center w-full flex">
		<img v-bind:src="asset('img/slider/5.jpg')" alt="" class="w-full" style="height: 580px;">
		<div class="bg-black opacity-60 p-10 w-full absolute" style="height: 580px;"></div>
		<div class="p-10 w-full absolute" style="height: 580px;">
			<div class="w-1/3 my-24">
				<div class="text-white">
					<h2 class="text-3xl font-bold mb-4">Lorem Ipsum</h2>
					<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<router-link to="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Iniciar ahora
					</router-link>
				</div>
			</div>
		</div>
	</div>


</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "sectionSliderHomeView",
	setup(){
		return {
			asset: (path: string) => {
				return assets(path)
			}
		}
	}
})
</script>
