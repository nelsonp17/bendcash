import { Scene } from 'phaser';
import {CARD_ATLAS_KEY, CardFactory} from "../Factories/CardFactory";

export class Preloader extends Scene
{
	constructor ()
	{
		super('Preloader');
	}

	init ()
	{
		//  We loaded this image in our Boot Scene, so we can display it here
		let imagen = this.add.image(0, 0, 'background');
		let scaleX = this.cameras.main.width / imagen.width;
		let scaleY = this.cameras.main.height / imagen.height;
		let scale = Math.max(scaleX, scaleY);
		imagen.setScale(scale).setOrigin(0, 0);

		//A simple progress bar. This is the outline of the bar.
		this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

		//  This is the progress bar itself. It will increase in size from the left based on the % of progress.
		const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

		//  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
		this.load.on('progress', (progress) => {

			//  Update the progress bar (our bar is 464px wide, so 100% = 464px)
			bar.width = 4 + (460 * progress);

		});
	}

	preload ()
	{
		//  Load the assets for the game - Replace with your own assets
		const path = location.origin + '/img/games/blackjack'
		this.load.setPath(path);

		this.load.image('logo', 'logo.png');
		this.load.image('cardBack', 'card_back_red.png');
		this.load.image('orangeChip', 'chipOrange.png');
		this.load.image('yellowChip', 'chipYellow.png');

		this.load.image('redChip', 'chipRed.png');
		this.load.image('whiteChip', 'chipWhite.png');
		this.load.image('blueChip', 'chipBlue.png');
		//this.load.image('orangeChip', 'chipOrange.png');
		//this.load.image('yellowChip', 'chipYellow.png');
	}

	create ()
	{
		//  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
		//  For example, you can define global animations here, so we can use them in other scenes.

		//  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
		this.scene.start('Game');
	}
}
