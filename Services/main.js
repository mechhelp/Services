const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let isPaused = false;
let intervalId;
let startX = 0;
let deltaX = 0;
let isSwiping = false;

function updateSlider() {
    slides.forEach((slide, index) => {
        const slideIndex = (index - currentIndex + slides.length) % slides.length;
        slide.style.transition = 'transform 0.3s ease, opacity 0.3s ease';  // Smooth transition

        if (slideIndex === 0) {
            slide.style.transform = 'translate3d(-300px, 0, -200px) scale(0.9)';
            slide.style.opacity = '0.5';
            slide.classList.remove("ac");
        } else if (slideIndex === 1) {
            slide.style.transform = 'translate3d(0, 0, 0) scale(1)';
            slide.style.opacity = '1';
            slide.classList.add("ac");
        } else if (slideIndex === 2) {
            slide.style.transform = 'translate3d(300px, 0, -200px) scale(0.9)';
            slide.style.opacity = '0.5';
            slide.classList.remove("ac");
        }
    });

    // Update dot indicators
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function moveSlider() {
    if (!isPaused) {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }
}

function startSlider() {
    intervalId = setInterval(moveSlider, 4000); 
}

function pauseSlider() {
    isPaused = true;
    clearInterval(intervalId);
    setTimeout(() => {
        isPaused = false;
        startSlider();
    }, 10000); 
}

// Swipe functionality
function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    deltaX = 0;
    isSwiping = true;
    slides.forEach(slide => slide.style.transition = 'none'); // Disable transition during swipe
}

function handleTouchMove(event) {
    if (!isSwiping) return;

    deltaX = event.touches[0].clientX - startX;
    
    // Update slide positions as user swipes
    slides.forEach((slide, index) => {
        const offset = (index - currentIndex) * 300 + deltaX; // Dynamic offset with swipe
        slide.style.transform = `translate3d(${offset}px, 0, ${Math.abs(offset) < 1 ? 0 : -200}px) scale(${Math.abs(deltaX) < 1 ? 1 : 0.9})`;
    });
}

function handleTouchEnd() {
    if (!isSwiping) return;
    isSwiping = false;

    // Check if the swipe was long enough to change slides
    if (deltaX < -100) {
        // Swipe left
        currentIndex = (currentIndex + 1) % slides.length;
    } else if (deltaX > 100) {
        // Swipe right
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }

    updateSlider(); // Apply updated slide positions with smooth transition
    slides.forEach(slide => slide.style.transition = 'transform 0.3s ease, opacity 0.3s ease');
}

slides.forEach(slide => {
    slide.addEventListener('click', pauseSlider);
    slide.addEventListener('touchstart', handleTouchStart);
    slide.addEventListener('touchmove', handleTouchMove);
    slide.addEventListener('touchend', handleTouchEnd);
});

startSlider();
updateSlider();

function imgclick() {
    let selectedItem = "I choose Mech Basic plan which contains Engine oil change, Oil Filter Replacement, Tire Pressure Check, Air filter check, electrical checkup, bush cleaning, washing.";
    var message = encodeURIComponent("Hi, I am interested in " + selectedItem + ". Can you give more details?");
    var whatsappURL = "https://api.whatsapp.com/send?phone=9270199836&text=" + message;
    window.open(whatsappURL, '_blank');
}


function imgclick1(){
  let selectedItem = "I choose Mech lite plan which contain Engine oil change,Oil FilterReplacement,Type Pressure Check,Air filter check, electrical checkup ."; 
  var message = encodeURIComponent("Hi, I am interested in " + selectedItem + ". Can you give more details?");
  var whatsappURL = "https://api.whatsapp.com/send?phone=9270199836&text=" + message;
  window.open(whatsappURL, '_blank');

}
function imgclick2(){
  let selectedItem = "I choose Mech lite plan which contain Engine oil change,Oil FilterReplacement,Type Pressure Check,Air filter check, electrical checkup ."; 
  var message = encodeURIComponent("Hi, I am interested in " + selectedItem + ". Can you give more details?");
  var whatsappURL = "https://api.whatsapp.com/send?phone=9270199836&text=" + message;
  window.open(whatsappURL, '_blank');

}

let ham= document.querySelector("ham");
ham.addEventListener("click",()=>{
  const referralLink = "https://www.mechhelp.in/"; // Phone number as referral code
  window.open(referralLink)
})