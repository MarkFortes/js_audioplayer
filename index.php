<?php
  $titulo = "Analyze your commerce";
  require_once("Layouts/header.php");
?>

<audio id="myAudio"></audio>

<div class="app">

  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-sm-12 col-md-auto">
        <button type="button" class="btn btn-dark" name="btnBack">Back</button>
        <button type="button" class="btn btn-primary" onclick="mAudioPlayer.ResumeOrPause()" name="btnPlay">Resume | Pause</button>
        <button type="button" class="btn btn-dark" name="btnNext">Next</button>
      </div>
    </div>
  </div>
  <br>

  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-sm-12">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Song</th>
              <th scope="col">Artist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row"><button type="button" class="btn btn-dark" name="btnBack" onclick="mAudioPlayer.ChooseAudio('media/songs/queen-we_are_the_champions.mp3','weAreTheChampions_Song');">▶</button></td>
              <td style="vertical-align: middle;">We are the champions</td>
              <td style="vertical-align: middle;">Queen</td>
            </tr>
            <tr>
              <td scope="row"><button type="button" class="btn btn-dark" name="btnBack"  onclick="mAudioPlayer.ChooseAudio('media/songs/the_proclaimers-im_gonna_be.mp3','imGonnaBe_Song');">▶</button></td>
              <td style="vertical-align: middle;">I'm gonna be</td>
              <td style="vertical-align: middle;">The Proclaimers</td>
            </tr>
            <tr>
              <td scope="row"><button type="button" class="btn btn-dark" name="btnBack"  onclick="mAudioPlayer.ChooseAudio('media/songs/the_police-roxanne.mp3','imGonnaBe_Song');">▶</button></td>
              <td style="vertical-align: middle;">Roxanne</td>
              <td style="vertical-align: middle;">The Police</td>
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
