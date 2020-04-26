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
      this.Play();
    }
////////////////////////////////////////////////////////////////////////////////
    ResumeOrPause(){
      if (this.player.src == "") {
        alert("Selecciona una canción");
      }else {
        if (this.player.paused == false) {
          this.player.pause();
          console.log("Audio pausado");
        }else {
          this.player.play();
          console.log("Audio resumido");
        }
      }
    }

    Play(){
      this.player.play();
      this.WhichSongNameIsPlaying();
    }

    Pause(){
      this.player.pause();
    }
////////////////////////////////////////////////////////////////////////////////
    //Reproduce la siguiente canción
    GoNext(){
      if (this.player.src == "") {
        alert("Selecciona una canción");
      }else{
        var nextSong = this.WhichSongNumberIsPlaying() + 1;
        var listLocations = this.GetSongsLocations();
        if (nextSong < this.CountSongs()) {
          this.player.src = "http://localhost/js_audioplayer/"+listLocations[nextSong];
        }else { //Cuando llega a la última cancion reproduce la primera cancion
          this.player.src = "http://localhost/js_audioplayer/"+listLocations[0];
        }
        this.Play();
      }
    }

    //Reproduce la anterior canción
    GoBack(){
      if (this.player.src == "") {
        alert("Selecciona una canción");
      }else{
        var previousSong = this.WhichSongNumberIsPlaying() - 1;
        var listLocations = this.GetSongsLocations();
        if (previousSong >= 0) {
          this.player.src = "http://localhost/js_audioplayer/"+listLocations[previousSong];
        }else { //Cuando llega a la primera cancion reproduce la ultima cancion
          this.player.src = "http://localhost/js_audioplayer/"+listLocations[this.CountSongs() - 1];
        }
        this.Play();
      }
    }
////////////////////////////////////////////////////////////////////////////////
    //Devolverá el número de canciones, es decir, el número de filas sin contar la header row
    CountSongs(){
      var rowCount = 0; //sin contar la header row
      var table = this.doc.getElementById("tblSongs");
      var rows = table.getElementsByTagName("tr");
      for (var i = 0; i < rows.length; i++) {
        if (rows[i].getElementsByTagName("td").length > 0) {
          rowCount++;
        }
      }
      return rowCount;
    }
////////////////////////////////////////////////////////////////////////////////
    //Devuelve un array con las localizaciones de todas las canciones
    GetSongsLocations(){
      var listLocations = [];
      var table = this.doc.getElementById("tblSongs");
      var rows = table.getElementsByTagName("tr");
      for (var i = 0; i < rows.length; i++) { //Recorre cada fila
        var columns = rows[i].getElementsByTagName("td");
        for (var j = 0; j < columns.length; j++) { //Recorre cada columna
          if (j == 3) {
            listLocations.push(columns[j].innerText); //Guarda en un array la columna de la localizacion del audio
          }
        }
      }
      return listLocations;
    }

    //Devuelve un array con los nombres de todas las canciones
    GetSongsNames(){
      var listNames = [];
      var table = this.doc.getElementById("tblSongs");
      var rows = table.getElementsByTagName("tr");
      for (var i = 0; i < rows.length; i++) { //Recorre cada fila
        var columns = rows[i].getElementsByTagName("td");
        for (var j = 0; j < columns.length; j++) { //Recorre cada columna
          if (j == 1) {
            listNames.push(columns[j].innerText); //Guarda en un array la columna de la localizacion del audio
          }
        }
      }
      return listNames;
    }
////////////////////////////////////////////////////////////////////////////////
    //Muestra por consolas todas las localizaciones gracias a un array pasado como parametro
    ShowSongsLocations(pListLocations){
      for (var i = 0; i < pListLocations.length; i++) {
        console.log(pListLocations[i]);
      }
    }

    ShowSongsNames(pListNames){
      for (var i = 0; i < pListNames.length; i++) {
        console.log(pListNames[i]);
      }
    }
////////////////////////////////////////////////////////////////////////////////
    //Devuelve la posición en la lista de la canción que se está reproduciendo
    WhichSongNumberIsPlaying(){ //
      var listLocations = this.GetSongsLocations();
      for (var i = 0; i < listLocations.length; i++) {
        if ("http://localhost/js_audioplayer/"+listLocations[i] == this.player.src) {
          return i;
        }
      }
    }

    //Devuelve el nombre de la canción que se está reproduciendo
    WhichSongNameIsPlaying(){ //
      var listLocations = this.GetSongsLocations();
      var posSong = null;
      for (var i = 0; i < listLocations.length; i++) {
        if ("http://localhost/js_audioplayer/"+listLocations[i] == this.player.src) {
          posSong = i;
        }
      }
      var listNames = this.GetSongsNames();
      this.doc.getElementById("songPlaying").innerHTML = "Está sonando: " + listNames[posSong];
      console.log("Reproduciendo: " + listNames[posSong]);
    }
////////////////////////////////////////////////////////////////////////////////
}
