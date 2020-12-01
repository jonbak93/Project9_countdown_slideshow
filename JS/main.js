var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot"); //connecting "mySlides" and "dot" with CSS & HTML
    if (n > slides.length) { slideIndex = 1 } //the next two lines of code put the slides in a position of only moving one at a time
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) { //displaying one slide at a time
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}





function countdown() { //creating countdown timer function
    var seconds = document.getElementById("seconds").value; //linking user-inputed value to timer

    function tick() { //creating actual timer
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000); //add as much as 1000 seconds
        if (seconds == -1) { //as soon as timer gets to 0, an alert box opens
            alert("Time's up!");
        }

    }
    tick();
}
