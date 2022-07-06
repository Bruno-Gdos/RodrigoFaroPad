function play_som(idElementAudio) {
    var audio = document.querySelector(idElementAudio);
    if (audio.paused) {
        audio.currentTime = 0
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
        audio.play()
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);
    
    tecla.onclick = function(){
        play_som(idAudio);
        
    };

}

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
    const tecla = listaDeTeclas[indice];
  
    tecla.onkeydown = function (evento) {
      if(evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add('ativa');
      }
    }
    tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
    }
  }