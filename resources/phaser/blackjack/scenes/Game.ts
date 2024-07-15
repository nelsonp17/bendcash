import { EventBus } from '../index';
import { Scene } from 'phaser';
import {CARD_ATLAS_KEY, CARD_HEIGHT, CARD_WIDTH, CardFactory} from "../Factories/cardFactory";
import {Deck} from "../models/deck";
import {Hand} from "../models/hand";
import {GUTTER_SIZE, HIGH_SCORE_STORAGE, textStyle, GameResult, money, bet} from "../constants/constants";
import {BetScene} from "./BetScene";
//import {GameResult} from "../models/gameResult";
import Text = Phaser.GameObjects.Text;
import Texture = Phaser.Textures.Texture;
import Image = Phaser.GameObjects.Image;
import Zone = Phaser.GameObjects.Zone;
export class Game extends Scene
{
	private dealerHand: Hand;
	private playerHand: Hand;
	private deck: Deck;
	private atlasTexture: Texture;
	private CARD_MARGIN = 10;
	private dealerScoreText: Text;
	private playerScoreText: Text;
	private textHit: Text;
	private textStay: Text;
	private moneyText: Text;
	private cardImages: Image[];
	private betScene;
	private gameZone: Zone;
	private stayButton: Image;
	private hitButton: Image;
	private playerHandZone: Zone;
	private dealerHandZone: Zone;
	private faceDownImage: Image;
	private CARD_FLIP_TIME = 600;
	constructor ()
	{
		super('Game');
	}
	preload(){
		const path = location.origin + '/img/games/blackjack'
		//this.load.setPath(path);
		let cardFactory: CardFactory = new CardFactory(this, `${path}/playingCards.png`, `${path}/playingCards.xml`);

		this.atlasTexture = this.textures.get(CARD_ATLAS_KEY);
		this.betScene = this.scene.get('BetScene');
	}

	create ()
	{
		this.betScene = this.scene.get('BetScene');
		console.log( `Escena ${this.betScene}` )
		let imagen = this.add.image(0, 0, 'background');
		let scaleX = this.cameras.main.width / imagen.width;
		let scaleY = this.cameras.main.height / imagen.height;
		let scale = Math.max(scaleX, scaleY);
		imagen.setScale(scale).setOrigin(0, 0);

		EventBus.emit('current-scene-ready', this);

		// reset
		//money = 1000
		//bet = 0


		// game
		let width: number = new Number(this.scene.manager.game.config.width).valueOf();
		let height: number = new Number(this.scene.manager.game.config.height).valueOf();
		this.gameZone = this.add.zone(width * 0.5, height * 0.5, width, height);
		this.setUpMoneyText();
		this.setUpNewGame();

		this.playerHandZone = this.add.zone(0,0, CARD_WIDTH, CARD_HEIGHT);
		Phaser.Display.Align.To.TopLeft(this.playerHandZone, this.playerScoreText,0,GUTTER_SIZE);
		this.dealerHandZone = this.add.zone(0,0, CARD_WIDTH, CARD_HEIGHT);
		Phaser.Display.Align.To.BottomLeft(this.dealerHandZone,this.dealerScoreText,0,GUTTER_SIZE);
		this.dealInitialCards();
	}

	changeScene ()
	{
		this.scene.start('GameOver');
	}

	private dealInitialCards(){
		setTimeout(this.handOutCard.bind(this),1, this.playerHand, false);
		setTimeout(this.handOutCard.bind(this),500, this.dealerHand, false);
		setTimeout(this.handOutCard.bind(this),1000, this.playerHand, false);
		setTimeout(this.handOutCard.bind(this),1500, this.dealerHand, true);
		setTimeout(this.checkForBlackJack.bind(this), 1500);
	}

	private checkForBlackJack(){
		if(this.playerHand.getBlackjackScore() === 21){
			this.endHand(GameResult.BLACKJACK);
		}
	}

	private createCardTween(image: Image, x: number, y: number, duration: number = 500) {
		this.tweens.add({
			targets: image,
			x: x,
			y: y,
			duration: duration,
			ease: 'Linear'
		});
	}

	private flipOverCard(cardBack: Image, cardFront: Image){
		this.tweens.add({
			targets:cardBack,
			scaleX: 0,
			duration: this.CARD_FLIP_TIME /2,
			ease: 'Linear'
		});
		this.tweens.add({
			targets: cardFront,
			scaleX: 1,
			duration: this.CARD_FLIP_TIME /2,
			delay: this.CARD_FLIP_TIME /2,
			ease: 'Linear'
		});
	}

	private setUpMoneyText(): void{
		this.moneyText = this.add.text(0, 0, '', textStyle);
		let betText: Text = this.add.text(0, 0, '', textStyle);

		this.updateMoneyText();
		this.updateBetText(betText);
	}

	private updateMoneyText(): void{
		this.moneyText.setText('Money: $' + money);
		Phaser.Display.Align.In.TopRight(this.moneyText, this.gameZone, -20, -20);
	}

	private updateBetText(text: Text){
		text.setText('Bet: $' + bet);
		Phaser.Display.Align.To.BottomLeft(text, this.moneyText);
	}

	private setUpDealerScoreText(): void {
		this.dealerScoreText = this.add.text(0, 200, '', textStyle);
		this.setDealerScoreText();
		Phaser.Display.Align.In.TopCenter(this.dealerScoreText, this.gameZone,0 ,-20);
	}

	private setUpPlayerScoreText(): void {
		this.playerScoreText = this.add.text(0, 300, '', textStyle);
		this.setPlayerScoreText();
		Phaser.Display.Align.In.BottomCenter(this.playerScoreText, this.gameZone, 0, -20);
	}

	private setUpHitButton(): void{
		this.hitButton = this.add.image(this.gameZone.width*0.33,this.gameZone.height * 0.5,
			'yellowChip').setScale(1.2 * this.betScene.scale);
		this.textHit = this.add.text(this.gameZone.width*0.33, this.gameZone.height * 0.5, 'Hit', textStyle);
		Phaser.Display.Align.In.Center(this.textHit, this.hitButton);
		this.hitButton.setInteractive();
		this.setUpHoverStyles(this.hitButton);
		this.setUpClickHandler(this.hitButton, this.handleHit);
	}

	private setUpStayButton(): void {
		this.stayButton = this.add.image(this.gameZone.width*0.66,this.gameZone.height * 0.5,
			'orangeChip').setScale(1.2 * this.betScene.scale);
		this.textStay = this.add.text(this.gameZone.width*0.66, this.gameZone.height * 0.5, 'Stay', textStyle);
		Phaser.Display.Align.In.Center(this.textStay, this.stayButton);
		this.stayButton.setInteractive();
		this.setUpHoverStyles(this.stayButton);
		this.setUpClickHandler(this.stayButton, this.handleStay);
	}

	private setUpHoverStyles(image: Image){
		image.on('pointerover', function () {
			image.setScale(1.4 * this.betScene.scale);
		},this);
		image.on('pointerout', function () {
			image.setScale(1 * this.betScene.scale);
		},this);
	}

	private setUpNewGame(){
		this.deck = new Deck();
		this.dealerHand =  new Hand();
		this.playerHand= new Hand();
		this.setUpHitButton();
		this.setUpStayButton();
		this.setUpDealerScoreText();
		this.setUpPlayerScoreText();
	}

	private setUpClickHandler(image: Image, handlerFunction: Function){
		let mainScene: Game = this;
		image.on('pointerdown', function () {
			handlerFunction(mainScene);
		});
	}

	private handleHit(mainScene: Game): void{
		mainScene.handOutCard(mainScene.playerHand, false);
		mainScene.setPlayerScoreText();
		if(mainScene.playerHand.getBlackjackScore() > 21) {
			mainScene.textHit.destroy();
			mainScene.textStay.destroy();
			mainScene.endHand(GameResult.BUST);
		}
	}

	private handleStay(mainScene: Game): void {
		mainScene.textStay.destroy();
		mainScene.textHit.destroy();
		mainScene.handleFlipOver(mainScene);
		setTimeout(mainScene.drawCardsUntil17,mainScene.CARD_FLIP_TIME,mainScene)
	}

	private drawCardsUntil17(mainScene: Game) {
		let dealerScore: number = mainScene.dealerHand.getBlackjackScore();
		let playerScore: number = mainScene.playerHand.getBlackjackScore();
		let result: GameResult = null;
		if (dealerScore < 17) {
			mainScene.handOutCard(mainScene.dealerHand, false)
			setTimeout(mainScene.drawCardsUntil17,500, mainScene);
			return;
		}
		result = mainScene.deriveGameResult(dealerScore, playerScore, result);
		setTimeout(mainScene.endHand.bind(mainScene), 500, result);
	}


	private deriveGameResult(dealerScore: number, playerScore: number, result: GameResult) {
		if (dealerScore > 21 || (playerScore < 22 && playerScore > dealerScore)) {
			result = GameResult.WIN;
		}
		else if (dealerScore === playerScore) {
			result = GameResult.PUSH;
		}
		else {
			result = GameResult.LOSS;
		}
		return result;
	}

	private handleFlipOver(mainScene: Game) {
		mainScene.dealerHand.getCards().forEach(card => {
			if (card.getFaceDown()) {
				card.setFaceDown(false);
				let cardFront = mainScene.add.image(mainScene.faceDownImage.x, mainScene.faceDownImage.y, CARD_ATLAS_KEY, card.getAtlasFrame());
				cardFront.setScale(0, 1);
				mainScene.flipOverCard(mainScene.faceDownImage, cardFront);
			}
		});
		mainScene.setDealerScoreText();
	}

	private handOutCard(hand: Hand, faceDownCard: boolean){
		let card = this.deck.drawCard();
		let cardImage: Image;
		if(!faceDownCard){
			hand.receiveCard(card);
			cardImage = this.add.image(0, 0, CARD_ATLAS_KEY, card.getAtlasFrame());
		}
		else {
			hand.receiveCardFaceDown(card);
			cardImage = this.add.image(0, 0, 'cardBack');
			this.faceDownImage = cardImage;
		}
		let xOffset = (hand.getCards().length-1) * 50;
		if(hand === this.playerHand){
			this.createCardTween(cardImage, this.playerHandZone.x + xOffset, this.playerHandZone.y);
			this.setPlayerScoreText()
		}
		else{
			this.createCardTween(cardImage, this.dealerHandZone.x + xOffset, this.dealerHandZone.y,350);
			this.setDealerScoreText();
		}
	}

	private setDealerScoreText() {
		this.dealerScoreText.setText("Dealer Score: " + this.dealerHand.getBlackjackScore());
	}

	private setPlayerScoreText() {
		this.playerScoreText.setText("Your Score: " + this.playerHand.getBlackjackScore());
	}

	private endHand(result: GameResult) {
		this.payout(result);
		let graphics = this.add.graphics({fillStyle: {color: 0x000000, alpha: 0.75}});
		let square = new Phaser.Geom.Rectangle(0, 0, new Number(this.scene.manager.game.config.width).valueOf(),
			new Number(this.scene.manager.game.config.height).valueOf());
		graphics.fillRectShape(square);
		let resultText: Text = this.add.text(0, 0, <string> result, textStyle);
		resultText.setColor("#ffde3d");
		//resultText.setStroke("#000000", 5);
		//resultText.setFontSize(60);
		Phaser.Display.Align.In.Center(resultText, this.gameZone);
		this.input.once('pointerdown', function (event){
			this.input.once('pointerup', function (event){
				this.scene.start('BetScene');
			},this);
		},this);

	}

	private payout(result: GameResult){
		if(result === GameResult.WIN){
			this.betScene.money += (this.betScene.bet);
		}
		else if(result === GameResult.BLACKJACK){
			this.betScene.money += Math.floor(this.betScene.bet * 1.5);
		}
		else{
			this.betScene.money -= this.betScene.bet;
		}
		this.updateMoneyText();
		let highScore = localStorage.getItem(HIGH_SCORE_STORAGE);
		if(!highScore || (this.betScene.money > new Number(highScore).valueOf()) ){
			localStorage.setItem(HIGH_SCORE_STORAGE, new String(this.betScene.money).valueOf());
		}
	}
}
