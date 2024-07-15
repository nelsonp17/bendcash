<template>
	<div class="bg-cover bg-center w-full flex">
		<img v-bind:src="asset('img/banner/io_01.png')" alt="" class="w-full" style="height: 400px;">
		<div class="w-full flex absolute" style="height: 400px;">
			<div class="p-10">
				<div class="text-white block">
					<div class="block pl-20" style="margin-top: calc(530px/2)">
						<button class="text-2xs bg-[#242834] text-white py-2 px-6 border-[#FFD78B] border-2 rounded-lg poppins-regular hover:border-[#242834] ">
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
	name: "setionBetOneView",
	setup(){
		return {
			asset: (path: string) => {
				return assets(path)
			}
		}
	}
})
</script>
