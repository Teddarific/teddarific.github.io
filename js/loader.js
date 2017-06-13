function loader(){
  setTimeout(dispLogo,500);
  setTimeout(loaded,6700);
}

function loaded(){
  //remove the logo divs
  document.getElementById("logo").style.display = "none";
  document.getElementById("logo-wrapper").style.display = "none";

  //begin bringing home elements
  $(".home").addClass("chgColour");

  $(".home").css("display","flex");
  document.getElementById("home").style.display = "block";
  $("#name").addClass("animated fadeInUp");
  document.getElementById("factwrapper").style.display = "block";
  $("#factwrapper").addClass("animated fadeInUp");

  //bring in navbar and facts
  setTimeout(function(){
    $(".section").css("display","block");
    document.getElementById("allnavbar").style.display = "block";
    $("#allnavbar").addClass("animated fadeInUp");
  },1500);

}

function dispLogo(){
    var logo = document.getElementById("logo");

    var size = document.documentElement.clientWidth * 0.11;

    var col1 = '#985E6D';
    var col2 = '#494E6B';
    var options = {
      size: size,         // Font size, defined by the height of the letters (pixels)
      weight: 5,         // Font weight (pixels)
      rounded: true,    // Rounded letter endings
      color: [col1, //T
              col2, //E
              col2, //D
              col2, //D
              col2, //Y
              col2, //<space>
              col1, //N
              col2  //I
             ],
      duration: 1.3,       // Duration of the animation of each letter (seconds)
      delay: [0.1, 0.3],  // Delay animation among letters (seconds)
      fade: 0.5,         // Fade effect duration (seconds)
      easing: d3_ease.easeCubicInOut.ease,   // Easing function
      individualDelays: false,               // If false (default), every letter delay increase gradually, showing letters from left to right always. If you want to show letters in a disorderly way, set it to true, and define different delays for the desired letters.
    };

    var myText = new Letters(logo, options);
    document.getElementById("logo").style.display = "block";
    myText.show();
    setTimeout(function(){
      myText.hide();
    },3000);
}
