<template>
	<a :href="href" class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none">
    <span>
		<IconTwitter className="text-blue-500 group-hover:text-white w-5 h-5"/>
	</span>
		<span class="text-sm font-medium text-blue-500 group-hover:text-white">Twitter</span>
	</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconTwitter from '@/components/svg/iconTwitter.vue'

export default defineComponent({
	name: 'ButtonTwitter',
	components: { IconTwitter },
	props: {
		href: {
			type: String,
			required: true
		}
	}
})
</script>
