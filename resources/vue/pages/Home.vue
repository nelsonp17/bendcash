<template>
	<header-simple/>
	<section-slider-home-view/>
	<section-winner-home-view/>
	<section-banner-one-home-view/>
	<section-banner-two-home-view/>
	<footer-one/>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import HeaderMain from "../components/headers/headerMain.vue";
import HeaderSimple from "../components/headers/headerSimple.vue";
import SectionSliderHomeView from "../components/sections/sectionSliderHomeView.vue";
import SectionWinnerHomeView from "../components/sections/sectionWinnerHomeView.vue";
import SectionBannerOneHomeView from "../components/sections/sectionBannerOneHomeView.vue";
import SectionBannerTwoHomeView from "../components/sections/sectionBannerTwoHomeView.vue";
import FooterOne from "../components/footers/footerOne.vue";

export default defineComponent({
	name: 'Home',
	components: {
		FooterOne,
		SectionBannerTwoHomeView,
		SectionBannerOneHomeView,
		SectionWinnerHomeView,
		SectionSliderHomeView,
		HeaderSimple,
		HeaderMain
	},
	data: () => ({

	}),
	methods: {
	},
	computed: {
	}
})
</script>
