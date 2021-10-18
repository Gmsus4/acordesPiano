const firstSpan = document.querySelector('#firstSpan');
const lastSpan = document.querySelector('#lastSpan');
const acordes = document.querySelector('.acordes');
const img = document.createElement('img');
let count = 1;
let lastCount = 1;
/* function firstClickUp(){
    count++;
    if(count == 2){
        firstSpan.innerText = `D`;
    } else if(count == 3){
        firstSpan.innerText = `E`;
    } else if(count == 4){
        firstSpan.innerText = `F`;
    } else if(count == 5){
        firstSpan.innerText = `G`;
    } else if(count == 6){
        firstSpan.innerText = `A`;
    } else if(count == 7){
        firstSpan.innerText = `B`;
    } else if(count == 8){
        firstSpan.innerText = `C`;
        count = 1;
    }
}
 */
/* function firstClickDown(){
    count--;
    if(count == 1){
        firstSpan.innerText = `C`;
    } else if(count == 2){
        firstSpan.innerText = `D`;
    } else if(count == 3){
        firstSpan.innerText = `E`;
    } else if(count == 4){
        firstSpan.innerText = `F`;
    } else if(count == 5){
        firstSpan.innerText = `G`;
    } else if(count == 6){
        firstSpan.innerText = `A`;
    } else if(count == 7 || count == 0){
        firstSpan.innerText = `B`;
        count = 7;
    } else{
        alert("Error");
    }
} */
function firstClickUp(){
    count++;
    if(count == 2){
        firstSpan.innerText = `C#`
    } else if(count == 3){
        firstSpan.innerText = `Db`;
    } else if(count == 4){
        firstSpan.innerText = `D`;
    } else if(count == 5){
        firstSpan.innerText = `D#`;
    } else if(count == 6){
        firstSpan.innerText = `Eb`;
    } else if(count == 7){
        firstSpan.innerText = `E`;
    } else if(count == 8){
        firstSpan.innerText = `F`;
    } else if(count == 9){
        firstSpan.innerText = `F#`;
    } else if(count == 10){
        firstSpan.innerText = `Gb`;
    } else if(count == 11){
        firstSpan.innerText = `G`;
    } else if(count == 12){
        firstSpan.innerText = `G#`;
    } else if(count == 13){
        firstSpan.innerText = `Ab`;
    } else if(count == 14){
        firstSpan.innerText = `A`;
    } else if(count == 15){
        firstSpan.innerText = `A#`;
    } else if(count == 16){
        firstSpan.innerText = `Bb`;
    } else if(count == 17){
        firstSpan.innerText = `B`;
    } else if(count == 18){
        firstSpan.innerText = `C`;
        count = 1;
    }
}

function firstClickDown(){
    count--;
    if(count == 1){
        firstSpan.innerText = `C`;
    } else if(count == 2){
        firstSpan.innerText = `C#`;
    } else if(count == 3){
        firstSpan.innerText = `Db`;
    } else if(count == 4){
        firstSpan.innerText = `D`;
    } else if(count == 5){
        firstSpan.innerText = `D#`;
    } else if(count == 6){
        firstSpan.innerText = `Eb`;
    } else if(count == 7){
        firstSpan.innerText = `E`;
    } else if(count == 8){
        firstSpan.innerText = `F`;
    } else if(count == 9){
        firstSpan.innerText = `F#`;
    } else if(count == 10){
        firstSpan.innerText = `Gb`;
    } else if(count == 11){
        firstSpan.innerText = `G`;
    } else if(count == 12){
        firstSpan.innerText = `G#`;
    } else if(count == 13){
        firstSpan.innerText = `Ab`;
    } else if(count == 14){
        firstSpan.innerText = `A`;
    } else if(count == 15){
        firstSpan.innerText = `A#`;
    } else if(count == 16){
        firstSpan.innerText = `Bb`;
    } else if(count == 17 || count == 0){
        firstSpan.innerText = `B`;
        count = 17;
    } else{
        alert("Error");
    }
}

function lastClickUp(){
    lastCount++;
    if(lastCount == 2){
        lastSpan.innerText = `m`;
    } else if(lastCount == 3){
        lastSpan.innerText = `7`;
    } else if(lastCount == 4){
        lastSpan.innerText = `m7`;
    } else if(lastCount == 5){
        lastSpan.innerText = `maj7`;
    } else if(lastCount == 6){
        lastSpan.innerText = `mMaj7`;
    } else if(lastCount == 7){
        lastSpan.innerText = `aug`;
    } else if(lastCount == 8){
        lastSpan.innerText = `dim`;
    } else if(lastCount == 9){
        lastSpan.innerText = `sus2`;
    } else if(lastCount == 10){
        lastSpan.innerText = `sus4`;
    } else if(lastCount == 11){
        lastSpan.innerText = `M`;
        lastCount = 1;
    } 
}

function lastClickDown(){
    lastCount--;
    if(lastCount == 1){
        lastSpan.innerText = `M`;
    } else if(lastCount == 2){
        lastSpan.innerText = `m`;
    } else if(lastCount == 3){
        lastSpan.innerText = `7`;
    } else if(lastCount == 4){
        lastSpan.innerText = `m7`;
    } else if(lastCount == 5){
        lastSpan.innerText = `maj7`;
    } else if(lastCount == 6){
        lastSpan.innerText = `mMaj7`;
    } else if(lastCount == 7){
        lastSpan.innerText = `aug`;
    } else if(lastCount == 8){
        lastSpan.innerText = `dim`;
    } else if(lastCount == 9){
        lastSpan.innerText = `sus2`;
    } else if(lastCount == 10 || lastCount == 0){
        lastSpan.innerText = `sus4`;
        lastCount = 10;
    } 
}

function verAcorde(){
    if(firstSpan.textContent === "C" && lastSpan.textContent === "M"){
        img.src = `img/acorde-C.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "C" && lastSpan.textContent === "m"){
        img.src = `img/acorde-Cm-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C" && lastSpan.textContent === "7"){
        img.src = `img/acorde-C7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Cm7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Cmaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-CmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Caug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Cdim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Csus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Csus4-piano.gif`;
        acordes.append(img);
    }  
    
    else if(firstSpan.textContent === "C#" && lastSpan.textContent === "M"){
        img.src = `img/acorde-C-sostenido-piano.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "C#" && lastSpan.textContent === "m"){
        img.src = `img/acorde-C-sostenido-menor-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C#" && lastSpan.textContent === "7"){
        img.src = `img/acorde-C-sostenido-7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C#" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-C-sostenido-m7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C#" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-C-sostenido-maj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C#" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-C-sostenido-mMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C#" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-C-sostenido-aug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C#" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-C-sostenido-dim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C#" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-C-sostenido-sus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "C#" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-C-sostenido-sus4-piano.gif`;
        acordes.append(img);
    }
    
    else if(firstSpan.textContent === "Db" && lastSpan.textContent === "M"){
        img.src = `img/acorde-D-bemol-piano.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "Db" && lastSpan.textContent === "m"){
        img.src = `img/acorde-D-bemol-menor-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Db" && lastSpan.textContent === "7"){
        img.src = `img/acorde-Db7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Db" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Dbm7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Db" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Dbmaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Db" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-DbmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Db" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Dbaug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Db" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Dbdim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Db" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Dbsus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Db" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Dbsus4-piano.gif`;
        acordes.append(img);
    }

    else if(firstSpan.textContent === "D" && lastSpan.textContent === "M"){
        img.src = `img/acorde-D-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D" && lastSpan.textContent === "m"){
        img.src = `img/acorde-Dm-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D" && lastSpan.textContent === "7"){
        img.src = `img/acorde-D7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Dm7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Dmaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-DmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Daug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Ddim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Dsus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Dsus4-piano.gif`;
        acordes.append(img);
    }  
    
    else if(firstSpan.textContent === "D#" && lastSpan.textContent === "M"){
        img.src = `img/acorde-D-sostenido-piano.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "D#" && lastSpan.textContent === "m"){
        img.src = `img/acorde-D-sostenido-menor-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D#" && lastSpan.textContent === "7"){
        img.src = `img/acorde-D-sostenido-7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D#" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-D-sostenido-m7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D#" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-D-sostenido-maj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D#" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-D-sostenido-mMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D#" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-D-sostenido-aug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D#" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-D-sostenido-dim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D#" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-D-sostenido-sus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "D#" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-D-sostenido-sus4-piano.gif`;
        acordes.append(img);
    }

    else if(firstSpan.textContent === "Eb" && lastSpan.textContent === "M"){
        img.src = `img/acorde-E-bemol-piano.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "Eb" && lastSpan.textContent === "m"){
        img.src = `img/acorde-E-bemol-menor-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Eb" && lastSpan.textContent === "7"){
        img.src = `img/acorde-Eb7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Eb" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Ebm7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Eb" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Ebmaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Eb" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-EbmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Eb" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Ebaug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Eb" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Ebdim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Eb" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Ebsus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Eb" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Ebsus4-piano.gif`;
        acordes.append(img);
    }

    else if(firstSpan.textContent === "E" && lastSpan.textContent === "M"){
        img.src = `img/acorde-E-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "E" && lastSpan.textContent === "m"){
        img.src = `img/acorde-Em-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "E" && lastSpan.textContent === "7"){
        img.src = `img/acorde-E7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "E" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Em7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "E" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Emaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "E" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-EmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "E" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Eaug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "E" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Edim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "E" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Esus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "E" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Esus4-piano.gif`;
        acordes.append(img);
    } 

    else if(firstSpan.textContent === "F" && lastSpan.textContent === "M"){
        img.src = `img/acorde-F-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F" && lastSpan.textContent === "m"){
        img.src = `img/acorde-Fm-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F" && lastSpan.textContent === "7"){
        img.src = `img/acorde-F7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Fm7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Fmaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-FmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Faug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Fdim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Fsus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Fsus4-piano.gif`;
        acordes.append(img);
    } 

    else if(firstSpan.textContent === "F#" && lastSpan.textContent === "M"){
        img.src = `img/acorde-F-sostenido-piano.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "F#" && lastSpan.textContent === "m"){
        img.src = `img/acorde-F-sostenido-menor-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F#" && lastSpan.textContent === "7"){
        img.src = `img/acorde-F-sostenido-7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F#" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-F-sostenido-m7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F#" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-F-sostenido-maj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F#" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-F-sostenido-mMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F#" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-F-sostenido-aug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F#" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-F-sostenido-dim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F#" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-F-sostenido-sus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "F#" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-F-sostenido-sus4-piano.gif`;
        acordes.append(img);
    }

    else if(firstSpan.textContent === "Gb" && lastSpan.textContent === "M"){
        img.src = `img/acorde-G-bemol-piano.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "Gb" && lastSpan.textContent === "m"){
        img.src = `img/acorde-G-bemol-menor-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Gb" && lastSpan.textContent === "7"){
        img.src = `img/acorde-Gb7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Gb" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Gbm7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Gb" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Gbmaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Gb" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-GbmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Gb" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Gbaug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Gb" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Gbdim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Gb" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Gbsus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Gb" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Gbsus4-piano.gif`;
        acordes.append(img);
    }

    else if(firstSpan.textContent === "G" && lastSpan.textContent === "M"){
        img.src = `img/acorde-G-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G" && lastSpan.textContent === "m"){
        img.src = `img/acorde-Gm-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G" && lastSpan.textContent === "7"){
        img.src = `img/acorde-G7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Gm7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Gmaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-GmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Gaug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Gdim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Gsus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Gsus4-piano.gif`;
        acordes.append(img);
    } 

    else if(firstSpan.textContent === "G#" && lastSpan.textContent === "M"){
        img.src = `img/acorde-G-sostenido-piano.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "G#" && lastSpan.textContent === "m"){
        img.src = `img/acorde-G-sostenido-menor-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G#" && lastSpan.textContent === "7"){
        img.src = `img/acorde-G-sostenido-7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G#" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-G-sostenido-m7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G#" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-G-sostenido-maj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G#" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-G-sostenido-mMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G#" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-G-sostenido-aug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G#" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-G-sostenido-dim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G#" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-G-sostenido-sus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "G#" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-G-sostenido-sus4-piano.gif`;
        acordes.append(img);
    }

    else if(firstSpan.textContent === "Ab" && lastSpan.textContent === "M"){
        img.src = `img/acorde-A-bemol-piano.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "Ab" && lastSpan.textContent === "m"){
        img.src = `img/acorde-A-bemol-menor-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Ab" && lastSpan.textContent === "7"){
        img.src = `img/acorde-Ab7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Ab" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Abm7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Ab" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Abmaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Ab" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-AbmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Ab" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Abaug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Ab" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Abdim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Ab" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Absus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Ab" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Absus4-piano.gif`;
        acordes.append(img);
    }

    else if(firstSpan.textContent === "A" && lastSpan.textContent === "M"){
        img.src = `img/acorde-A-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A" && lastSpan.textContent === "m"){
        img.src = `img/acorde-Am-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A" && lastSpan.textContent === "7"){
        img.src = `img/acorde-A7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Am7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Amaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-AmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Aaug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Adim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Asus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Asus4-piano.gif`;
        acordes.append(img);
    } 

    else if(firstSpan.textContent === "A#" && lastSpan.textContent === "M"){
        img.src = `img/acorde-A-sostenido-piano.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "A#" && lastSpan.textContent === "m"){
        img.src = `img/acorde-A-sostenido-menor-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A#" && lastSpan.textContent === "7"){
        img.src = `img/acorde-A-sostenido-7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A#" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-A-sostenido-m7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A#" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-A-sostenido-maj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A#" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-A-sostenido-mMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A#" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-A-sostenido-aug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A#" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-A-sostenido-dim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A#" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-A-sostenido-sus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "A#" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-A-sostenido-sus4-piano.gif`;
        acordes.append(img);
    }

    else if(firstSpan.textContent === "Bb" && lastSpan.textContent === "M"){
        img.src = `img/acorde-B-bemol-piano.gif`;
        acordes.append(img);
    } else if(firstSpan.textContent === "Bb" && lastSpan.textContent === "m"){
        img.src = `img/acorde-B-bemol-menor-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Bb" && lastSpan.textContent === "7"){
        img.src = `img/acorde-Bb7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Bb" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Bbm7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Bb" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Bbmaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Bb" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-BbmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Bb" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Bbaug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Bb" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Bbdim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Bb" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Bbsus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "Bb" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Bbsus4-piano.gif`;
        acordes.append(img);
    }

    else if(firstSpan.textContent === "B" && lastSpan.textContent === "M"){
        img.src = `img/acorde-B-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "B" && lastSpan.textContent === "m"){
        img.src = `img/acorde-Bm-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "B" && lastSpan.textContent === "7"){
        img.src = `img/acorde-B7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "B" && lastSpan.textContent === "m7"){
        img.src = `img/acorde-Bm7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "B" && lastSpan.textContent === "maj7"){
        img.src = `img/acorde-Bmaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "B" && lastSpan.textContent === "mMaj7"){
        img.src = `img/acorde-BmMaj7-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "B" && lastSpan.textContent === "aug"){
        img.src = `img/acorde-Baug-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "B" && lastSpan.textContent === "dim"){
        img.src = `img/acorde-Bdim-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "B" && lastSpan.textContent === "sus2"){
        img.src = `img/acorde-Bsus2-piano.gif`;
        acordes.append(img);
    }  else if(firstSpan.textContent === "B" && lastSpan.textContent === "sus4"){
        img.src = `img/acorde-Bsus4-piano.gif`;
        acordes.append(img);
    } 
    else{
        img.src = `https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1`;
    }
}