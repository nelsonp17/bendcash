<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Ancla',
	props: {
		href: {
			type: String,
			default: '#'
		},
		id: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		clase: {
			type: String,
			required: true
		}
	},
	emits: ['click-button']
})
</script>

<template>
	<router-link
		:id="id"
		:to="href"
		:class="clase"
		@click="$emit('click-button')"
	>
		{{ text }}
	</router-link>
</template>
