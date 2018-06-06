//Number of pixels for the width and the height
var screen_width = $(document).width();
var screen_height = $(document).height();

var input = prompt("Enter the pixel size", "5");

//Boxes size
var pixel_width = input + "vw";
var pixel_height = input + "vh";

//Loop iteration calcul
var iteration = Math.pow(100 / input, 2);

//Creation of all the boxes
if (input != null) {
    for (i = 0; i < iteration; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'pixel';
        newDiv.style.width = pixel_width;
        newDiv.style.height = pixel_height;
        document.getElementsByTagName('body')[0].appendChild(newDiv);
        console.log("Boucle done");
    }
}

$("div").hover(function () {
    var target = this;

    target.style.transition = "none";
    console.log('%ctransition removed', 'color: red');

    /*target.style.backgroundColor = "purple";*/

    setTimeout(function () {
        target.style.transition = "background-color 2s ease-out 0s";
        console.log('%ctransition setted', 'color: green');
        /*target.style.backgroundColor = "green";*/
    }, 10);
    setTimeout(function () {
        target.style.transition = "none";
        console.log('%ctransition removed', 'color: red');
        target.style.backgroundColor = "red";
    }, 2000);
});