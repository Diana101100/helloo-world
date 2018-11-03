var slideindex =0;
showSlides();
function showSlides() {
   
    var slides = document.getElementsByClassName("myimages")
    for (var i = 0; i < slides.length; i++){
        slides[i].stlye.display="none";
    }
    slideindex++;
    if (slideindex >=slides.length){
        slideindex=0
    }
    slides[slideindex].stlye.display = "block";
    setTimeout(showSlides, 4000);
}
