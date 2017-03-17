/**
 * Created by ok on 12.10.2016.
 */
function meinHandler(id,ereignis,funktion){
    if(window.addEventListener) {
        document.getElementById(id).addEventListener(ereignis, funktion, false);
    }
    else if(window.attachEvent) {
        document.getElementById(id).attachEvent("on"+ereignis,funktion);
    }
}



function setNachbarn(mapArray,meineObjekte) {
    var countkey = 0;
    for (var y = 0; y < mapArray.length; y++) {
        for (var x = 0; x < mapArray[y].length; x++) {

            var key = meineObjekte[countkey].key;
            if (mapArray[y][x] == 0) {
                if (key % 19 == 0)left = null;
                else {
                    left = key - 1;
                    if (meineObjekte[left].betretbar) meineObjekte[countkey].setLeft(left);
                }
                if (key + 1 % 19 == 0)right = null;
                else {
                    right = key + 1;
                    if (meineObjekte[right].betretbar) meineObjekte[countkey].setRight(right);
                }
                if (key + 19 > 360)down = null;
                else {
                    down = key + 19;
                    if (meineObjekte[down].betretbar) meineObjekte[countkey].setDown(down);
                }
                if (key - 19 < 0)up = null;
                else {
                    up = key - 19;
                    if (meineObjekte[up].betretbar)   meineObjekte[countkey].setUp(up);
                }

            }

            if (mapArray[y][x] == 3) {
                if (key % 19 == 0)left = null;
                else {
                    left = key - 1;
                    if (meineObjekte[left].betretbar) meineObjekte[countkey].setLeft(left);
                }
                if (key + 1 % 19 == 0)right = null;
                else {
                    right = key + 1;
                    if (meineObjekte[right].betretbar) meineObjekte[countkey].setRight(right);


                }
                if (key + 19 > 360)down = null;
                else {
                    down = key + 19;
                    if (meineObjekte[down].betretbar) meineObjekte[countkey].setDown(down);
                }
                if (key - 19 < 0)up = null;
                else {
                    up = key - 19;
                    if (meineObjekte[up].betretbar)   meineObjekte[countkey].setUp(up);
                }

            }

            if (mapArray[y][x] == 2) {
                if (key % 19 == 0)left = null;
                else {
                    left = key - 1;
                    if (meineObjekte[left].betretbar) meineObjekte[countkey].setLeft(left);
                }
                if (key + 1 % 19 == 0)right = null;
                else {
                    right = key + 1;
                    if (meineObjekte[right].betretbar) meineObjekte[countkey].setRight(right);
                }
                if (key + 19 > 360)down = null;
                else {
                    down = key + 19;
                    if (meineObjekte[down].betretbar) meineObjekte[countkey].setDown(down);
                }
                if (key - 19 < 0)up = null;
                else {
                    up = key - 19;
                    if (meineObjekte[up].betretbar)   meineObjekte[countkey].setUp(up);
                }

            }
            console.log(mapArray[y][x]);
            if (mapArray[y][x] == 6) {
                if (key % 19 == 0)left = null;
                else {
                    left = key - 1;
                    if (meineObjekte[left].betretbar) meineObjekte[countkey].setLeft(left);
                }
                if (key + 1 % 19 == 0)right = null;
                else {
                    right = key + 1;
                    if (meineObjekte[right].betretbar) meineObjekte[countkey].setRight(right);
                }
                if (key + 19 > 360)down = null;
                else {
                    down = key + 19;
                    if (meineObjekte[down].betretbar) meineObjekte[countkey].setDown(down);
                }
                if (key - 19 < 0)up = null;
                else {
                    up = key - 19;
                    if (meineObjekte[up].betretbar)   meineObjekte[countkey].setUp(up);
                }

            }
            if (mapArray[y][x] == 4) {
                if (key % 19 == 0)left = null;
                else {
                    left = key - 1;
                    if (meineObjekte[left].betretbar) meineObjekte[countkey].setLeft(left);
                }
                if (key + 1 % 19 == 0)right = null;
                else {
                    right = key + 1;
                    if (meineObjekte[right].betretbar) meineObjekte[countkey].setRight(right);
                }
                if (key + 19 > 360)down = null;
                else {
                    down = key + 19;
                    if (meineObjekte[down].betretbar) meineObjekte[countkey].setDown(down);
                }
                if (key - 19 < 0)up = null;
                else {
                    up = key - 19;
                    if (meineObjekte[up].betretbar)   meineObjekte[countkey].setUp(up);
                }

            }
            if (mapArray[y][x] == 5) {
                if (key % 19 == 0)left = null;
                else {
                    left = key - 1;
                    if (meineObjekte[left].betretbar) meineObjekte[countkey].setLeft(left);
                }
                if (key + 1 % 19 == 0)right = null;
                else {
                    right = key + 1;
                    if (meineObjekte[right].betretbar) meineObjekte[countkey].setRight(right);
                }
                if (key + 19 > 360)down = null;
                else {
                    down = key + 19;
                    if (meineObjekte[down].betretbar) meineObjekte[countkey].setDown(down);
                }
                if (key - 19 < 0)up = null;
                else {
                    up = key - 19;
                    if (meineObjekte[up].betretbar)   meineObjekte[countkey].setUp(up);
                }

            }

            countkey++;
        }
    }
}