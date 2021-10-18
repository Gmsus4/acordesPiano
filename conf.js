function firstClickUp(){
    count++;
    if(count == 2){
        firstSapn.innerText = `Db`;
    } else if(count == 3){
        firstSapn.innerText = `D`;
    } else if(count == 4){
        firstSapn.innerText = `D#`;
    } else if(count == 5){
        firstSapn.innerText = `Eb`;
    } else if(count == 6){
        firstSapn.innerText = `E`;
    } else if(count == 7){
        firstSapn.innerText = `F`;
    } else if(count == 8){
        firstSapn.innerText = `F#`;
    } else if(count == 9){
        firstSapn.innerText = `Gb`;
    } else if(count == 10){
        firstSapn.innerText = `G`;
    } else if(count == 11){
        firstSapn.innerText = `G#`;
    } else if(count == 12){
        firstSapn.innerText = `Ab`;
    } else if(count == 13){
        firstSapn.innerText = `A`;
    } else if(count == 14){
        firstSapn.innerText = `A#`;
    } else if(count == 15){
        firstSapn.innerText = `Bb`;
    } else if(count == 16){
        firstSapn.innerText = `B`;
    } else if(count == 17){
        firstSapn.innerText = `C#`;
    } else if(count == 18){
        firstSapn.innerText = `C`;
        count = 1;
    }
}

function firstClickDown(){
    count--;
    if(count == 1){
        firstSapn.innerText = `C`;
    } else if(count == 2){
        firstSapn.innerText = `C#`;
    } else if(count == 3){
        firstSapn.innerText = `Db`;
    } else if(count == 4){
        firstSapn.innerText = `D`;
    } else if(count == 5){
        firstSapn.innerText = `D#`;
    } else if(count == 6){
        firstSapn.innerText = `Eb`;
    } else if(count == 7){
        firstSapn.innerText = `E`;
    } else if(count == 8){
        firstSapn.innerText = `F`;
    } else if(count == 9){
        firstSapn.innerText = `F#`;
    } else if(count == 10){
        firstSapn.innerText = `Gb`;
    } else if(count == 11){
        firstSapn.innerText = `G`;
    } else if(count == 12){
        firstSapn.innerText = `G#`;
    } else if(count == 13){
        firstSapn.innerText = `Ab`;
    } else if(count == 14){
        firstSapn.innerText = `A`;
    } else if(count == 15){
        firstSapn.innerText = `A#`;
    } else if(count == 16){
        firstSapn.innerText = `Bb`;
    } else if(count == 17 || count == 0){
        firstSapn.innerText = `B`;
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