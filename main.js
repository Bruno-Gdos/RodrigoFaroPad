
function play_ahuu() {
    var audio = document.querySelector("#som_AHUURRAHBH");
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
        audio.play()
    }
}


function play_cavalo() {
    var audio = document.querySelector("#som_cavalo");
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
        audio.play()
    }
}


function play_danca() {
    var audio = document.querySelector("#som_danca_gatinho");
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
        audio.play()
    }
}


function play_ele_gosta() {
    var audio = document.querySelector("#som_ele_gosta");
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
        audio.play()
    }
}



function play_iirra() {
    var audio = document.querySelector("#som_iirraa");
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
        audio.play()
    }
}



function play_pare() {
    var audio = document.querySelector("#som_pare");
    if (audio.paused) {
        audio.currentTime = 0
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
        audio.play()
    }
}

function play_atumalaca() {
    var audio = document.querySelector("#som_atumalaca");
    if (audio.paused) {
        audio.currentTime = 0
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
        audio.play()
    }
}

function play_aiaiai() {
    var audio = document.querySelector("#som_aiaiai");
    if (audio.paused) {
        audio.currentTime = 0
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
        audio.play()
    }
}

function play_tome() {
    var audio = document.querySelector("#som_tome");
    if (audio.paused) {
        audio.currentTime = 0
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
        audio.play()
    }
}



document.querySelector(".tecla_danca_gatinho").onclick = play_danca;
document.querySelector(".tecla_cavalo").onclick = play_cavalo;
document.querySelector(".tecla_AHUURRAHBH").onclick = play_ahuu;
document.querySelector(".tecla_danca_gatinho").onclick = play_danca;
document.querySelector(".tecla_ele_gosta").onclick = play_ele_gosta;
document.querySelector(".tecla_iirraa").onclick = play_iirra;
document.querySelector(".tecla_pare").onclick = play_pare;
document.querySelector(".tecla_atumalaca").onclick = play_atumalaca;
document.querySelector(".tecla_aiaia").onclick = play_aiaiai;
document.querySelector(".tecla_tome").onclick = play_tome;