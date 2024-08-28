import { featuresObject } from "./features-objects.js";
import { uniTechSideBarLinks } from "./features-objects.js";
import { teamProfiles } from "./features-objects.js";


let featuresObjectHTMl = '';

featuresObject.forEach((featureObject) => {
    featuresObjectHTMl = featuresObjectHTMl +
    `
        <div class="col d-flex align-items-start small-screen-column">
          <i class="bi ${featureObject.iconClass}"></i>
          <div>
            <h4 class="fw-bold mb-0">${featureObject.featureName}</h4>
            <p class="features-paragraph">${featureObject.Paragraph}</p>
          </div>
        </div>
    `;
});

document.getElementById('grid-features-container').innerHTML=featuresObjectHTMl;


// Array for Unitech side bar links
let uniTechSideBarLinksHTML = ''

uniTechSideBarLinks.forEach((uniTechSideBarLink) => {
  uniTechSideBarLinksHTML = uniTechSideBarLinksHTML + 
  `
    <li><a href="${uniTechSideBarLink.Url}">${uniTechSideBarLink.text}</a></li>
  `
});

document.getElementById('unitech-section').innerHTML = uniTechSideBarLinksHTML;


let FeaturesSideBarHTML = ''

featuresObject.forEach((featureSideBar) => {
  FeaturesSideBarHTML = FeaturesSideBarHTML + 
  `
    <li><a href="${featureSideBar.linkUrl}">${featureSideBar.featureName}</a></li>
  `
});

document.getElementById('Features-link').innerHTML = FeaturesSideBarHTML;


// Array to Generate the Universal Tech Team Profile View
let uniTechTeamHTML = ''

teamProfiles.forEach((teamProfile) => {
  uniTechTeamHTML = uniTechTeamHTML + 
  `
    <div class="team-profile-container">
      <img class="profile-team-image" src="${teamProfile.profileImage}" 
      width="60px" height="60px" alt="">
      <div class="profile-information">
        <p class="team-profile-name">${teamProfile.ProfileName}</p>
        <small class="job-category">${teamProfile.profileCategory}</small>
      </div>
      <i class="bi team-icon-class ${teamProfile.iconClassBi}"></i>

      
    </div>

  `
});

document.getElementById('Team-profile-and-management').innerHTML = uniTechTeamHTML;



// Get slider elements
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Set initial slide index
let currentSlideIndex = 0;

// Function to show current slide
function showCurrentSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Function to handle next button click
function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showCurrentSlide();
}

// Function to handle previous button click
function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showCurrentSlide();
}

// Add event listeners to buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Autoplay
setInterval(nextSlide, 111000);

// Initialize slider
showCurrentSlide();


const menuBarDisplay = 
document.getElementById('js-ease-in-menu-bar');

const menuBar = document.querySelector('.sidebar-container')

const iconsDisplay = document.querySelector('.menu-list-drop')

const cancelIconDisplay = document.querySelector('.cancel-menu')

menuBarDisplay.addEventListener('click', () => {
  menuBar.classList.toggle('active-menu');

  iconsDisplay.classList.toggle('none');

  cancelIconDisplay.classList.toggle('block');
  
  menuBar.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: 600,
    easing: 'ease-in'
  });
});





const dropDownFeaturesBtn = 
document.getElementById('js-drop-down-features-btn');

const dropDownLinks = 
document.getElementById('js-ul-drop-down-link');

  dropDownLinks.classList.add('hiding');

  dropDownFeaturesBtn.addEventListener('click', () => {
    if
    (dropDownLinks.classList.contains('showing')) {
      dropDownLinks.classList.remove('showing');
        dropDownLinks.classList.add('hiding');
    } else {
      dropDownLinks.classList.remove('hiding');
      dropDownLinks.classList.add('showing');
    }
  });

