
//TYPER FUNCTION ORIGINAL INSPIRATION SOURCE: http://www.bootply.com/rSd1F5vUaM
//ORIGINAL VERSION CREATED BY tjgrendel
//Modified version created by Teddy Ni
$.fn.typer = function(text, options){

    //Options
    options = $.extend({}, {
        char: ' ',
        delay: 1000, //Delay between switching facts
        duration: 600, //how long each fact lasts
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

            //Original: iterate through each fact
            /**
            i++;
            if (i === text.length && !options.endless) {
                return;
            } else if (i === text.length) {
                i = 0;
            }
            */

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
  $('#fact').typer([" plays soccer",
                    " enjoys doing web development",
                    " is from Rhode Island",
                    " can solve a rubik's cube",
                    " loves longboarding",
                    " is a member of Sigma Phi Epsilon",
                    " loves traveling around the world",
                    " has very, very, very small hands",
                    " is an Arsenal supporter",
                    " actually likes algorithms",
                    " is beginning to fall for coffee",
                    " has way too many shoes",
                    " enjoys himself a nice pen",
                    " prefers the fall and spring",
                    " is Chinese American",
                    " wants to join a start-up",
                    " is probably taking a nap right now",
                    " likes telling dumb jokes",
                    " dies for sushi",
                    " cannot wait for Friday",
                    " needs to work more on the website"
                  ]);
});