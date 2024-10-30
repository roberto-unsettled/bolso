var timeReset =         0; //0 => no bucle


function stopAnimation() {
    var elements =  document.getElementsByClassName('animado'),
        i,
        elm,
        newone;

    for (i = 0; i < elements.length; i = i + 1) {
        elm = elements[i];
        newone = elm.cloneNode(true);
        
        elm.parentNode.replaceChild(newone, elm);
    }
    startAnimation();
}

function startAnimation() {
    var elements =  document.getElementsByClassName('animado'),
        i;
    for (i = 0; i < elements.length; i = i + 1) {
        elements[i].style.animationPlayState =          'running';
        elements[i].style.webkitAnimationPlayState =    'running';
        elements[i].style.MozAnimationPlayState =       'running';
    }
    if (timeReset > 0) {
        setTimeout(function () {
            stopAnimation();
        }, timeReset);
    }
}

function startAd() {
    document.getElementById('ad').style.visibility =    'visible';
    startAnimation();
}

window.onload = function(e){ 
    startAd();
}