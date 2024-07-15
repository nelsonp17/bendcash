<template>
	<div class="bg-[#242834] w-full">
		<div class="py-10 px-10 flex items-center justify-center text-white krona-one-regular">
			<div class="md:w-1/3 lg:w-1/4 flex rounded bg-[#2D313C] md:mx-2 lg:mx-8 py-4 px-4 item-winner" v-for="i in 3" key="i">
				<img src="https://quick-kingfish-desired.ngrok-free.app/img/male_boy_person_people_avatar_icon_159358.png" class="w-1/3" alt="name-ganador"/>
				<div class="ml-4 flex items-center justify-center">
					<div class="">
						<p class="text-2xs mb-2">Nelson Portillo</p>
						<p class="text-2xs">1.354 VEF</p>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "sectionWinnerHomeView"
})
</script>
