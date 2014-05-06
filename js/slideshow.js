/* This script is intended to create a slideshow in the parent element of this script. */

// Contains the list of image names for use with the slide show.
var imagenames = ["../images/1.png", "../images/2.png", "../images/3.png", "../images/4.png"];
// The list of image objects in the slide show
var images = new Array();
// How long between changes on the slide show
var INTERVAL = 5000;
// How long it takes for stuff to fade
var FADE_TIME = 1000;
// The current image being displayed.
var curImage = 0;

// Get the parent element of the script.
var scripts = document.getElementsByTagName('script');
var parent = scripts[scripts.length - 1].parentNode;

// Populate the div with the images
for(var i = 0; i<imagenames.length; i++)
{
    var image = document.createElement("img");
    image.src = imagenames[i];
    image.name="image"+i;
    image.setAttribute("class","slide");
    parent.appendChild(image);
    images[i] = image;
    images[i].setAttribute("style", "display:none");
}

images[0].setAttribute("style", "display:block");

setTimeout(switchImages, INTERVAL);

function switchImages()
{
    $(images[curImage]).fadeOut(FADE_TIME);
    curImage++;
    if(curImage >= images.length) // Wrap around
    {
        curImage = 0;
    }
    $(images[curImage]).fadeIn(FADE_TIME);
    setTimeout(switchImages, INTERVAL);
    
}