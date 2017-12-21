$(document).ready(function(){

});

function initiateFacts(){
  var vid = document.getElementsByTagName('video')[0]
  var lab = document.getElementById('name');
  var triggered = {};

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

  vid.addEventListener('click',function(){ video.play(); },false);

  vid.addEventListener('timeupdate',function(event){
    var time = parseInt(vid.currentTime);
    // lab.innerHTML = parseInt(vid.currentTime);

    // reset what we've seen
    if ( time == 0 ){
      triggered = {};
    }

    // check for transition times
    if ( (time == 7 || time == 16 || time == 24 || time == 33 || time == 40) && triggered[time] === undefined ){
      triggered[time] = true;
      controller.next();

      // change colors
      if ( time == 16 ){
        $('#home').css('color', 'black');
        $('.fa').css('color','black');
        $('.fa:hover').css('color','black');
        $('.fa:active').css('color','black');
        $('.fa:visited').css('color','black');
        $('.fa:focus').css('color','black');
        $('.fa').addClass('reverse');
      }
      else if ( time == 24 ){
        $('#home').css('color', 'white');
        $('.fa').css('color','white');
        $('.fa:hover').css('color','white');
        $('.fa:active').css('color','white');
        $('.fa:visited').css('color','white');
        $('.fa:focus').css('color','white');
        $('.fa').removeClass('gitreverse');

      }
    }

  },false);
}
