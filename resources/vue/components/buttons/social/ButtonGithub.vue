<template>
  <a
    :href="href"
    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
  >
    <span>
      <IconGitHub className="w-5 h-5 text-gray-800 fill-current group-hover:text-white" />
    </span>
    <span class="text-sm font-medium text-gray-800 group-hover:text-white">Github</span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconGitHub from '@/components/svg/iconGitHub.vue'

export default defineComponent({
	name: 'ButtonGithub',
	components: {
		IconGitHub
	},
	props: {
		href: {
			type: String,
			required: true
		}
	}
})
</script>
