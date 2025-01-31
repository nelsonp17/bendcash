import {HIGH_SCORE_STORAGE, textStyle} from "../constants/constants";
import Image = Phaser.GameObjects.Image;
import Text = Phaser.GameObjects.Text;
import {TextUtility} from "../utility/TextUtility";
import {ImageUtility} from "../utility/ImagenUtility";
import Zone = Phaser.GameObjects.Zone;
import { Scene } from 'phaser';
import { money, bet } from '../constants/constants';
export class BetScene extends Scene {
	public moneyText: Text;
	public betText: Text;
	public highScoreText: Text;
	public highScore: number;
	private gameZone: Zone;
	public scale: number;
	public money: number = 5000;

	constructor() {
		super('BetScene');
	}

	create(): void {
		if(money == 0){
			this.gameOver();
		}
		else {
			this.highScore = new Number(localStorage.getItem(HIGH_SCORE_STORAGE)).valueOf();
			if (bet > money) bet = money;
			let width: number = new Number(this.scene.manager.game.config.width).valueOf();
			let height: number = new Number(this.scene.manager.game.config.height).valueOf();
			this.gameZone = this.add.zone(width * 0.5, height * 0.5, width, height);
			this.scale = this.gameZone.height / 1100;
			if (this.scale < 1) this.scale = 1;
			this.setUpTitle();
			this.setUpButtons();
			this.setUpText();
		}
	}

	private setUpTitle(): void {
		let textTitle: Text = this.add.text(0, 20, 'Place your bet', textStyle);
		Phaser.Display.Align.In.Center(textTitle, this.gameZone, 0, - (this.gameZone.height * .25))
	}

	setUpHoverButtons(image: Image): void {
		image.on('pointerover',function(){
			image.setScale(1.2 * this.scale);
		},this);
		image.on('pointerout', function(){
			image.setScale(1 * this.scale);
		},this);
	}

	private setUpText(): void{
		this.moneyText = this.add.text(0, 0, '', textStyle);
		this.betText = this.add.text(0, 0, '', textStyle);
		this.highScoreText = this.add.text(0, 0, '', textStyle);

		this.updateMoneyText();
		this.updateBetText();
		this.updateHighScoreText();
	}

	private updateMoneyText(): void{
		this.moneyText.setText('Money: $' + money);
		Phaser.Display.Align.In.TopRight(this.moneyText, this.gameZone, -20, -20);
	}

	private updateBetText(){
		this.betText.setText('Bet: $' + bet);
		Phaser.Display.Align.To.BottomLeft(this.betText, this.moneyText);
	}

	private updateHighScoreText(){
		this.highScoreText.setText('High score: $' + this.highScore);
		Phaser.Display.Align.In.TopCenter(this.highScoreText, this.gameZone);
	}


	private setUpButtons(): void{
		let whiteChip = this.add.image(200,300,'whiteChip').setScale(this.scale);
		whiteChip.setInteractive();
		whiteChip.setDataEnabled();
		whiteChip.data.set('value', 1);
		this.setUpHoverButtons(whiteChip);
		let add1 = this.add.text(175,375, '1', textStyle);

		let redChip = this.add.image(400,300, 'redChip').setScale(this.scale);
		let add25 = this.add.text(360,375, '25', textStyle);
		redChip.setInteractive();
		redChip.setDataEnabled();
		redChip.data.set('value',25);
		this.setUpHoverButtons(redChip);
		let blueChip = this.add.image(600, 300, 'blueChip').setScale(this.scale);
		blueChip.setInteractive();
		blueChip.setDataEnabled();
		blueChip.data.set('value',100);
		this.setUpHoverButtons(blueChip);
		let add100 = this.add.text(550,375, '100', textStyle);
		this.data.set('money', 1000);
		let chips: Image[] = new Array<Image>();
		chips.push(whiteChip);
		chips.push(redChip);
		chips.push(blueChip);
		let clearButton = this.add.image(0,500,'yellowChip').setScale(1.2 * this.scale);
		let clearText = this.add.text(0,575,'Clear',textStyle);
		let dealButton = this.add.image(0,500,'orangeChip').setScale(1.2 * this.scale);
		let dealText = this.add.text(0,575, 'Deal', textStyle);
		Phaser.Display.Align.In.BottomCenter(clearButton, this.gameZone, 0 ,-(40 * this.scale));
		Phaser.Display.Align.In.BottomCenter(dealButton, this.gameZone, 0 ,-(40 * this.scale));
		Phaser.Display.Align.In.Center(redChip,this.gameZone,0,0);
		Phaser.Display.Align.In.Center(blueChip,this.gameZone,0,0);
		Phaser.Display.Align.In.Center(whiteChip,this.gameZone,0,0);
		clearButton.setInteractive();
		dealButton.setInteractive();
		this.setUpHoverButtons(clearButton);
		this.setUpHoverButtons(dealButton);
		clearButton.on('pointerdown',function(){
			this.bet = 0;
			this.updateBetText();
		},this);
		dealButton.on('pointerdown', function(){
			this.scene.start('MainScene');
		}, this);
		let buttons: Image[] = new Array<Image>();
		buttons.push(clearButton);
		buttons.push(dealButton);
		ImageUtility.spaceOutImagesEvenlyHorizontally(buttons, this.scene);
		ImageUtility.spaceOutImagesEvenlyHorizontally(chips, this.scene);
		Phaser.Display.Align.In.Center(add1,whiteChip);
		Phaser.Display.Align.In.Center(add25, redChip);
		Phaser.Display.Align.In.Center(add100, blueChip);
		Phaser.Display.Align.In.Center(clearText, clearButton);
		Phaser.Display.Align.In.Center(dealText, dealButton);
		this.setUpBetButtonHandlers(chips);
	}

	private setUpBetButtonHandlers(buttons: Image[]){
		buttons.forEach(button => {
			button.on('pointerdown', function(event){
				this.addChip(button.data.get('value'));
			},this);
		},this);
	}

	private addChip(value: number){
		bet += value;
		if(bet > money) bet = money;
		this.updateBetText();
	}

	private gameOver() {
		let graphics = this.add.graphics({fillStyle: {color: 0x000000, alpha: 0.75}});
		let square = new Phaser.Geom.Rectangle(0, 0, new Number(this.scene.manager.game.config.width).valueOf(),
			new Number(this.scene.manager.game.config.height).valueOf());
		graphics.fillRectShape(square);
		let resultText: Text = this.add.text(0, 0, 'You\'re Broke! Here\'s another grand on the house.', textStyle);
		resultText.setColor("#ffde3d");
		Phaser.Display.Align.In.Center(resultText, this.gameZone);
		this.input.once('pointerdown', function (event){
			this.input.once('pointerup', function (event){
				this.money = 1000;
				this.bet = 0;
				this.scene.restart();
			},this);
		},this);
	}
}
