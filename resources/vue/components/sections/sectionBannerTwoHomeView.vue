<template>
	<div class="bg-cover bg-center w-full flex">
		<img v-bind:src="asset('img/casino.png')" alt="" class="w-full" style="max-height: 643px;">
		<div class="w-full items-center justify-center text-center flex absolute" style="height: 643px;">
			<div class="p-10">
				<div class="text-white block">
					<div class="inline-flex mb-8">
						<img v-bind:src="asset('img/logo-small.png')" alt="Logo" class="h-auto w-16">
						<div class="text-4xl flex ml-3 items-center justify-between">
							<div class="krona-one-regular">Bendcash</div>
						</div>
					</div>
					<div class="block" style="margin-top: calc(643px/2)">
						<button class="text-2xl bg-[#242834] text-white py-2 px-6 border-[#FFD78B] border-2 rounded-lg poppins-regular hover:border-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600">
							Jugar en Línea
						</button>
					</div>
				</div>
			</div>

		</div>
	</div>


</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "sectionBannerTwoHomeView",
	setup(){
		return {
			asset: (path: string) => {
				return assets(path)
			}
		}
	}
})
</script>
