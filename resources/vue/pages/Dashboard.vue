<template>
	<DashboardLayaout/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DashboardLayaout from "../components/layouts/DashboardLayaout.vue";

export default defineComponent({
	name: "Dashboard",
	components: {DashboardLayaout},
	data: () => ({
	}),
	methods: {
	},
	mounted() {
	}
})
</script>
<style>
	[x-cloak] { display: none; }
</style>
