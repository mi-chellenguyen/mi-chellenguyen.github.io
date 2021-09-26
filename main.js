// Hamburger menu toggle
const toggleHamburgerButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]

toggleHamburgerButton.addEventListener("click",() => {
    navBarLinks.classList.toggle("active")
})

// Navbar animaton on scroll
const navBar = document.getElementById('navbar')
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
    const aboutSection = document.querySelector('#about');
    const projectsSection = document.querySelector('#projects');
    const contactSection = document.querySelector('#contact');

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );
    navBar.style.background = "none"
    navBar.style.transform = "translateY(-52.67px)"
    navBarLinks.classList.remove("active");

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
        if (window.matchMedia('screen and (max-width:600px)').matches) {
            navBar.style.background = "rgb(25, 25, 25, 0.5)"
        } 
        else {
            if (window.scrollY == 0 
                || aboutSection.getBoundingClientRect().top == 0
                || projectsSection.getBoundingClientRect().top == 0
                || contactSection.getBoundingClientRect().top <= 1) {

                navBar.style.background = "none"
            } 
            else {
                navBar.style.background = "rgb(25, 25, 25, 0.5)"
            }
        }
        navBar.style.transform = "translateY(0px)"


	}, 300);

}, false);