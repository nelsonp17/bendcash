export const textStyle = {
	font: "normal 48px Impact",
	fill: '#FFFFFF',
	stroke: '#000000',
	strokeThickness: 5
};

export const HIGH_SCORE_STORAGE = "highscore";

export const CARD_WIDTH = 140;
export const CARD_HEIGHT = 190;

export const GUTTER_SIZE = 20;

export enum GameResult {
	WIN = "WIN",
	LOSS = "LOSS",
	PUSH = "PUSH",
	BLACKJACK = "BLACKJACK",
	BUST = "BUST"
}

export let money:number = 1000;
export let bet:number = 0;
