namespace SpriteKind {
    export const human = SpriteKind.create()
    export const dotek = SpriteKind.create()
    export const human1 = SpriteKind.create()
    export const card = SpriteKind.create()
    export const human2 = SpriteKind.create()
    export const SCP = SpriteKind.create()
    export const dr = SpriteKind.create()
    export const dr2 = SpriteKind.create()
    export const dr3 = SpriteKind.create()
    export const human3 = SpriteKind.create()
    export const gate = SpriteKind.create()
    export const Oblek = SpriteKind.create()
    export const Dead1 = SpriteKind.create()
    export const Dead2 = SpriteKind.create()
    export const anonim = SpriteKind.create()
    export const Misto = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.human3, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("Strážný: Hej.. Tady nemáš co dělat, vypadni nebo tě vyvedu vlastnoručně...", DialogLayout.Top)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.human, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("Vězeň: Jídlo je tu fakt strašný...", DialogLayout.Top)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.dr2, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("Vědec: Nenávidim tohle papírování, kdo by řekl že výskuM nadpřirozených anomálií může být taková nuda...", DialogLayout.Top)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 0)
    pause(100)
    projectile.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.human1, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("Strážný: Do téhle místnosti teď nesmíš...", DialogLayout.Top)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.card, function (sprite, otherSprite) {
    sprite.destroy()
    cart.destroy()
    game.showLongText("\"TEĎ MÁŠ KARTU\"", DialogLayout.Top)
    moznost = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.human2, function (sprite, otherSprite) {
    sprite.destroy()
    if (moznost == 1) {
        mySprite.y = 355
        mySprite.x = 248
        game.showLongText("Strážný: OK. Tak jdi. setkej se s doktorem Wilsnem ve výzkumné místnosti 173.", DialogLayout.Top)
    } else {
        game.showLongText("Strážný: Vezmi si prověrkovou kartu, bez ní tě nepustím dál...", DialogLayout.Top)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Misto, function (sprite, otherSprite) {
    KONEC = 2
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Oblek, function (sprite, otherSprite) {
    if (moznost == 1) {
        sprite.destroy()
        game.showLongText("\"OBLÉKL JSIS OBLEK\"", DialogLayout.Top)
        cloths = 1
    }
    if (moznost == 0) {
        sprite.destroy()
        game.showLongText("Ty: Nejdřív musím za doktorem Wilsnem...", DialogLayout.Top)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gate, function (sprite, otherSprite) {
    mySprite.y = 780
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.dr, function (sprite, otherSprite) {
    sprite.destroy()
    if (cloths == 0) {
        game.showLongText("dr. Wilson: Aá... ty už jsi tady. Výborně, můžeme teda začít...", DialogLayout.Top)
        game.showLongText("Dnes budem testovat SCP-173. A bude to poměrně nebezpečné.", DialogLayout.Top)
        game.showLongText("Tahle entita zabije vše co jen potká, ale může se pohybovat jen když není vydět.", DialogLayout.Top)
        game.showLongText("z toho důvodu si radši dojdi pro ochranný oblek.", DialogLayout.Top)
        moznost = 1
    } else {
        game.showLongText("dr. Wilson: Výborně, vše je připraveno můžeme začít.", DialogLayout.Top)
        game.showLongText("vyšleme tě tam ještě s jedním pokusným subjektem a doktorem Conorem.", DialogLayout.Top)
        game.showLongText("Doktor Conor bude provádět výzkum, a vy mu budete pomáhat až vám řekne.", DialogLayout.Top)
        game.showLongText("jeden z vás hlavně musí, pořád koukat na SCP-173 aby se nemohlo nehýbat.", DialogLayout.Top)
        game.showLongText("Dobře, tak jít na to!!!", DialogLayout.Top)
        KONEC = 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.dr3, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("Vědec: Vezmi si oblek nebo opusť tuhle místnost...", DialogLayout.Top)
})
let tma: Sprite = null
let pohyb = 0
let KONEC = 0
let moznost = 0
let projectile: Sprite = null
let cart: Sprite = null
let cloths = 0
let mySprite: Sprite = null
game.showLongText("SCP: ÚTĚK", DialogLayout.Full)
game.showLongText("Nacházíš se v Laboratořích kde tajná nadace SCP testuje nebezpečné subjekty. ", DialogLayout.Full)

mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . d d 5 5 5 . . . . . . 
    . . . . . d 6 d d 5 . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 f f 4 4 4 . . . . 
    . . . . d d 4 f f 4 d d . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
cloths = 0
controller.moveSprite(mySprite, 70, 70)
let Gate = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffff
    ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
    ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
    ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
    ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
    ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
    ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
    ffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.gate)
Gate.y = 800
Gate.x = 760
let SCP2 = sprites.create(img`
    . . . . . d d d . . . . . . . . 
    . . . . d 7 d 7 d . . . . . . . 
    . . . . d 2 e 2 d . . . . . . . 
    . . . . d 9 e 9 d . . . . . . . 
    . . . . d 2 2 2 . . . . . . . . 
    . . . . . d 2 d d . . . . . . . 
    . . . . d d d d d d d 1 d . . . 
    . . . . d 1 d d d . . . . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d d d d . . . . . . . 
    . . . . d d d d 1 . . . . . . . 
    . . . . d d d d d . . . . . . . 
    . . . . . d . . d . . . . . . . 
    . . . . . d . . d . . . . . . . 
    . . . . . d . . d . . . . . . . 
    . . . . . 1 . . 1 . . . . . . . 
    `, SpriteKind.SCP)
SCP2.y = 857
SCP2.x = 705
let dead1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d d d d . . . . 
    . . . . . . d 9 9 9 d d . . . . 
    . . . . . . d 9 9 9 d d . . . . 
    . . . . . . d d d d d d . . . . 
    . . . . d d d d d d d d d d . . 
    . . . . d d d f 1 f 1 d d d . . 
    . . . . d d d 4 1 d 1 d d d . . 
    . . . . d d d d 1 d 1 d d d . . 
    . . . . e e d d 1 d 1 d e e . . 
    . . . . . . d d d d d d . . . . 
    . . . . . . d d . . d d . . . . 
    . . . . . . d d . . d d . . . . 
    . . . . . . e e . . e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Dead1)
dead1.y = 840
dead1.x = 790
let dead2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d d d d . . . . 
    . . . . . . d 9 9 9 d d . . . . 
    . . . . . . d 9 9 9 d d . . . . 
    . . . . . . d d d d d d . . . . 
    . . . . d d d d d d d d d d . . 
    . . . . d d d f 1 f 1 d d d . . 
    . . . . d d d 4 1 d 1 d d d . . 
    . . . . d d d d 1 d 1 d d d . . 
    . . . . e e d d 1 d 1 d e e . . 
    . . . . . . d d d d d d . . . . 
    . . . . . . d d . . d d . . . . 
    . . . . . . d d . . d d . . . . 
    . . . . . . e e . . e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Dead2)
dead2.y = 868
dead2.x = 780
let misto = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Misto)
misto.y = 830
misto.x = 770
let _1 = sprites.create(img`
    . . . . . . f f f f f . . . . . 
    . . . . . . f f 6 6 6 . . . . . 
    . . . . . . f f f 6 6 . . . . . 
    . . . . . . d 1 1 1 d . . . . . 
    . . . . . d f f f f f . . . . . 
    . . . . f d f c c c f d . . . . 
    . . . f f 1 f c f f f 1 f f . . 
    . . . f f . f f f f f . f f . . 
    . . . f f . f f f f f . f f . . 
    . . . d 1 . 1 1 d 1 1 . 1 1 . . 
    . . . . . . f f f f f . e e f . 
    . . . . . . f f . f f . . f f . 
    . . . . . f f f . f f . . . f . 
    . . . . . 1 d . . 1 1 . . . f . 
    . . . . . 1 d . . 1 d . . . . . 
    . . . . . f f f . f f f . . . . 
    `, SpriteKind.anonim)
_1.y = 250
_1.x = 103
let _2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . d 4 4 . . . . . . 
    . f 4 4 4 . . d 4 4 . . . . . . 
    . f 4 4 4 4 4 4 4 4 . d d e . . 
    . . . . 4 4 4 f f 4 4 d d e . . 
    . f 4 4 4 4 4 f f 4 4 d d e e . 
    . f 4 4 4 4 4 4 4 4 4 d e e e . 
    . . . . . . . d 4 4 . . e e . . 
    . . . . . . . d 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.anonim)
_2.y = 327
_2.x = 337
cart = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 7 7 7 d d d 7 . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . . 7 7 7 7 7 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.card)
cart.y = 102
cart.x = 250
let _3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . d d 5 5 d . . . . 
    . . . . . . . d 5 d d d . . . . 
    . . . . . . . 5 d d 9 d . . . . 
    . . . . . . . d d d d d . . . . 
    . . . . . . . 1 1 d 1 . . . . . 
    . . . . . . 1 1 1 e 1 1 . . . . 
    . . . . . . 1 1 1 e 1 1 . . . . 
    . . . . . . 1 1 1 e 1 1 . . . . 
    . . . . . . d 1 1 e 1 d . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 6 . 6 . . . . . 
    . . . . . . . . 6 . 6 . . . . . 
    . . . . . . . . 6 . 6 . . . . . 
    . . . . . . . e e . e e . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.anonim)
_3.y = 730
_3.x = 795
let _4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . e e e e e . . . . . . . . 
    . . . e e d e e e . . . . . . . 
    . . . e d 9 d e e . . . . . . . 
    . . . . d d d d . . . . . . . . 
    . . . . . 1 d 1 1 . . . . . . . 
    . . . . 1 1 e 1 1 1 . . . . . . 
    . . . . 1 1 e 1 1 1 . . . . . . 
    . . . . 1 1 e 1 1 1 . . . . . . 
    . . . . d 1 e 1 1 d . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 6 . 6 1 . . . . . . . 
    . . . . . 6 . 6 . . . . . . . . 
    . . . . . 6 . 6 . . . . . . . . 
    . . . . e e . e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.anonim)
_4.y = 550
_4.x = 280
let _5 = sprites.create(img`
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . . d d d d 5 5 . . . . . . 
    . . . . d 9 d d d . . . . . . . 
    . . . . d d d d . . . . . . . . 
    . . . . . 1 d 1 1 . . . . . . . 
    . . . . 1 1 e 7 1 1 . . . . . . 
    . . . . 1 1 e 7 1 1 . . . . . . 
    . . . . 1 1 e 1 1 1 . . . . . . 
    . . . . d 1 e 1 1 d . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 6 . 6 1 . . . . . . . 
    . . . . . 6 . 6 . . . . . . . . 
    . . . . . 6 . 6 . . . . . . . . 
    . . . . e e . e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.anonim)
_5.y = 600
_5.x = 820
_5.setKind(SpriteKind.dr3)
let _6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 5 5 5 5 . . . 
    . . . . . . . 5 5 5 d d . . . . 
    . . . . . . . 5 5 d 9 d . . . . 
    . . . . . . . . d d d d . . . . 
    . . . . . . . 1 1 d 1 . . . . . 
    . . . . . . 1 1 7 e 1 1 . . . . 
    . . . . . . 1 1 7 e 1 1 . . . . 
    . . . . . . 1 1 1 e 1 1 . . . . 
    . . . . . . d 1 1 e 1 d . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 6 . 6 . . . . . 
    . . . . . . . . 6 . 6 . . . . . 
    . . . . . . . . 6 . 6 . . . . . 
    . . . . . . . e e . e e . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.anonim)
_6.y = 725
_6.x = 200
_6.setKind(SpriteKind.dr2)
let _7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . d d 9 9 9 d . . . . . . 
    . . . . d d 9 9 9 d . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d 1 f 1 f d d d . . . . 
    . . d d d 1 d 1 4 d d d . . . . 
    . . d d d 1 d 1 d d d d . . . . 
    . . e e d 1 d 1 d d e e . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . d d . . d d . . . . . . 
    . . . . d d . . d d . . . . . . 
    . . . . e e . . e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.anonim)
_7.y = 532
_7.x = 778
let _8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . d d 9 9 9 d . . . . . . 
    . . . . d d 9 9 9 d . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . d d d d d d d d d d . . . . 
    . . d d d 1 f 1 f d d d . . . . 
    . . d d d 1 d 1 4 d d d . . . . 
    . . d d d 1 d 1 d d d d . . . . 
    . . e e d 1 d 1 d d e e . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . d d . . d d . . . . . . 
    . . . . d d . . d d . . . . . . 
    . . . . e e . . e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.anonim)
_8.y = 532
_8.x = 810
_8.setKind(SpriteKind.Oblek)
let _9 = sprites.create(img`
    . . . . . . f f f f f . . . . . 
    . . . . . . f f 6 6 6 . . . . . 
    . . . . . . f f f 6 6 . . . . . 
    . . . . . . d 1 1 1 d . . . . . 
    . . . . . d f f f f f . . . . . 
    . . . . f d f c c c f d . . . . 
    . . . f f 1 f c f f f 1 f f . . 
    . . . f f . f f f f f . f f . . 
    . . . f f . f f f f f . f f . . 
    . . . d 1 . 1 1 d 1 1 . 1 1 . . 
    . . . . . . f f f f f . e e f . 
    . . . . . . f f . f f . . f f . 
    . . . . . f f f . f f . . . f . 
    . . . . . 1 d . . 1 1 . . . f . 
    . . . . . 1 d . . 1 d . . . . . 
    . . . . . f f f . f f f . . . . 
    `, SpriteKind.anonim)
_9.y = 730
_9.x = 670
let _10 = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . . 6 6 6 f f . . . . . . 
    . . . . . 6 6 f f f . . . . . . 
    . . . . . d 1 1 1 d . . . . . . 
    . . . . . f f f f f d . . . . . 
    . . . . d f c c c f d f . . . . 
    . . f f 1 f f f c f 1 f f . . . 
    . . f f . f f f f f . f f . . . 
    . . f f . f f f f f . f f . . . 
    . . 1 1 . 1 1 d 1 1 . 1 d . . . 
    . f e e . f f f f f . . . . . . 
    . f f . . f f . f f . . . . . . 
    . f . . . f f . f f f . . . . . 
    . f . . . 1 1 . . d 1 . . . . . 
    . . . . . d 1 . . d 1 . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.anonim)
_10.y = 755
_10.x = 830
let _11 = sprites.create(img`
    . . . . . . f f f f f . . . . . 
    . . . . . . f f 6 6 6 . . . . . 
    . . . . . . f f f 6 6 . . . . . 
    . . . . . . d 1 1 1 d . . . . . 
    . . . . . d f f f f f . . . . . 
    . . . . f d f 7 7 c f d . . . . 
    . . . f f 1 f c f f f 1 f f . . 
    . . . f f . f f f f f . f f . . 
    . . . f f . f f f f f . f f . . 
    . . . d 1 . 1 1 d 1 1 . 1 1 . . 
    . . . . . . f f f f f . e e f . 
    . . . . . . f f . f f . . f f . 
    . . . . . f f f . f f . . . f . 
    . . . . . 1 d . . 1 1 . . . f . 
    . . . . . 1 d . . 1 d . . . . . 
    . . . . . f f f . f f f . . . . 
    `, SpriteKind.anonim)
_11.y = 430
_11.x = 550
_11.setKind(SpriteKind.human3)
let _12 = sprites.create(img`
    . . . . . . f f f f f . . . . . 
    . . . . . . f f 6 6 6 . . . . . 
    . . . . . . f f f 6 6 . . . . . 
    . . . . . . d 1 1 1 d . . . . . 
    . . . . . d f f f f f . . . . . 
    . . . . f d f 7 7 c f d . . . . 
    . . . f f 1 f c f f f 1 f f . . 
    . . . f f . f f f f f . f f . . 
    . . . f f . f f f f f . f f . . 
    . . . d 1 . 1 1 d 1 1 . 1 1 . . 
    . . . . . . f f f f f . e e f . 
    . . . . . . f f . f f . . f f . 
    . . . . . f f f . f f . . . f . 
    . . . . . 1 d . . 1 1 . . . f . 
    . . . . . 1 d . . 1 d . . . . . 
    . . . . . f f f . f f f . . . . 
    `, SpriteKind.anonim)
_12.y = 329
_12.x = 248
_12.setKind(SpriteKind.human2)
let _13 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e e . . . . . . . . 
    . . . . d d d e e . . . . . . . 
    . . . . d 9 d e e . . . . . . . 
    . . . . d d d d . . . . . . . . 
    . . . . . 1 d 1 1 . . . . . . . 
    . . . . 1 1 e 7 1 1 . . . . . . 
    . . . . 1 1 e 7 1 1 . . . . . . 
    . . . . 1 1 e 1 1 1 . . . . . . 
    . . . . d 1 e 1 1 d . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 6 . 6 1 . . . . . . . 
    . . . . . 6 . 6 . . . . . . . . 
    . . . . . 6 . 6 . . . . . . . . 
    . . . . e e . e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.anonim)
_13.y = 750
_13.x = 750
_13.setKind(SpriteKind.dr)
let _14 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . e e e d d . . . . . . 
    . . . . . e e d 6 d . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 7 7 4 4 4 . 5 2 . 
    . . . . d d 4 f f 4 d d . 2 5 . 
    . . . . . . 4 4 4 4 . 1 1 1 1 1 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . . 4 4 . 4 4 . . . . . 
    . . . . . . 4 4 . 4 4 . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.anonim)
_14.y = 168
_14.x = 126
_14.setKind(SpriteKind.human)
let _15 = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . . 6 6 6 f f . . . . . . 
    . . . . . 6 6 f f f . . . . . . 
    . . . . . d 1 1 1 d . . . . . . 
    . . . . . f f f f f d . . . . . 
    . . . . d f c 7 7 f d f . . . . 
    . . f f 1 f f f c f 1 f f . . . 
    . . f f . f f f f f . f f . . . 
    . . f f . f f f f f . f f . . . 
    . . 1 1 . 1 1 d 1 1 . 1 d . . . 
    . f e e . f f f f f . . . . . . 
    . f f . . f f . f f . . . . . . 
    . f . . . f f . f f f . . . . . 
    . f . . . 1 1 . . d 1 . . . . . 
    . . . . . d 1 . . d 1 . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.anonim)
_15.y = 120
_15.x = 270
_15.setKind(SpriteKind.human1)
let Dclass = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . . d d 5 5 5 . . . . . 
    . . . . . . d 6 d d . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 f f 4 4 4 . . . . 
    . . . . d d 4 f f 4 d d . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.anonim)
Dclass.y = 230
Dclass.x = 170
game.showLongText("Rozhlas: Zaměstnanec D-1754 se okamžitě dostaví do místnosti 173.", DialogLayout.Full)
game.showLongText("Ty: Asi další testy... měl bych jít.", DialogLayout.Top)
game.showLongText("Nápověda: šipky na zemi ti ukazují kam máš jít", DialogLayout.Top)
game.showLongText("Nápověda: s osobami a předměty co na sobě mají zelenou barvu můžeš interagovat pomocí A ", DialogLayout.Top)
forever(function () {
    if (cloths == 0) {
        if (mySprite.vx > 0) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 5 5 . . . . . 
                . . . . . . 5 5 5 d d . . . . . 
                . . . . . . 5 d d 6 d . . . . . 
                . . . . . . . d d d d . . . . . 
                . . . . . . . 4 4 4 . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 f f 4 4 4 . . . . 
                . . . . d d 4 f f 4 d d . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 . f f . . . . . 
                . . . . . . f f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 5 5 . . . . . 
                . . . . . . 5 5 5 d d . . . . . 
                . . . . . . 5 d d 6 d . . . . . 
                . . . . . . . d d d d . . . . . 
                . . . . . . . 4 4 4 . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 f f 4 4 4 . . . . 
                . . . . d d 4 f f 4 d d . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 4 4 . . . . . 
                . . . . . . f f . 4 4 . . . . . 
                . . . . . . . . . f f . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            pohyb = 1
        }
        if (mySprite.vx < 0) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 . . . . . . . 
                . . . . . d d 5 5 5 . . . . . . 
                . . . . . d 6 d d 5 . . . . . . 
                . . . . . d d d d . . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 f f 4 4 4 . . . . 
                . . . . d d 4 f f 4 d d . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . f f . 4 4 . . . . . . 
                . . . . . . . . f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 . . . . . . . 
                . . . . . d d 5 5 5 . . . . . . 
                . . . . . d 6 d d 5 . . . . . . 
                . . . . . d d d d . . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 f f 4 4 4 . . . . 
                . . . . d d 4 f f 4 d d . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . 4 4 . f f . . . . . . 
                . . . . . f f . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            pohyb = -1
        }
        if (mySprite.vy != 0 && pohyb < 0) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 . . . . . . . 
                . . . . . d d 5 5 5 . . . . . . 
                . . . . . d 6 d d 5 . . . . . . 
                . . . . . d d d d . . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 f f 4 4 4 . . . . 
                . . . . d d 4 f f 4 d d . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . f f . 4 4 . . . . . . 
                . . . . . . . . f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 . . . . . . . 
                . . . . . d d 5 5 5 . . . . . . 
                . . . . . d 6 d d 5 . . . . . . 
                . . . . . d d d d . . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 f f 4 4 4 . . . . 
                . . . . d d 4 f f 4 d d . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . 4 4 . f f . . . . . . 
                . . . . . f f . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
        }
        if (mySprite.vy != 0 && pohyb > 0) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 5 5 . . . . . 
                . . . . . . 5 5 5 d d . . . . . 
                . . . . . . 5 d d 6 d . . . . . 
                . . . . . . . d d d d . . . . . 
                . . . . . . . 4 4 4 . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 f f 4 4 4 . . . . 
                . . . . d d 4 f f 4 d d . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 . f f . . . . . 
                . . . . . . f f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 5 5 . . . . . 
                . . . . . . 5 5 5 d d . . . . . 
                . . . . . . 5 d d 6 d . . . . . 
                . . . . . . . d d d d . . . . . 
                . . . . . . . 4 4 4 . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 f f 4 4 4 . . . . 
                . . . . d d 4 f f 4 d d . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 4 4 . . . . . 
                . . . . . . f f . 4 4 . . . . . 
                . . . . . . . . . f f . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
        }
        if (mySprite.vy == 0 && (mySprite.x == 0 && pohyb > 0)) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 5 5 . . . . . 
                . . . . . . 5 5 5 d d . . . . . 
                . . . . . . 5 d d 6 d . . . . . 
                . . . . . . . d d d d . . . . . 
                . . . . . . . 4 4 4 . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 f f 4 4 4 . . . . 
                . . . . d d 4 f f 4 d d . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 . 4 4 . . . . . 
                . . . . . . f f . f f . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (mySprite.vy == 0 && (mySprite.x == 0 && pohyb < 0)) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 . . . . . . . 
                . . . . . d d 5 5 5 . . . . . . 
                . . . . . d 6 d d 5 . . . . . . 
                . . . . . d d d d . . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 f f 4 4 4 . . . . 
                . . . . d d 4 f f 4 d d . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . 4 4 . 4 4 . . . . . . 
                . . . . . f f . f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
    if (cloths == 1) {
        if (mySprite.vx > 0) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . d d d d d d . . . . . . 
                . . . . d d 9 9 9 d . . . . . . 
                . . . . d d 9 9 9 d . . . . . . 
                . . . . d d d d d d . . . . . . 
                . . d d d d d d d d d d . . . . 
                . . d d d 1 f 1 f d d d . . . . 
                . . d d d 1 d 1 4 d d d . . . . 
                . . d d d 1 d 1 d d d d . . . . 
                . . e e d 1 d 1 d d e e . . . . 
                . . . . d d d d d d . . . . . . 
                . . . . d d . . d d . . . . . . 
                . . . . d d . . e e . . . . . . 
                . . . . e e . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . d d d d d d . . . . . . 
                . . . . d d 9 9 9 d . . . . . . 
                . . . . d d 9 9 9 d . . . . . . 
                . . . . d d d d d d . . . . . . 
                . . d d d d d d d d d d . . . . 
                . . d d d 1 f 1 f d d d . . . . 
                . . d d d 1 d 1 4 d d d . . . . 
                . . d d d 1 d 1 d d d d . . . . 
                . . e e d 1 d 1 d d e e . . . . 
                . . . . d d d d d d . . . . . . 
                . . . . d d . . d d . . . . . . 
                . . . . e e . . d d . . . . . . 
                . . . . . . . . e e . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            pohyb = 1
        }
        if (mySprite.vx < 0) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . d d d d d d . . . . 
                . . . . . . d 9 9 9 d d . . . . 
                . . . . . . d 9 9 9 d d . . . . 
                . . . . . . d d d d d d . . . . 
                . . . . d d d d d d d d d d . . 
                . . . . d d d f 1 f 1 d d d . . 
                . . . . d d d 4 1 d 1 d d d . . 
                . . . . d d d d 1 d 1 d d d . . 
                . . . . e e d d 1 d 1 d e e . . 
                . . . . . . d d d d d d . . . . 
                . . . . . . d d . . d d . . . . 
                . . . . . . d d . . e e . . . . 
                . . . . . . e e . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . d d d d d d . . . . 
                . . . . . . d 9 9 9 d d . . . . 
                . . . . . . d 9 9 9 d d . . . . 
                . . . . . . d d d d d d . . . . 
                . . . . d d d d d d d d d d . . 
                . . . . d d d f 1 f 1 d d d . . 
                . . . . d d d 4 1 d 1 d d d . . 
                . . . . d d d d 1 d 1 d d d . . 
                . . . . e e d d 1 d 1 d e e . . 
                . . . . . . d d d d d d . . . . 
                . . . . . . d d . . d d . . . . 
                . . . . . . e e . . d d . . . . 
                . . . . . . . . . . e e . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            pohyb = -1
        }
        if (mySprite.vy != 0 && pohyb < 0) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . d d d d d d . . . . . . 
                . . . . d d 9 9 9 d . . . . . . 
                . . . . d d 9 9 9 d . . . . . . 
                . . . . d d d d d d . . . . . . 
                . . d d d d d d d d d d . . . . 
                . . d d d 1 f 1 f d d d . . . . 
                . . d d d 1 d 1 4 d d d . . . . 
                . . d d d 1 d 1 d d d d . . . . 
                . . e e d 1 d 1 d d e e . . . . 
                . . . . d d d d d d . . . . . . 
                . . . . d d . . d d . . . . . . 
                . . . . e e . . d d . . . . . . 
                . . . . . . . . e e . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . d d d d d d . . . . . . 
                . . . . d d 9 9 9 d . . . . . . 
                . . . . d d 9 9 9 d . . . . . . 
                . . . . d d d d d d . . . . . . 
                . . d d d d d d d d d d . . . . 
                . . d d d 1 f 1 f d d d . . . . 
                . . d d d 1 d 1 4 d d d . . . . 
                . . d d d 1 d 1 d d d d . . . . 
                . . e e d 1 d 1 d d e e . . . . 
                . . . . d d d d d d . . . . . . 
                . . . . d d . . d d . . . . . . 
                . . . . d d . . e e . . . . . . 
                . . . . e e . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
        }
        if (mySprite.vy != 0 && pohyb > 0) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . d d d d d d . . . . 
                . . . . . . d 9 9 9 d d . . . . 
                . . . . . . d 9 9 9 d d . . . . 
                . . . . . . d d d d d d . . . . 
                . . . . d d d d d d d d d d . . 
                . . . . d d d f 1 f 1 d d d . . 
                . . . . d d d 4 1 d 1 d d d . . 
                . . . . d d d d 1 d 1 d d d . . 
                . . . . e e d d 1 d 1 d e e . . 
                . . . . . . d d d d d d . . . . 
                . . . . . . d d . . d d . . . . 
                . . . . . . e e . . d d . . . . 
                . . . . . . . . . . e e . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . d d d d d d . . . . 
                . . . . . . d 9 9 9 d d . . . . 
                . . . . . . d 9 9 9 d d . . . . 
                . . . . . . d d d d d d . . . . 
                . . . . d d d d d d d d d d . . 
                . . . . d d d f 1 f 1 d d d . . 
                . . . . d d d 4 1 d 1 d d d . . 
                . . . . d d d d 1 d 1 d d d . . 
                . . . . e e d d 1 d 1 d e e . . 
                . . . . . . d d d d d d . . . . 
                . . . . . . d d . . d d . . . . 
                . . . . . . d d . . e e . . . . 
                . . . . . . e e . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(200)
        }
        if (mySprite.vy == 0 && (mySprite.x == 0 && pohyb > 0)) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . d d d d d d . . . . 
                . . . . . . d 9 9 9 d d . . . . 
                . . . . . . d 9 9 9 d d . . . . 
                . . . . . . d d d d d d . . . . 
                . . . . d d d d d d d d d d . . 
                . . . . d d d f 1 f 1 d d d . . 
                . . . . d d d 4 1 d 1 d d d . . 
                . . . . d d d d 1 d 1 d d d . . 
                . . . . e e d d 1 d 1 d e e . . 
                . . . . . . d d d d d d . . . . 
                . . . . . . d d . . d d . . . . 
                . . . . . . d d . . d d . . . . 
                . . . . . . e e . . e e . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (mySprite.vy == 0 && (mySprite.x == 0 && pohyb < 0)) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . d d d d d d . . . . . . 
                . . . . d d 9 9 9 d . . . . . . 
                . . . . d d 9 9 9 d . . . . . . 
                . . . . d d d d d d . . . . . . 
                . . d d d d d d d d d d . . . . 
                . . d d d 1 f 1 f d d d . . . . 
                . . d d d 1 d 1 4 d d d . . . . 
                . . d d d 1 d 1 d d d d . . . . 
                . . e e d 1 d 1 d d e e . . . . 
                . . . . d d d d d d . . . . . . 
                . . . . d d . . d d . . . . . . 
                . . . . d d . . d d . . . . . . 
                . . . . e e . . e e . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
    if (cloths == 2) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . 2 . 2 . . . . . . . 2 . . . . 
            . 2 2 2 2 . . . . . . 2 . . . . 
            2 2 2 2 2 2 e 4 4 . . 2 . . . . 
            . 2 . 2 . . e d 2 4 d . . . . . 
            . . e d d d d d d 2 d . d d d 5 
            . . e d d d 4 4 f f d . d 6 d 5 
            2 . . . . d d d f f 4 2 d d 5 5 
            2 . . . . 4 d d 4 4 d 4 2 d 5 5 
            2 2 e 4 4 4 1 1 1 1 d . . 5 5 . 
            . . e d d d d d d d d 2 2 . . . 
            . . . 2 2 2 e d d d d 2 2 . . . 
            . 2 2 2 2 2 e d d d d 2 2 2 2 . 
            . . . 2 2 2 2 2 2 2 2 2 2 . 2 . 
            . . . . . 2 2 2 2 2 . . . . 2 . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
forever(function () {
    if (KONEC == 1) {
        Gate.setImage(img`
            f f f f f f f f f f f f 
            d d f d d d d d f d d d 
            d d f d d d d d f d d d 
            d d f d d d d d f d d d 
            d d f d d d d d f d d d 
            d d f d d d d d f d d d 
            d d f d d d d d f d d d 
            f f f f f f f f f f f f 
            `)
    }
})
forever(function () {
    if (KONEC == 2) {
        controller.moveSprite(mySprite, 0, 0)
        pause(100)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . d d d d d d . . . . 
            . . . . . . d 9 9 9 d d . . . . 
            . . . . . . d 9 9 9 d d . . . . 
            . . . . . . d d d d d d . . . . 
            . . . . d d d d d d d d d d . . 
            . . . . d d d f 1 f 1 d d d . . 
            . . . . d d d 4 1 d 1 d d d . . 
            . . . . d d d d 1 d 1 d d d . . 
            . . . . e e d d 1 d 1 d e e . . 
            . . . . . . d d d d d d . . . . 
            . . . . . . d d . . d d . . . . 
            . . . . . . d d . . d d . . . . 
            . . . . . . e e . . e e . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.showLongText("Dr. Conor: dobře začneme s ...", DialogLayout.Bottom)
        tma = sprites.create(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `, SpriteKind.Dead2)
        tma.y = 830
        tma.x = 770
        pause(1000)
        tma.x = 1
        game.showLongText("Dr. Conor: CO TO BYLO???", DialogLayout.Top)
        game.showLongText("Rozhlas: Pane máme tu menší problémi s elektřinou.", DialogLayout.Top)
        game.showLongText("Rozhlas: Nejdou zavřít dveře a vypadávají světla.", DialogLayout.Top)
        game.showLongText("Dr. Conor: Okamžitě ukončete test a opusťte...", DialogLayout.Top)
        tma.x = 770
        pause(1000)
        SCP2.y = 868
        SCP2.x = 770
        dead2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . 2 2 2 . . . . . . . . . 
            2 2 2 2 2 . e d d d d . . . . . 
            . 2 2 . 2 . e d d d d . . . . . 
            . . e d d d d d d d d d d d d . 
            . . e d d d d d 4 f d d 9 9 d . 
            . . . . . 2 1 1 1 1 d d 9 9 d . 
            . . . . . 2 d d d f d d 9 9 d . 
            . . e d d 2 1 1 1 1 d d d d d . 
            . . e d d 2 d d d d 2 d d d d . 
            . . . . 2 2 e d d d 2 2 2 . . . 
            . 2 2 2 . . e d d d d 2 2 2 2 2 
            . . . . . . 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . 2 2 2 2 2 . 
            `)
        tma.x = 1
        game.showLongText("Dr. Conor: Pozor SCP-173 je v pohybu, všich... ", DialogLayout.Top)
        tma.x = 770
        SCP2.y = 840
        SCP2.x = 780
        dead1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e d d d d . . . . . 
            . . . . 2 2 e d d d d . . . . . 
            . . e d d 2 d d d d d d d d d . 
            . . e d d d 2 d 4 f d d 9 9 d . 
            . . . . . d 1 2 2 1 d d 9 9 d . 
            . . . . . d d 2 d f 2 d 9 9 d . 
            . . e d d d 1 2 1 1 2 d d d d . 
            . . e d d d d d d d 2 2 d d d . 
            . . . 2 2 2 e d d d d 2 2 2 . . 
            . . . . . 2 e d d d d 2 2 . . . 
            . . . . . 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . 2 2 2 2 . . . . . 
            `)
        pause(1000)
        tma.x = 1
        pause(2000)
        tma.x = 770
        SCP2.y = 835
        SCP2.x = 775
        SCP2.setImage(img`
            . . . . . . . . d d d . . . . . 
            . . . . . . . d 7 d 7 d . . . . 
            . . . . . . . d 2 e 2 d . . . . 
            . . . . . . . d 9 e 9 d . . . . 
            . . . . . . . . 2 2 2 d . . . . 
            . . . . . . . d d 2 d . . . . . 
            . . . d 1 d d d d d d d . . . . 
            . . . . . . . d d d 1 d . . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . . . d d d d d . . . . 
            . . . . . . . 1 d d d d . . . . 
            . . . . . . . d d d d d . . . . 
            . . . . . . . d . . d . . . . . 
            . . . . . . . d . . d . . . . . 
            . . . . . . . d . . d . . . . . 
            . . . . . . . 1 . . 1 . . . . . 
            `)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 . . . . . . . . . . . . 
            . . 2 . 2 . . . . . . . . . . . 
            . . . . 2 . e d d d d . . . . . 
            . . . . 2 2 e d d d d . . . . . 
            . . e d d d d d d d 2 d d d d . 
            . . e d d d 2 d 2 2 2 d 9 9 d . 
            . . . . . d 1 2 2 1 d d 9 9 d . 
            . 2 . . . d d 2 d f d d 9 9 d . 
            . 2 e d d d 1 2 1 1 d d d d d . 
            . . e d d d d d d d d d d d d . 
            . . . 2 2 2 e d d d d 2 2 2 . . 
            2 2 2 2 . 2 e d d d d 2 2 . . . 
            . . . 2 2 2 2 2 2 2 . . 2 2 . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(1000)
        tma.x = 1
        pause(2000)
        tma.x = 770
        pause(1000)
        SCP2.y = 780
        SCP2.x = 770
        tma.x = 1
        pause(2000)
        tma.x = 770
        SCP2.y = 1
        pause(1000)
        tma.x = 1
        pause(2000)
        game.showLongText("SCP-173 uniklo za své zadržovací místnosti v 14:23 pacifického času. Na místo byla vysléna zadržovací jednotka které se po 3 hodinách povedlo SCP-173 opětovně uvěznit.", DialogLayout.Full)
        game.showLongText("Tato mini-hra byla inspirována hrou SCP: CONTAINMENT BREACH.", DialogLayout.Full)
        game.showLongText("Vytvořil Miroslav Novák P2", DialogLayout.Full)
        game.over(true)
    }
})
