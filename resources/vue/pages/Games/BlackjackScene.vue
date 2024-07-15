<template>
	<div ref="game" id="game-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import {StartGame, EventBus} from '../../../phaser/blackjack';

// Save the current scene instance
const scene = ref();
const game = ref();

const emit = defineEmits(['current-active-scene']);

onMounted(() => {

	game.value = StartGame('game-container');

	EventBus.on('current-scene-ready', (currentScene) => {

		emit('current-active-scene', currentScene);

		scene.value = currentScene;

	});

});

onUnmounted(() => {

	if (game.value)
	{
		game.value.destroy(true);
		game.value = null;
	}

});

defineExpose({ scene, game });

</script>
