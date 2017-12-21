$(document).ready(function(){
  preloadVideo();
});


function preloadVideo(){
  console.log("Requesting background video...")
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'tedall.mp4', true);
  xhr.responseType = 'blob';
  xhr.onload = function(e) {
    if (this.status == 200) {
      console.log("Received video...");
      var myBlob = this.response;
      var vid = (window.webkitURL ? webkitURL : URL).createObjectURL(myBlob);
      // myBlob is now the blob that the object URL pointed to.
      var video = document.getElementById("backvid");
      console.log("Loading video into element...");
      video.src = vid;

      initiateFacts();
     }
     else {
       console.log("Failed to load video");
       // insert code to deal with not loading video
     }
    }

  xhr.send();
}

function initiateLoadingScreen(){
  // hide all existing elements
  document.getElementById("background").style.display = "none";
  document.getElementById("home-wrapper").style.display = "none";
}
