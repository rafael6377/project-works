 
const imageElement = document.querySelector('.imagg', '.logo1');

// Set up the array of image file paths
const imagePaths = ['image33.jpg', '44index.jpg', '33index.jpg', 'course22.jpg'];

// Set up a counter to keep track of the current image index
let currentImageIndex = 0;

// Set up the interval to change the image every 1000 milliseconds (1 second)
setInterval(() => {
  // Update the source of the image element
  imageElement.src = imagePaths[currentImageIndex];

  // Increment the counter
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
}, 4000);

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 1000000 + 30 * i
  });


  
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 1000000 + 30 * i
  });


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml14 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 1000000 + 30 * i
  });


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml15');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml15 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 8000 + 30 * i
  });


/*const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);

/*code for mouce hover
window.onload=function(){

    // selecting the elements for which we want to add a tooltip
    const target = document.getElementById("tooltip-button");
    const tooltip = document.getElementById("tooltip-text");
    
    // change display to 'block' on mouseover
    target.addEventListener('mouseover', () => {
      tooltip.style.display = 'block';
    }, false);
    
    // change display to 'none' on mouseleave
    target.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    }, false);
    
}*/
function slideIn(){
    var content = document.getElementById('sidebar')
    content.style.width = '100%'
    content.style.justifyContent = "center"
}
function opensideNav (){
   var content = document.getElementById("content")
    content.style.display = "block"
    setTimeout(slideIn,50)

}
function slideOut (){
    var reversesideNav = document.getElementById("sidebar")
   reversesideNav.style.width = '0';

}
function  reversesideNav (){
    var reverseContent = document.getElementById("content")
    reverseContent.style.display = "block";
    setTimeout(slideOut,50)

}

/*const wildcover = document.getElementsByClassName('wildcover');
const colors = ['red', 'blue', 'green', 'purple'];
const SQUARES = 500;

for(let i = 0; i< SQUARES; i++){
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseout', () => removeColor(square));

  wildcover.appendChild(square);

}
function setColor(element){
    const color = getRandomColor()
    element.style.background = color;
    element.style.boxshadow = '0 0 2px ${color}, 0 0 10px ${color}'
}

function removeColor(element){
  element.style.background = '1d1d1d';
  element.style.boxShadow = '0 0 2px #000'
}*/






