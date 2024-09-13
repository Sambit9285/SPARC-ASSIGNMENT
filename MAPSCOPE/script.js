
// Toggle Navbar for Mobile and Background Blur
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');


menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active'); // Toggle blur class
});
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Show the first slide
showSlide(currentSlide);

// Next button event listener
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Previous button event listener
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Function to display the current slide
function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

// Auto-play carousel
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000); // 4 seconds interval
