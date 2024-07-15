<template>
	<header-simple/>
	<setion-bet-one-view/>
	<section-bet-two-view/>
	<section-bet-three-view/>
	<footer-one/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeaderSimple from "../components/headers/headerSimple.vue";
import FooterOne from "../components/footers/footerOne.vue";
import SetionBetOneView from "../components/sections/setionBetOneView.vue";
import SectionBetTwoView from "../components/sections/sectionBetTwoView.vue";
import SectionBetThreeView from "../components/sections/sectionBetThreeView.vue";

export default defineComponent({
	name: "Bet",
	components: {SectionBetThreeView, SectionBetTwoView, SetionBetOneView, FooterOne, HeaderSimple}
})
</script>
