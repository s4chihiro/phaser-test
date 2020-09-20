import Phaser from "phaser"
import logoImg from "./assets/logo.png"
import sky from "./assets/sky.png"
import ground from "./assets/ground.png"

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.image("sky", sky)
  this.load.image("logo", logoImg)
  this.load.image('ground', ground)
}

function create() {
  this.add.image(400, 300, "sky")

  var platforms = this.physics.add.staticGroup()

  platforms.create(400, 568, 'ground').setScale(2).refreshBody()

  platforms.create(600, 400, 'ground')
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
}

function update() {
  
}
