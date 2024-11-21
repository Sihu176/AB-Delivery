const ham = document.querySelector('.hamburger');
const navL = document.querySelector('.nav-links');

ham.addEventListener('click', () => {

    navL.classList.toggle('active');
});



const theme = document.querySelector('.theme-toggle');
const body = document.body;

theme.addEventListener('click', () =>{

    body.classList.toggle('dark-mode');

})


// Get buttons by their ID
const exploreFoodsBtn = document.getElementById('exploreFoodsBtn');
const exploreDessertsBtn = document.getElementById('exploreDessertsBtn');
const exploreDrinksBtn = document.getElementById('exploreDrinksBtn');

// Event listener to add the clicked class and trigger visual feedback
exploreFoodsBtn.addEventListener('click', () => {
  // Remove 'clicked' class from other buttons
  exploreDessertsBtn.classList.remove('clicked');
  exploreDrinksBtn.classList.remove('clicked');
  // Add 'clicked' class to the current button
  exploreFoodsBtn.classList.add('clicked');
  // You can also add behavior to show the respective content, for example:
  // window.scrollTo(0, document.getElementById("menu").offsetTop); // Scroll to menu
});

exploreDessertsBtn.addEventListener('click', () => {
  exploreFoodsBtn.classList.remove('clicked');
  exploreDrinksBtn.classList.remove('clicked');
  exploreDessertsBtn.classList.add('clicked');
  // You can add behavior to show desserts content
});

exploreDrinksBtn.addEventListener('click', () => {
  exploreFoodsBtn.classList.remove('clicked');
  exploreDessertsBtn.classList.remove('clicked');
  exploreDrinksBtn.classList.add('clicked');
  // You can add behavior to show drinks content
});
