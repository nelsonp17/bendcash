<template>
	<img class="logo-normal" :alt="alt" :src="source"/>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Logo',
	components: {
	},
	data: () => ({
		source: logo.normal || '',
		alt: "Bendcash"
	}),
	computed: {
	}
})
</script>
