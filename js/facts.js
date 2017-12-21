$(document).ready(function(){
    var vid = document.getElementsByTagName('video')[0]
    var lab = document.getElementById('name');
    var triggered = {};

    var options = {
      strings: [
                "a developer.",
                "a learner.",
                "a designer.",
                "a thinker.",
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
      if ( (time == 7 || time == 16 || time == 24 || time == 33 || time == 40) && triggered[time] === undefined ){
        triggered[time] = true;
        controller.next();
      }

    },false);

    // setTimeout(startTyping,1000)
});

/*
function startTyping(){
  $(function(){
      $("#fact").typed({
           strings: [
                     "a developer.",
                     "a learner.",
                     "a designer.",
                     "a thinker.",
                     "an explorer."
                    ],
              typeSpeed: 50
        });
    });
}
*/
