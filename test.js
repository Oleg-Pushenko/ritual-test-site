document.getElementById('testimonials_slider-left').onclick = sliderLeft;
var left = 396;

function sliderLeft() {
    left -= 396;
    if (left < -2772){
        left = 0;
    }
    var horizontal = document.getElementById('testimonials_horizontal');
    horizontal.style.left = left+'px';
}

document.getElementById('testimonials_slider-right').onclick = sliderRight;
var right = -3168;

function sliderRight() {
    right += + 396;
    if (right > 0){
        right = -2772;
    }
    var horizontal = document.getElementById('testimonials_horizontal');
    horizontal.style.left = right+'px';
}
