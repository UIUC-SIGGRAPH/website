
// Contains the list of images for use with the slide show.
var images = new Array();

var INTERVAL = 3000;

var curImage = 0;

var name = imageName;

// Sets up the slideshow, populating the images array.
// The imageName parameter is the name of the img element to mess with.
function setUpSlides(imageName)
{
    // TODO: Do some logic to figure out which images to use
    images[0] = "../images/1.png";
    images[1] = "../images/2.png";
    images[2] = "../images/3.png";
    images[3] = "../images/4.png";
    
    name = imageName;
    
    window.setInterval(switchImages, INTERVAL);
}

function switchImages()
{
    window.document.getElementById(name).src = images[curImage];
    curImage++;
    if(curImage >= images.length) // Wrap around
    {
        curImage = 0;
    }
    //window.setInterval(switchImages(imageName), INTERVAL);
}