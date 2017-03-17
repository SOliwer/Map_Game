/**
 * Created by ok on 23.11.2016.
 */

function dijkstra(start,ende,meineObjekte){
    var  loesungListe = [];
    var schritt = 0;
    var gefunden = false;
    console.log(start);
    var startGefunden = false;
    var weg = [];
    if(start==ende){
        gefunden = true;
    }
    else {
        while (!gefunden) {                           //solange nicht gefunden
            loesungListe[schritt] = [];              //in der Lösungsliste wird auf jedem Knoten eine neue Liste erstellt
            var schrittDavor = loesungListe[schritt - 1];//schrittDavor wird mit dem vorrigem Knoten befüllt(Array)
            if (schrittDavor == undefined) {            // wenn schrittdavor == undefined also schritt = 0
                loesungListe[schritt] = [start];     // loesungListe[0]= [Startposition];
            }
            else {
                for (i = 0; i < schrittDavor.length; i++) { // schrittDavor.length-> Vorrige Liste.länge
                    loesungListe[schritt] = loesungListe[schritt].concat(wasfound(meineObjekte, meineObjekte[schrittDavor[i]].getNachbarn(), loesungListe));
                }
            }
            gefunden = loesungListe[schritt].includes(ende);
            schritt++;

            if (gefunden) {
                schritt--;
                var schritteScope = schritt;

                while (schritt >= 0) {
                    if (schritteScope == schritt) {
                        eins(meineObjekte, loesungListe, ende, weg, schritt);
                    } else {
                        zwei(meineObjekte, loesungListe, weg, schritt);
                    }
                    if (schritt == 1)break;
                    schritt--;
                }
            }
        }
    }


    return weg;
    // Mann schaut ob loesungListe bereits Elemente aus schrittDavor[i]].getNachbarn() beinhaltet
    // wenn ja return false sonst return true
    // anhand dessen sagt der Filter kommt in die Liste rein oder nicht
    function wasfound(meineObjeke,array,liste){
        return  array.filter(function (element) {
            for(var i=0;i <= schritt;i++){
                if(liste[i].includes(element)){
                    return false;
                }
            }
            return true;
        })
    }

    function eins(meineObjekte,loesungListe,ende,weg,schritt){
        var endeNachbarn = meineObjekte[ende].getNachbarn();
        var i =0;
        var a = [];
        a.push(loesungListe[schritt-1]);
        while(i< endeNachbarn.length){
            if (a[0].includes(endeNachbarn[i])) {

                if (weg[schritt] == undefined) {
                    weg[schritt - 1] = endeNachbarn[i];
                    weg[schritt] = ende;
                }
            }

            i++;
        }
    }

    function zwei(meineObjekte,loesungListe,weg,schritt){
        var  wegBeschreibung = weg;
        var i =0;
        var punkt = weg[schritt];
        var schritteDavor=meineObjekte[punkt].getNachbarn();

        while(i<schritteDavor.length) {
            if (loesungListe[schritt-1].includes(schritteDavor[i])) {
                if (weg[schritt-1]== undefined) {
                    weg[schritt-1]=schritteDavor[i];
                }
            }
            i++;
        }
    }
}