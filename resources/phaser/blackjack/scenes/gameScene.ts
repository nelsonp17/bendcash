
export class GameScene extends Phaser.Scene {
	constructor ()
	{
		super('GameScene');
	}

	preload ()
	{
		this.load.setBaseURL('https://labs.phaser.io');

		this.load.image('sky', 'assets/skies/space3.png');
		this.load.image('logo', 'assets/sprites/phaser3-logo.png');
		this.load.image('red', 'assets/particles/red.png');
	}

	create ()
	{
		let imagen = this.add.image(0, 0, 'sky');
		let scaleX = this.cameras.main.width / imagen.width;
		let scaleY = this.cameras.main.height / imagen.height;
		let scale = Math.max(scaleX, scaleY);
		imagen.setScale(scale).setOrigin(0, 0);

		const particles = this.add.particles(0, 0, 'red', {
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD'
		});

		const logo = this.physics.add.image(400, 100, 'logo');

		logo.setVelocity(100, 200);
		logo.setBounce(1, 1);
		logo.setCollideWorldBounds(true);

		particles.startFollow(logo);
	}
}
