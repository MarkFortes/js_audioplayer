<?php
  $titulo = "Analyze your commerce";
  require_once("Layouts/header.php");
?>

<audio id="myAudio"></audio>

<div class="app">

  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-sm-12 col-md-auto">
        <div id="songPlaying" class="alert alert-info" role="alert">
          No se ha seleccionado ninguna canción.
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-12 col-md-auto">
        <button type="button" class="btn btn-dark" onclick="mAudioPlayer.GoBack()" name="btnPrevious">Previous</button>
        <button type="button" class="btn btn-primary" onclick="mAudioPlayer.ResumeOrPause()" name="btnPlay">Resume | Pause</button>
        <button type="button" class="btn btn-dark" onclick="mAudioPlayer.GoNext()" name="btnNext">Next</button>
      </div>
    </div>
  </div>
  <br>

  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-sm-12">
        <table class="table" id="tblSongs">
          <thead class="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Song</th>
              <th scope="col">Artist</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row"><button type="button" class="btn btn-dark" name="btnBack" onclick="mAudioPlayer.ChooseAudio('media/songs/queen-we_are_the_champions.mp3');">▶</button></td>
              <td style="vertical-align: middle;">We are the champions</td>
              <td style="vertical-align: middle;">Queen</td>
              <td style="vertical-align: middle;">media/songs/queen-we_are_the_champions.mp3</td>
            </tr>
            <tr>
              <td scope="row"><button type="button" class="btn btn-dark" name="btnBack"  onclick="mAudioPlayer.ChooseAudio('media/songs/the_proclaimers-im_gonna_be.mp3');">▶</button></td>
              <td style="vertical-align: middle;">I'm gonna be</td>
              <td style="vertical-align: middle;">The Proclaimers</td>
              <td style="vertical-align: middle;">media/songs/the_proclaimers-im_gonna_be.mp3</td>
            </tr>
            <tr>
              <td scope="row"><button type="button" class="btn btn-dark" name="btnBack"  onclick="mAudioPlayer.ChooseAudio('media/songs/saint_jhn_imanbek-roses_imanbek_remix.mp3');">▶</button></td>
              <td style="vertical-align: middle;">Roses - Imanbek Remix</td>
              <td style="vertical-align: middle;">SAINt JHN, Imanbek</td>
              <td style="vertical-align: middle;">media/songs/saint_jhn_imanbek-roses_imanbek_remix.mp3</td>
            </tr>
            <tr>
              <td scope="row"><button type="button" class="btn btn-dark" name="btnBack"  onclick="mAudioPlayer.ChooseAudio('media/songs/the_police-roxanne.mp3');">▶</button></td>
              <td style="vertical-align: middle;">Roxanne</td>
              <td style="vertical-align: middle;">The Police</td>
              <td style="vertical-align: middle;">media/songs/the_police-roxanne.mp3</td>
            </tr>
            <tr>
              <td scope="row"><button type="button" class="btn btn-dark" name="btnBack"  onclick="mAudioPlayer.ChooseAudio('media/songs/link_park-in_the_end.mp3');">▶</button></td>
              <td style="vertical-align: middle;">In the end</td>
              <td style="vertical-align: middle;">Linkin Park</td>
              <td style="vertical-align: middle;">media/songs/link_park-in_the_end.mp3</td>
            </tr>
            <tr>
              <td scope="row"><button type="button" class="btn btn-dark" name="btnBack"  onclick="mAudioPlayer.ChooseAudio('media/songs/travis_scott-highest_in_the_room.mp3');">▶</button></td>
              <td style="vertical-align: middle;">Highest in the room</td>
              <td style="vertical-align: middle;">Travis Scoot</td>
              <td style="vertical-align: middle;">media/songs/travis_scott-highest_in_the_room.mp3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</div>

<?php
  require_once("Layouts/footer.php");
?>
