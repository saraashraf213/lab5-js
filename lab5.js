let count = 1;
let img = document.getElementById("img");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let start = document.getElementById("start");
let stop = document.getElementById("stop");

function nextImage() {
    count++;
    if (count > 5) {
        count = 1;
    }
    img.src = "images/" + count + ".jpg";
}
function prevImage() {
    count--;
    if (count < 1) {
        count = 5;
    }
    img.src = "images/" + count + ".jpg";
}
 let interval;
 next.onclick = nextImage;
 prev.onclick = prevImage;
    start.onclick = function() {
       clearInterval(interval); 
    }