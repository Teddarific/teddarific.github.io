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

    vid.addEventListener('timeupdate',function(event){
      var time = parseInt(vid.currentTime);
      // lab.innerHTML = parseInt(vid.currentTime);

      // reset what we've seen
      if ( time == 0 ){
        triggered = {};
      }
      if ( time == 0 && triggered[time] === undefined && time != 30){
        triggered[time] = true;
        controller.next();

        // var execBack = function(){
        //   controller.backspace("a developer.", 5);
        // }
        // setTimeout(execBack, 5000);
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
