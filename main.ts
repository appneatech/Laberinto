scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.over(true)
    info.startCountdown(10)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 4 4 4 . . . . . . . 
    . . . . . . 4 f 4 4 . . . . . . 
    . . . . . . 4 4 f f . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . 4 4 4 2 8 2 8 2 4 4 . . . . 
    . . 4 . . 2 8 2 8 2 . 4 . . . . 
    . . . . . 2 8 2 8 2 . . . . . . 
    . . . . . 2 8 2 8 2 . . . . . . 
    . . . . e . 8 8 8 . e . . . . . 
    . . . . e 8 8 . 8 8 e . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`100010000201010406060606060606060606060502010100060606060606060606000005020202000e0e0e070f120d080c00000502020200000f100700000008000000050202010000001007000000080000000502020200000000000000000000001305020202000f00000000000000000005050202020002020202140000000a0a0a0501010100010101021400000000000f050b0f01000101010214000000000000050b1401010101010215000000110000050b150000000a050000000000070000050b070000000a050000000000090000050b0000000000000000000000090000050b000000000000000007150009000e0501010101010101010101010101030101`, img`
    . 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 . 2 2 2 2 2 2 2 2 2 . . 2 
    . . 2 . . . . 2 . . . 2 . . . 2 
    . . 2 . . . . 2 . . . 2 . . . 2 
    . . 2 . . . . 2 . . . 2 . . . 2 
    . . 2 . . . . . . . . . . . . 2 
    . . 2 . . . . . . . . . . . 2 2 
    2 2 2 . 2 2 2 2 . . . . 2 2 2 2 
    2 . 2 . 2 . . 2 . . . . . . . 2 
    2 . 2 . 2 . . 2 . . . . . . . 2 
    2 . 2 2 2 . 2 2 . . . . 2 . . 2 
    2 . . . . . 2 . . . . . 2 . . 2 
    2 . . . . . 2 . . . . . 2 . . 2 
    2 . . . . . . . . . . . 2 . . 2 
    2 . . . . . . . . 2 . . 2 . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.builtin.forestTiles8,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles20,sprites.builtin.forestTiles25,sprites.builtin.forestTiles12,sprites.builtin.forestTiles23,sprites.builtin.forestTiles28,sprites.builtin.forestTiles24,sprites.builtin.forestTiles27,sprites.builtin.forestTiles19,sprites.builtin.forestTiles29,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles4,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
scene.cameraFollowSprite(mySprite)
