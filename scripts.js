// Get the container element
const container = document.querySelector('.sec5-cards');
// Get the button element
const button = document.querySelector('.next-button');

// Get all the image elements within the container
const images = container.querySelectorAll('.sec5-card');
let i;
if (window.innerWidth < 768){
     i=1
}else{
    i=3
}
for (let i ; i < images.length; i++) {
         images[i].style.display = 'none';
       }
// Counter to keep track of the current set of images
let currentSet = 0;

// Number of images to display in each set
let imagesPerSet;
if (window.innerWidth < 768){
    imagesPerSet = 1;
}else{
    imagesPerSet = 3;

}

function showNextCards() {
  // Hide all images
  images.forEach((image, index) => {
    if (index >= currentSet * imagesPerSet && index < (currentSet + 1) * imagesPerSet) {
      // Display images in the current set
      image.style.display = 'block';
    } else {
      // Hide images outside the current set
      image.style.display = 'none';
    }
  });

  // Increment the current set
  currentSet++;

  // Reset the current set to 0 if it exceeds the total number of sets
  if (currentSet * imagesPerSet >= images.length) {
    currentSet = 0;
  }

  // Hide the button if there are only three images
  if (images.length <= imagesPerSet) {
    button.style.display = 'none';
  }
}
