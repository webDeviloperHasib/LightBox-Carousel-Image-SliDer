let index = 1;
let slide = document.getElementsByClassName('myslide');
let dot = document.getElementsByClassName('dot');
let caption = document.querySelector('.changetext');

function showSlide(n){
    if(n > slide.length){index = 1}
    if(n < 1){index = slide.length}
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = "none"
    }
    for(let j = 0 ; j < dot.length; j++){
        dot[j].className = dot[j].className.replace(" active", "")
    }
    slide[index-1].style.display = "block"
    dot[index-1].className += " active"
    caption.innerHTML  = dot[index-1].alt 
}

showSlide(index)
let blackbery = document.querySelector('.blackbery')
let mainFirst = document.querySelector('.mainFirst');
function openmodal(){
    blackbery.style.display = "block"
    mainFirst.style.display = "none"
}
function closemodal(){
    blackbery.style.display = "none"
    mainFirst.style.display = "block"
}

function plus(n){
    showSlide(index += n)
}
function current(n){
    showSlide(index = n)
}

