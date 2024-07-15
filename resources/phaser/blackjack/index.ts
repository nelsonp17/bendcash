import 'phaser';
import { GameScene } from './scenes/gameScene';
import {Preloader} from "./scenes/Preloader";
import {Boot} from "./scenes/Boot";
import {GameOver} from "./scenes/GameOver";
import {MainMenu} from "./scenes/MainMenu";
import {Game} from "./scenes/Game";

const config = {
	type: Phaser.AUTO,
	//width: 500,
	//height: 500,
	width: window.innerWidth,
	height: 768,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	parent: 'game-container',
	//backgroundColor: '#028af8',
	scene: [
		Boot,
		Preloader,
		GameScene,
		GameOver,
		MainMenu,
		Game
	]
};

//const game = new Phaser.Game(config);
export const StartGame = (parent) => {

	return new Phaser.Game({ ...config, parent });
}

// Used to emit events between Vue components and Phaser scenes
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Events.EventEmitter
export const EventBus = new Phaser.Events.EventEmitter();
