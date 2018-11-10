var slideindex = 0;
showSlides();

function showSlides() {
    console.log('heree')
    var slides = document.getElementsByClassName("myimages");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideindex++;
    if (slideindex >= slides.length) {
        slideindex = 0
    }
    slides[slideindex].style.display = "block";
    setTimeout(showSlides, 4000);
}
