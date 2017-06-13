function loader(){
  setTimeout(dispLogo,500);
  setTimeout(loaded,5000);
}

function loaded(){
  document.getElementById("logo").style.display = "none";
  document.getElementById("logo-wrapper").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.getElementById("allnavbar").style.display = "block";
}

function dispLogo(){
    var logo = document.getElementById("logo");

    var size = document.documentElement.clientWidth * 0.11;

    var options = {
      size: size,         // Font size, defined by the height of the letters (pixels)
      weight: 3,         // Font weight (pixels)
      rounded: true,    // Rounded letter endings
      color: '#FFFFFF',  // Font color
      duration: 1,       // Duration of the animation of each letter (seconds)
      delay: [0, 0.3],  // Delay animation among letters (seconds)
      fade: 0.5,         // Fade effect duration (seconds)
      easing: d3_ease.easeCubicInOut.ease,   // Easing function
      individualDelays: false,               // If false (default), every letter delay increase gradually, showing letters from left to right always. If you want to show letters in a disorderly way, set it to true, and define different delays for the desired letters.
    };

    var myText = new Letters(logo, options);
    document.getElementById("logo").style.display = "block";
    myText.show();
}
