// open and close the legal text
const legalText = document.getElementsByClassName(`legalText`); 
const openText = () => {
    legalText[0].style.display = `flex`;
} 
function closeText() {
    legalText[0].style.display = `none`;
} 

// animations between frames
const tl = new TimelineMax({delay: 1, repeat: -1, repeatDelay: 0})
tl.staggerFrom(`.animation`, 1, {x:-50, opacity:0}, 5)
tl.staggerTo(`.animation`, 1, {zIndex: -30, x:-100, opacity:0}, 5, 5);