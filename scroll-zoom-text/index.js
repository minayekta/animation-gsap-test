////

const text = document.querySelector('.zoom-text');

// Function to handle the scroll and zoom animation
function zoomOnScroll() {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    // Calculate the scale factor based on scroll percentage
    const scaleFactor = 1 + (scrollPercentage / 10);

    // Apply the scale transformation to the text
    gsap.to(text, {
        scale: scaleFactor,
        ease: 'power1.out', // You can adjust the easing function
    });
    gsap.to(text, {
        scale: scaleFactor,
        ease: 'power2.out', // You can adjust the easing function
    });
}

// Add scroll event listener to trigger the animation
window.addEventListener('scroll', zoomOnScroll);