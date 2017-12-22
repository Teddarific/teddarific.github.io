$(document).ready(function(){
  // transition();
  //preloadVideo();
});


function preloadVideo(){
  // console.log("Requesting background video...")
  // var xhr = new XMLHttpRequest();
  // xhr.open('GET', 'tedall.mp4', true);
  // xhr.responseType = 'blob';
  // xhr.onload = function(e) {
  //   if (this.status == 200) {
  //     console.log("Received video...");
  //     var myBlob = this.response;
  //     var vid = (window.webkitURL ? webkitURL : URL).createObjectURL(myBlob);
  //     // myBlob is now the blob that the object URL pointed to.
  //     var video = document.getElementById("backvid");
  //     console.log("Loading video into element...");
  //     video.src = vid;
  //     transition();
  //     initiateFacts();
  //    }
  //    else {
  //      console.log("Failed to load video");
  //      // insert code to deal with not loading video
  //    }
  //   }
  //
  // xhr.send();

  var video = document.getElementById("backvid");

  var targetVal = 0;
  var currVal = 0;

  var i = setInterval(function(){
    if ( currVal < targetVal ){
      currVal += 1;
      var d = Math.floor(Math.random() * 2) - 2 + currVal;

      document.getElementById("percent").innerHTML = "" + d + "%";
    }
  }, 50);

  var ptracker = function() {
    var buffStartTime = 10;
    targetVal = Math.min(Math.round(video.buffered.end(0) * (100 / buffStartTime)), 100);
    if (Math.round(video.buffered.end(0)) >= buffStartTime) {
      document.getElementById("percent").innerHTML = "100%";
      video.currentTime = 0;
      video.removeEventListener("progress", ptracker, false);
      clearInterval(i);
      transition();
      initiateFacts();
   }
  }

  video.addEventListener("progress", ptracker, false);
}

function transition(){
  // remove animation elements
  $('.preloader').fadeOut(1000);
  setTimeout(function(){
    $('#background').addClass('visible');
    $('#home-wrapper').addClass('visible');

    $('#background').fadeIn(2000);
    $('#home-wrapper').fadeIn(1200);
    document.getElementById("background").style.display = "flex";
    document.getElementById("home-wrapper").style.display = "flex";
  }, 2000);

}
