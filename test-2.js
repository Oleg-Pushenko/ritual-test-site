document.getElementById('instagram_slider-left').onclick = instagramSliderLeft;
var leftq = 300;

function instagramSliderLeft() {
    leftq -= 300;
    if (leftq < -1800){
        leftq = 0;
    }
    var inst_horizontal = document.getElementById('inst_horizontal');
    inst_horizontal.style.left = leftq+'px';
}

document.getElementById('instagram_slider-right').onclick = instagramSliderRight;
var rightq = -2100;

function instagramSliderRight() {
    rightq += + 300;
    if (rightq > 0){
        rightq = -1800;
    }
    var inst_horizontal = document.getElementById('inst_horizontal');
    inst_horizontal.style.left = rightq+'px';
}
