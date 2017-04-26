function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList){
    //console.log(songList);
    // This is where you task begins
     var template = ""
     for (var i = 0; i < songList.length; i++) {
    var songs = songList[i]
    template += `
 
    <div class="row">
      <div class="col-sm-12">
        <div class="well">
          <div class="row">
            <div class= "col-sm-2 col-sm-offset-1">
            <h2 class="patrick">${songs.artist}</h>
            </div>
            <div class= "col-sm-1"><img src="${songs.albumArt}" class="img-thumbnail">
            </div>
            <div class="col-sm-2">
            <h3 class="patrick">${songs.collection}</h> 
            </div>
            <div class= "col-sm-3">
            <h3 class="patrick">${songs.title}</h3>
            </div>
            <div class="col-sm-3">
            <h4 class="patrick">$${songs.price }</h3><audio controls><source src="${songs.preview}" type="audio/mpeg"> 
            </div>
          </div>
        </div>
      </div>
    </div>
 
    `
    document.addEventListener("play", function(event){
      var allAudioTags = document.getElementsByTagName("audio")
      for(var i = 0; i < allAudioTags.length; i++){
        var stopSong = allAudioTags[i]
        if(stopSong != event.target) {
          stopSong.pause()
        }
      }
    }, true)


  }
  document.getElementById('songs').innerHTML = template
}

}

var itunesCtrl = new ItunesController()




