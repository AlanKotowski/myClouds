// DROPDOWN MENU & SMOL DROPDOWN MENU

const menuWrapper = document.querySelector('.menuWrapper');
const burgerMenu = document.querySelector('.burgerMenu');

burgerMenu.addEventListener('click', () => {
    menuWrapper.classList.toggle('menuWrapperOn');
})

const timelapseDIYList = document.querySelector('.timelapseDIYList')
const timelapseDIY = document.querySelector('.timelapseDIY');
const timelapseTriangle = document.querySelector('.timelapseTriangle');


timelapseDIYList.addEventListener('click', ()=> {
    timelapseDIY.classList.toggle('timelapseDIYOn');
    timelapseTriangle.classList.toggle('timelapseTriangleOn');
   
})

// WINDOWS EASE-IN & OUT

const elements = document.querySelectorAll(".easing");

const onScroll = () => {
    const yScroll = window.pageYOffset;
    const bodyRect = document.body.getBoundingClientRect();

    elements.forEach((el) => {
      const cloudRect = el.getBoundingClientRect();
      const windowPosition = cloudRect.top - bodyRect.top - 200;
      const condition = yScroll >= windowPosition;
      
      if (condition) el.classList.add('easingOn');
      else el.classList.remove('easingOn');
    })
}

window.addEventListener("scroll", onScroll)

// TIMELAPSE GALERY

let actualTimelapse = document.querySelector('.actualTimelapse');


const video = document.createElement("VIDEO");
video.controls = "controls", "muted";
actualTimelapse.appendChild(video);
let timelapse = document.querySelectorAll('.timelapse');
actualThumbnail = timelapse[0];
video.src = actualThumbnail.getAttribute('src');

for (let i = 0; i < timelapse.length; i++) {
    timelapse[i].onclick = function() {
        video.src = this.getAttribute('src');
    }
    timelapse[i].onmouseover = function() {
        timelapse[i].play();
       
        
    }
    timelapse[i].onmouseout = function() {
        timelapse[i].pause();      
    }
}

// TIMELAPSE GALERY CAROUSEL

const previousTimelapse = document.querySelector('.previousTimelapse');
const nextTimelapse = document.querySelector('.nextTimelapse');
const timelapses = document.querySelector('.timelapses');
previousTimelapse.addEventListener('click', () => {
    
    timelapses.classList.remove('timelapsesOn');
    previousTimelapse.classList.add('previousTimelapseOn');
    nextTimelapse.classList.remove('nextTimelapseOn');
})

nextTimelapse.addEventListener('click', () => {
    
    timelapses.classList.add('timelapsesOn');
    nextTimelapse.classList.add('nextTimelapseOn');
    previousTimelapse.classList.remove('previousTimelapseOn');
})



