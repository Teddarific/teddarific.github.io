$(document).ready(function(){
  /*
  $(function(){
      $("#fact").typed({
           strings: [
                     "a developer.",
                     "a student.",
                     "a thinker.",
                     "an entrepreneur.",
                     "a learner.",
                     "a designer.",
                     "a believer."
                    ],
              typeSpeed: 50
            });
      });
    */

    setTimeout(startTyping,1000)
});

function startTyping(){
  $(function(){
      $("#fact").typed({
           strings: [
                     "a developer.",
                     "a student.",
                     "a thinker.",
                     "a learner.",
                     "a designer.",
                     "a tech lover.",
                    ],
              typeSpeed: 50
        });
    });
}
