
//TYPER FUNCTION ORIGINAL INSPIRATION SOURCE: http://www.bootply.com/rSd1F5vUaM
//ORIGINAL VERSION CREATED BY tjgrendel
//Modified version created by Teddy Ni
$.fn.typer = function(text, options){

    //Options
    options = $.extend({}, {
        char: ' ',
        delay: 2000, //Delay between switching facts
        duration: 1000, //how long each fact lasts
        endless: true
    }, options || text);

    text = $.isPlainObject(text) ? options.text : text;

    var elem = $(this),
        isTag = false,
        c = 0;

    //i is fact number
    (function typetext(i) {
        var e = ({string:1, number:1}[typeof text] ? text : text[i]) + options.char,
            char = e.substr(c++, 1);

        if( char === '<' ){ isTag = true; }
        if( char === '>' ){ isTag = false; }
        elem.html(e.substr(0, c));
        if(c <= e.length){
            if( isTag ){
                typetext(i);
            } else {
                setTimeout(typetext, options.duration/10, i);
            }
        } else {
            c = 0;
            //Find random fact instead:
            var k;
            do{
              k = Math.floor((Math.random() * text.length));
            }
            while( i == k) //Ensure a different fact each time
            i = k;

            setTimeout(typetext, options.delay, i);
        }
    })(0);
};


$(document).ready(function(){
  $('#fact').typer([
                    "is from Rhode Island",
                    "can solve a rubik's cube",
                    "is a member of Sigma Phi Epsilon",
                    "Developer",
                    "Designer",
                    "Thinker",
                    "Entrepreneur",
                    "Student",
                    "Learner",
                  ]);
});
