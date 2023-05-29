// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["a1.jpg", "a2.jpg", "a3.jpg", "04.jpg", "07.jpg"];
/*
// Function To Randomize Imgs
function randomizeImgs() {

  if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {

      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
      // Change Background Image Url 
      landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
    }, 1000);

  }

};
*/
// Function To Randomize Imgs
setInterval(() => {
  
        // Get Random Number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
      
        // Change Background Image Url 
        landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
      
      }, 10000);
  
// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);


