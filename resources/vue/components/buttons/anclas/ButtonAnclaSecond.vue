<script lang="ts">
import { defineComponent } from 'vue'
import Ancla from '@/components/buttons/anclas/ancla.vue'

export default defineComponent({
	name: 'ButtonAnclaSecond',
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
    :id="id"
    clase="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
    :text="text"
    @click-button="() => $emit('click-button')"
  />
</template>
