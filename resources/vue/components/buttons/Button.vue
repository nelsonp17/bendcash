<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Button',
	props: {
		type: {
			type: String,
			default: 'button'
		},
		name: {
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
		},
		class: {
			type: String,
			required: true
		}
	},
	computed: {
		clase () {
			return `${this.class} inline-flex items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-base font-medium text-white shadow-sm text-sm font-semibold `
		}
	}
})
</script>

<template>
	<button :type="type" :id="id" @click="$emit('onClickButton')" :class="clase">
		{{ text }}
	</button>
</template>

