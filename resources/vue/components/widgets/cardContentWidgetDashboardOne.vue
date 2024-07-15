<template>
	<div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
		<div class="flex items-start justify-between">
			<div class="flex flex-col space-y-2">
				<span class="text-gray-400">{{ title }}</span>
				<span class="text-lg font-semibold">{{ subtitle }}</span>
			</div>
			<div class="p-10 bg-gray-200 rounded-md"></div>
		</div>
		<div>
			<span class="inline-block px-2 text-sm text-white bg-green-300 rounded">{{ tag }}</span>
			<span>{{ from }}</span>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "cardContentWidgetDashboardOne",
	props:{
		title: {
			type: String,
			default: "Total Users"
		},
		subtitle:  {
			type: String,
			default: "100,221"
		},
		tag: {
			type: String,
			default: "14%"
		},
		from:{
			type: String,
			default: "from 2019"
		}
	}
})
</script>
