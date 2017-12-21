$(document).ready(function(){
    var vid = document.getElementsByTagName('video')[0]
    var lab = document.getElementById('name');
    var triggered = {};

    vid.addEventListener('timeupdate',function(event){
      var time = parseInt(vid.currentTime);
      // lab.innerHTML = parseInt(vid.currentTime);

      if ( time == 3 && triggered[time] === undefined){
        triggered[time] = true;
        var options = {
          strings: [
                    "a developer."
                   ],
             typeSpeed: 50,
             loop: false,
        };
        var controller = new Typed($("#fact")[0], options);
        var execBack = function(){
          controller.backspace("a developer.", 5);
        }
        setTimeout(execBack, 5000);
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
