var mAudioPlayer;

window.onload = function(){

    if (document.readyState=="complete"){
        console.log("Document loaded");
        var player = document.getElementById("myAudio");
        mAudioPlayer = new Audioplayer(window,document,player);
    }
}
