let slideIndex = 1;
let slideTimer; // Variable to store the timer

// Initialize the slideshow
showSlides(slideIndex);
startAutoSlide(); // Start automatic slideshow

// Next/previous controls
function plusSlides(n) {
    clearInterval(slideTimer); // Clear the timer when manual navigation is used
    showSlides(slideIndex += n);
    startAutoSlide(); // Restart the automatic slideshow
}

// Thumbnail image controls
function currentSlide(n) {
    clearInterval(slideTimer); // Clear the timer when manual navigation is used
    showSlides(slideIndex = n);
    startAutoSlide(); // Restart the automatic slideshow
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the current slide
    slides[slideIndex-1].style.display = "block";
    
    // Update dots and caption if they exist
    if (dots.length > 0) {
        dots[slideIndex-1].className += " active";
        if (captionText) {
            captionText.innerHTML = dots[slideIndex-1].alt;
        }
    }
}

// Function to start automatic slideshow
function startAutoSlide() {
    // Clear any existing timer
    clearInterval(slideTimer);
    
    // Set new timer to change slides every 3 seconds
    slideTimer = setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

// Optional: Pause slideshow when user hovers over it
document.querySelector('.gallery').addEventListener('mouseenter', function() {
    clearInterval(slideTimer);
});

// Optional: Resume slideshow when user moves mouse away
document.querySelector('.gallery').addEventListener('mouseleave', function() {
    startAutoSlide();
});