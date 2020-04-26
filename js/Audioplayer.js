console.log("Audioplayer class loaded.");

class Audioplayer{
    constructor(pWin, pDoc, pPlayer){
        this.doc=pDoc;
        this.win=pWin;
        this.player=pPlayer;
    }
////////////////////////////////////////////////////////////////////////////////
    ChooseAudio(audioFile){
      this.player.src = audioFile;
      console.log("Canción cargada, reproduciendo.");
      this.player.play();
    }

    ResumeOrPause(){
      if (this.player.paused == false) {
        this.player.pause();
        console.log("Audio pausado");
      }else {
        this.player.play();
        console.log("Audio resumido");
      }
    }
////////////////////////////////////////////////////////////////////////////////

}
