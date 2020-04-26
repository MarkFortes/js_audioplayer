var mAudioPlayer;

window.onload = function(){

    if (document.readyState=="complete"){
        console.log("Document loaded");
        var player = document.getElementById("myAudio");
        mAudioPlayer = new Audioplayer(window,document,player);
        console.log("Núm. de canciones cargadas: " + mAudioPlayer.CountSongs());
        console.log("Ubicaciones de las canciones:");
        mAudioPlayer.ShowSongsLocations(mAudioPlayer.GetSongsLocations());
    }
}
