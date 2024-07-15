<template>
	<img class="logo-small" :alt="alt" :src="source"/>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'LogoSmall',
	components: {
	},
	data: () => ({
		source: logo.small || '',
		alt: "Bendcash"
	}),
	computed: {
	}
})
</script>
