function gridjs(size) {
  console.log("🎇 Grid.js launched");

  if (!size) {
    console.log("%csize is not defined", "color:white; background-color: orange; padding: 5px");
    size = 10;
    console.log("%cdefault size value setted (10)", "color:white; background-color: blue; padding: 5px");
  } else {
    console.log("%csize value is setted on %c" + size + " ✔️", "color: green; padding: 25px 0", "font-weight: bold; color: green");
  }

  // ENGINE START ##################################################

  // get the grid container size
  var container_width = $(".grid-container").width();
  var container_height = $(".grid-container").height();

  console.log("↔️ container width : " + container_width + "px");
  console.log("↕️ container height : " + container_height + "px");

  console.log("");

  // calcul square sizes
  var square_width = size + "%";
  var square_height = size + "%";

  console.log("↔️ square width : " + square_width);
  console.log("↕️ square height : " + square_height);

  console.log("");

  // calcul square(s) number
  var iteration = Math.pow(100 / size, 2);

  // GENERATION SCRIPT
  if (size != null) {
    for (i = 0; i < iteration; i++) {
      var newDiv = document.createElement('div');
      newDiv.className = 'square';
      newDiv.style.width = square_width;
      newDiv.style.height = square_height;
      $(".grid-container")[0].appendChild(newDiv);
      console.log("%cgenerated ✔️", "color:white; background-color: green; padding: 10px");
    }
  }

  //###############################################################

  // SQUARE RESPONSIVE CHECKER ######################################
  $(window).resize(function() {
    console.log("Hey dude, window has been resized !");
  });
  //#################################################################

  // ANIMATIONS ####################################################

  // when mouse is entering a square
  $(".square").mouseenter(function() {
    var target = this;

    target.style.transition = "none";
    target.style.backgroundColor = "rgba(255,255,255,.5)";
    // console.log('%ctransition removed', 'color: red');

    setTimeout(function() {
      target.style.transition = "background-color 2s ease-in-out";
      // console.log('%ctransition setted', 'color: green');
    }, 0);
  });

  // when mouse is leaving a square
  $(".square").mouseleave(function() {
    var target = this;
    target.style.backgroundColor = "transparent";
  });
}

//##############################################################