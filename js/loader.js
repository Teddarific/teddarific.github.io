$(document).ready(function(){
  // transition();
  preloadVideo();
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

  var ptracker = function() {
    // console.log(Math.round(video.buffered.end(0)));
    // When buffer is 1 whole video is buffered
    if (Math.round(video.buffered.end(0)) >= 25) {
      video.currentTime = 0;
      video.removeEventListener("progress", ptracker, false);
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
