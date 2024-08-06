document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuLinks = document.querySelector('.menu-links');

    hamburgerMenu.addEventListener('click', function () {
        menuLinks.classList.toggle('open');
    });

    // CV download link functionality
    const downloadLink = document.getElementById('downloadCV');
    
    downloadLink.addEventListener('click', function (event) {
        console.log('CV download link clicked');
    });
});
