var sprite;
function animation(stage, weg, meineObjekte, hohe, breite) {
    this.count = 0;

    img = new Image();
    img.src = "assets/manSeq.png";
    img.onload = handleImageLoad;

}

var a = 11;
function handleImageLoad(event) {
    var spriteSheet = new createjs.SpriteSheet({
        images: [img],
        frames: {width: 48, height: 67, regX: 32, regY: 62},
        animations: {
            walkUp: [0, 2, "walkUp", 0.25],
            walkRight: [3, 5, "walkRight", 0.25],
            walkDown: [6, 8, "walkDown", 0.25],
        }
    });

    //  stage.remo
    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, false, false);
    spriteSheet.getAnimation("walkUp").speed = 0.25;
    spriteList = [];

    if (typeof sprite === 'undefined') {
        sprite = new createjs.Sprite(spriteSheet);
        stage.addChild(sprite);
        spriteList.push(sprite);


    } else {
        var i = stage.numChildren;
        stage.removeChildAt(i);
        this.sprite = new createjs.Sprite(spriteSheet);
        stage.addChild(sprite);
        spriteList.push(sprite);
    }


    sprite.x = meineObjekte[weg[0]].xPos + breite / 2;
    sprite.y = meineObjekte[weg[0] + 19].yPos - hohe / 2;


    /*  sprite.gotoAndPlay("walkRight_h");
     sprite.gotoAndPlay("walkUp");
     sprite.gotoAndPlay("walkDown");
     */
    sprite.gotoAndPlay("walkRight");

    createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.setFPS(60);
    document.removeEventListener('click', getMouseObject, false);
}


var xF = 0;
var yF = 0;

function tick(event) {

    var l = spriteList.length;
    for (var i = 0; i < l; i++) {
        var sprite = spriteList[i];


        var wertRight = weg[this.count] + 1;
        var wertLeft = weg[this.count] - 1;
        var wertUp = weg[this.count] - 19;
        var wertDown = weg[this.count] + 19;

        var b = breite / 2;
        var h = hohe / 2;

        if (wertRight == weg[this.count + 1]) {
            xF = 5;
            if (sprite.currentAnimation != "walkRight") {
                sprite.gotoAndPlay("walkRight");
            }

            if (sprite.x > meineObjekte[weg[this.count + 1]].xPos + b) {
                xF = 0;
                this.count++;
                this.start = meineObjekte[weg[this.count]].key;
                console.log("new start:" + start + "count:" + this.count);
            }
            stage.update(event);
            sprite.x += xF;
        } else {

            if (wertLeft == weg[this.count + 1]) {
                xF = -5;
                if (sprite.currentAnimation != "walkRight_h") {
                    sprite.gotoAndPlay("walkRight_h");
                }

                if (sprite.x < meineObjekte[weg[this.count + 1]].xPos + b) {
                    xF = 0;
                    this.count++;
                    this.start = meineObjekte[weg[this.count]].key;
                    console.log("new start:" + start + "count:" + this.count);
                }
                stage.update(event);
                sprite.x += xF;
            } else {
                if (wertUp == weg[this.count + 1]) {

                    yF = -5;
                    if (sprite.currentAnimation != "walkUp") {
                        sprite.gotoAndPlay("walkUp");
                    }

                    if (sprite.y <= meineObjekte[weg[this.count + 1]].yPos + h) {
                        yF = 0;
                        this.count++;
                        this.start = meineObjekte[weg[this.count]].key;
                        console.log("new start:" + start + "count:" + this.count);
                        if (meineObjekte[weg[this.count]].art == "Market") {
                            alert("Market gefunden");
                            window.location = "./Market.html";
                        }
                        if (meineObjekte[weg[this.count]].art == "Rechnungswesen") {
                            alert("Rechnungswesen gefunden");
                            window.location = "./Rechnungswesen.html";
                        }
                        if (meineObjekte[weg[this.count]].art == "Betriebswirtschaft") {
                            alert("Betriebswirtschaft gefunden");
                            window.location = "./Betriebswirtschaft.html";
                        }

                    }
                    stage.update(event);
                    sprite.y += yF;
                } else {
                    if (wertDown == weg[this.count + 1]) {
                        yF = 5;
                        if (sprite.currentAnimation != "walkDown") {
                            sprite.gotoAndPlay("walkDown");
                        }

                        if (sprite.y >= meineObjekte[weg[this.count + 1]].yPos + h) {
                            yF = 0;
                            this.count++;
                            this.start = meineObjekte[weg[this.count]].key;
                            console.log("new start:" + start + "count:" + this.count);
                        }
                        stage.update(event);
                        sprite.y += yF;
                    }
                }


            }
        }


    }


    if (typeof weg[this.count + 1] === 'undefined') {
        this.count = 0;
        ziel = weg[this.count];
        reseten();
        sprite = null;
    }

    function reseten() {
        createjs.Ticker.removeAllEventListeners("tick");
    }


}




