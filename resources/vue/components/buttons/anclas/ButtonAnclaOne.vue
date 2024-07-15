<script lang="ts">
import { defineComponent } from 'vue'
import Ancla from '@/components/buttons/anclas/ancla.vue'

export default defineComponent({
	name: 'ButtonAnclaOne',
	components: { Ancla },
	props: {
		href: {
			type: String,
			required: true
		},
		id: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	},
	emits: ['click-button']
})
</script>

<template>
	<Ancla
		class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
		:id="id"
		:text="text"
		@click-button="() => $emit('click-button')"
	/>
</template>
