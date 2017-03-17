/**
 * Created by ok on 12.10.2016.
 */
function Tile(x,y) {
    this.xPos=x;
    this.yPos=y;
    this.setLeft=left;
    this.setRight=right;
    this.setUp=up;
    this.setDown=down;
    this.getNachbarn=nachbarn;
    this.art = setArt;
};

function nachbarn() {
    a = [];
    if(typeof this.left==='undefined')this.left=0;
    if(typeof this.right==='undefined')this.right=0;
    if(typeof this.down==='undefined')this.down=0;
    if(typeof this.up==='undefined')this.up=0;


    if(this.left!==0){
        a.push(this.left);
    }
    if(this.right!==0){
        a.push(this.right);
    }
    if(this.up!==0){
        a.push(this.up);
    }
    if(this.down!==0){
        a.push(this.down);
    }


    return a;
}

function left(l) {
    this.left=l;
}
function right(r){
    this.right=r;
}
function up(u){
     this.up = u;
}
function down(d) {
    this.down=d;
}

// --------------------------------------
// Funktionen vom Objekt

//---------------------------------------------
//Vererbung vom obrigen Objekt Tile
function HausBodenL(x,y,nr) {
    this.constructor(x,y);
    this.betretbar=true;
    this.key = nr;

}


function setArt(a) {
    this.art=a
}

function HausBodenR(x,y,nr) {
    this.constructor(x,y);
    this.betretbar=true;
    this.key = nr;
}
function HausDachL(x,y,nr) {
    this.constructor(x,y);
    this.betretbar=true;
    this.key = nr;
}
function HausDachR(x,y,nr) {
    this.constructor(x,y);
    this.betretbar=true;
    this.key = nr;
}
function HausMarketRechts(x,y,nr) {
    this.constructor(x,y);
    this.betretbar=true;
    this.key = nr;
}
function Baum(x,y,nr) {
    this.constructor(x,y);
    this.betretbar=false;
    this.key = nr;
}
function Wiese(x,y,nr) {
    this.constructor(x,y);
    this.betretbar=true;
    this.key = nr;
}


Baum.prototype= new Tile();
HausMarketRechts.prototype= new Tile();
Wiese.prototype= new Tile();
HausBodenL.prototype = new Tile();
HausBodenR.prototype = new Tile();
HausDachL.prototype = new Tile();
HausDachR.prototype = new Tile();

