const toggleHamburgerButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]

toggleHamburgerButton.addEventListener('click',() => {
    navBarLinks.classList.toggle('active')
})