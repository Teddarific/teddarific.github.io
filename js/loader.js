$(document).ready(function(){
  // check if mobile
  var isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  if ( isMobile ){
    setupMobileEnv();
  }
  else {
    preloadVideo();
  }
});


function preloadVideo(){
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
    var buffStartTime = 18;
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

    $('#background').fadeIn(1000);
    $('#home-wrapper').fadeIn(4000);
    document.getElementById("background").style.display = "flex";
    document.getElementById("home-wrapper").style.display = "flex";
  }, 1500);

}

function fullyPreloadVideo(){
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
      transition();
      initiateFacts();
     }
     else {
       console.log("Failed to load video");
       // insert code to deal with not loading video
     }
    }

  xhr.send();
}

/********

MOBILE SLIDE SHOW FOR PERFORMANCE REASONS

*********/


function setupMobileEnv(){

  // remove video element and class
  $("#background").html('');
  $('#background').removeClass('fullscreen-bg').addClass('mobile-back');

  /*

  background-image: url('img_flowers.jpg');
    background-size: cover;

    */

  var currVal = 0;
  var i = setInterval(function(){
    if ( currVal < 100 ){
      currVal += Math.floor(Math.random() * 10);
      document.getElementById("percent").innerHTML = "" + currVal + "%";
    }

    if ( currVal >= 100 ){
      document.getElementById("percent").innerHTML = "100%";
      mobileTransition();
      clearInterval(i);
    }
  }, 50);
}

function mobileTransition(){
  $('.preloader').fadeOut(1000);
  setTimeout(function(){
    $('#home-wrapper').addClass('visible');
    $('#background').addClass('visible');

    $('#background').css('background-image', 'url("img/Code.png")');
    $('#background').css('background-size', 'cover');

    $('body').css('background-size', 'cover');

    $('#background').fadeIn(1500);
    $('#home-wrapper').fadeIn(4000);
    document.getElementById("home-wrapper").style.display = "flex";

    // initialize facts
    var options = {
      strings: [
                "a developer.",
                "a learner.",
                "a designer.",
                "a dreamer.",
                "an explorer."
               ],
         typeSpeed: 50,
         startDelay: 0,
    };
    var controller = new Typed($("#fact")[0], options);
    slideShow(controller);
  }, 1500);
}

function slideShow(controller){
  var pics = [
    "img/Code.png",
    "img/Dartmouth.png",
    "img/Design.png",
    "img/City.png",
    "img/Arc.png"
  ]
  var index = 0;

  var i = setInterval(function(){

    index = index == pics.length - 1 ? 0 : index + 1;
    url = "url('" + pics[index] + "')";
    $('body').css('background-image', url);

    $('#background').fadeOut(1000);
    setTimeout(function(){
      $('#background').css('background-image', url);
      $('#background').css('display', 'flex');
    }, 1200)


    if ( index == 2 ){
      $('#home').css('color', 'black');
      $('.fa').css('color','black');
      $('.fa:hover').css('color','black');
      $('.fa:active').css('color','black');
      $('.fa:visited').css('color','black');
      $('.fa:focus').css('color','black');
      $('.fa').addClass('reverse');
    }
    else if ( index == 3 ){
      $('#home').css('color', 'white');
      $('.fa').css('color','white');
      $('.fa:hover').css('color','white');
      $('.fa:active').css('color','white');
      $('.fa:visited').css('color','white');
      $('.fa:focus').css('color','white');
      $('.fa').removeClass('reverse');
    }
    controller.next();
  }, 7000);
}
