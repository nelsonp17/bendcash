<script lang="ts">
import { defineComponent } from 'vue'
import IconUser from '@/components/svg/iconUser.vue'

export default defineComponent({
	name: 'ButtonProfile',
	components: { IconUser },
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
	<router-link
		:id="id"
		:to="href"
		class="font-semibold leading-6 text-gray-900 py-2 px-3 rounded text-sm hover:bg-gray-50 flex"
		@click="$emit('click-button')"
	>
		<div class="pr-2">
			<IconUser/>
		</div>
		{{ text }}
	</router-link>
</template>
