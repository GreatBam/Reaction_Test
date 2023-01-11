let start = new Date().getTime();
let shape = document.getElementById("shape")
let tCounterId = document.getElementById("tCounterId");

function colorRNG() {
    let letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color+=letter[Math.floor(Math.random()*16)];
    }
    console.log("actual color : " + color)
    return color;
}

function shapeCreator() {
    let top = Math.random()*150;
    let left = Math.random()*400;
    let width = (Math.random()*300)+50;

    if (Math.random() > 0.5) {
        shape.style.borderRadius = "100%";
    } else {
        shape.style.borderRadius = "0";
    }

    shape.style.backgroundColor = colorRNG();
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.width = width + "px";
    shape.style.height = width + "px";
    shape.style.display = "block";
    start = new Date().getTime();
}

function shapeDelay() {
    setTimeout(shapeCreator, Math.random()*2000);
}

shape.onclick = function() {
    shape.style.display = "none";
    let end = new Date().getTime();
    let tCounter = (end-start)/1000;
    tCounterId.innerHTML = tCounter + "s";
    shapeDelay();
}