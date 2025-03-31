// display navbar on mobile screens
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}

// ------------------ used for change homepage images-----------------------
const imgs = document.querySelectorAll('.home-page img');
const prev_btn = document.querySelector('.control_prev');  // Corrected selector for prev button
const next_btn = document.querySelector('.control_next');  // Corrected selector for next button

let n = 0;

function changeSlide() {
    // Hide all images
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    // Show the current image
    imgs[n].style.display = 'block';
}

// Call the function initially to display the first image
changeSlide();

// Event listener for the previous button
prev_btn.addEventListener('click', () => {
    if (n > 0) {
        n--;  // Move to previous image
    } 
    else {
        n = imgs.length - 1;  // Wrap to the last image if at the first one
    }
    changeSlide();  // Update the slide after the change
});

// Event listener for the next button
next_btn.addEventListener('click', () => {
    if (n < imgs.length - 1) {
        n++;  // Move to next image
    } 
    else {
        n = 0;  // Wrap to the first image if at the last one
    }
    changeSlide();  // Update the slide after the change
});




