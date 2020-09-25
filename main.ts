info.onCountdownEnd(function () {
    enemySprite = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    enemySprite.setPosition(randint(0, 160), 0)
    enemySprite.setVelocity(0, gameSpeed * 2)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
    info.startCountdown(250 / gameSpeed + 0.25)
})
info.onLifeZero(function () {
    playerSprite.destroy()
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let enemySprite: Sprite = null
let playerSprite: Sprite = null
let gameSpeed = 0
info.setLife(3)
info.setScore(0)
gameSpeed = 50
scene.setBackgroundColor(7)
scene.setBackgroundImage(img`
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff.........................................................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    ..................................................fff...........................555...........................fff...............................................
    `)
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16], TileScale.Sixteen))
playerSprite = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Player)
playerSprite.setPosition(0, 120)
playerSprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(1)
game.onUpdate(function () {
    playerSprite.setVelocity(controller.acceleration(ControllerDimension.X) * 0.5, controller.acceleration(ControllerDimension.Y))
})
game.onUpdateInterval(1000, function () {
    gameSpeed += 5
})
