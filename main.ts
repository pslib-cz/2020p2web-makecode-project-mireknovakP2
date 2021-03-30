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
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.human3, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("Hej.. Tady nemáš co dělat, vypadni nebo tě vyvedu vlastnoručně...", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.human, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("Jídlo tu je fakt strašný...", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.dr2, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("Nemáš nic jiného na práci než tady tak blbě civět...", DialogLayout.Bottom)
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
    pause(10)
    projectile.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.human1, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("Do téhle místnosti teď nesmíš...", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.card, function (sprite, otherSprite) {
    sprite.destroy()
    cart.destroy()
    game.showLongText("ted mas kartu", DialogLayout.Bottom)
    moznost = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.human2, function (sprite, otherSprite) {
    sprite.destroy()
    if (moznost == 1) {
        mySprite.y = 355
        mySprite.x = 248
        game.showLongText("OK. Tak jdi. setkej se s doktorem Wilsnem ve výzkumné místnosti 173.", DialogLayout.Bottom)
    } else {
        game.showLongText("Vezmi si prověrkovou kartu, bez ní tě nepustím dál...", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Oblek, function (sprite, otherSprite) {
    if (moznost == 1) {
        sprite.destroy()
        oblek1.destroy()
        game.showLongText("\"OBLÉKL JSIS OBLEK\"", DialogLayout.Bottom)
        cloths = 1
    } else {
        sprite.destroy()
        game.showLongText("Ty: Nejdřív musím za doktorem Wilsnem...", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gate, function (sprite, otherSprite) {
    mySprite.y = 790
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.dr, function (sprite, otherSprite) {
    sprite.destroy()
    if (cloths == 0) {
        game.showLongText("dr. Wilson: Aá... ty už jsi tady. Výborně, můžeme teda začít...", DialogLayout.Bottom)
        game.showLongText("Dnes budem testovat SCP-173. A bude to poměrně nebezpečné.", DialogLayout.Bottom)
        game.showLongText("Tahle entita zabije vše co jen potká, ale může se pohybovat jen když není vydět.", DialogLayout.Bottom)
        game.showLongText("z toho důvodu si radši dojdi pro ochranný oblek.", DialogLayout.Bottom)
        moznost = 1
    } else {
        game.showLongText("dr. Wilson: Výborně, vše je připraveno můžeme začít.", DialogLayout.Bottom)
        game.showLongText("vyšleme tě tam ještě s jedním pokusným subjektem a doktorem Conorem.", DialogLayout.Bottom)
        game.showLongText("Doktor Conor bude provádět výzkum, a vy mu budete pomáhat až vám řekne.", DialogLayout.Bottom)
        game.showLongText("jeden z vás hlavně musí, pořád koukat na SCP-173 aby se nehýbalo.", DialogLayout.Bottom)
        game.showLongText("DOBŘE TAK JDEME NA TO!!!", DialogLayout.Bottom)
        KONEC = 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.dr3, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("Vezmi si oblek a vypadni...", DialogLayout.Bottom)
})
let pohyb = 0
let SCP: Sprite = null
let Wilson: Sprite = null
let dr: Sprite = null
let oblek: Sprite = null
let Dclass: Sprite = null
let Gate: Sprite = null
let KONEC = 0
let oblek1: Sprite = null
let moznost = 0
let cart: Sprite = null
let projectile: Sprite = null
let cloths = 0
let mySprite: Sprite = null
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
controller.moveSprite(mySprite, 70, 70)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile13`)
cloths = 0
game.onUpdate(function () {
    if (KONEC != 1) {
        Gate = sprites.createProjectileFromSprite(img`
            ffffffffffffffffffffffffffffffffffffffffffffffff
            ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
            ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
            ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
            ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
            ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
            ddfdddddfdddddfdddddfdddddfdddddfdddddfdddddfddd
            ffffffffffffffffffffffffffffffffffffffffffffffff
            `, mySprite, 0, 0)
        Gate.y = 800
        Gate.x = 760
        Gate.setKind(SpriteKind.gate)
    } else {
        Gate.destroy(effects.spray, 100)
    }
})
game.onUpdate(function () {
    Dclass = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    Dclass.y = 730
    Dclass.x = 670
})
game.onUpdate(function () {
    oblek1 = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    oblek1.y = 532
    oblek1.x = 810
    oblek1.setKind(SpriteKind.Oblek)
})
game.onUpdate(function () {
    Dclass = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    Dclass.y = 755
    Dclass.x = 830
})
game.onUpdate(function () {
    oblek = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    oblek.y = 532
    oblek.x = 778
})
game.onUpdate(function () {
    Dclass = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    Dclass.y = 430
    Dclass.x = 550
    Dclass.setKind(SpriteKind.human3)
})
game.onUpdate(function () {
    dr = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    dr.y = 725
    dr.x = 200
    dr.setKind(SpriteKind.dr2)
})
game.onUpdate(function () {
    Dclass = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    Dclass.y = 329
    Dclass.x = 248
    Dclass.setKind(SpriteKind.human2)
})
game.onUpdate(function () {
    dr = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    dr.y = 600
    dr.x = 820
    dr.setKind(SpriteKind.dr3)
})
game.onUpdate(function () {
    Wilson = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    Wilson.y = 750
    Wilson.x = 750
    Wilson.setKind(SpriteKind.dr)
})
game.onUpdate(function () {
    dr = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    dr.y = 550
    dr.x = 280
})
game.onUpdate(function () {
    SCP = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    SCP.y = 857
    SCP.x = 705
    SCP.setKind(SpriteKind.SCP)
})
game.onUpdate(function () {
    dr = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    dr.y = 730
    dr.x = 795
})
game.onUpdate(function () {
    cart = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    cart.y = 102
    cart.x = 250
    cart.setKind(SpriteKind.card)
})
game.onUpdate(function () {
    Dclass = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    Dclass.y = 168
    Dclass.x = 125
    Dclass.setKind(SpriteKind.human)
})
game.onUpdate(function () {
    Dclass = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    Dclass.y = 120
    Dclass.x = 270
    Dclass.setKind(SpriteKind.human1)
})
game.onUpdate(function () {
    Dclass = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    Dclass.y = 327
    Dclass.x = 337
})
game.onUpdate(function () {
    Dclass = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    Dclass.y = 230
    Dclass.x = 170
})
game.onUpdate(function () {
    Dclass = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 0, 0)
    Dclass.y = 250
    Dclass.x = 103
})
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
            . 2 . 2 . . e d 2 4 4 . . . . . 
            . . e d d d d d d 2 4 . d d d 5 
            . . e d d d 4 4 f f d . d 6 d 5 
            2 . . . . d 4 2 f f 4 2 d d 5 5 
            2 . . . . 4 4 d 4 4 d 4 2 d 5 5 
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
