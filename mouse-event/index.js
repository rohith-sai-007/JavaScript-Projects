const xcoord = document.getElementById("xcoord");
const ycoord = document.getElementById("ycoord");

document.addEventListener("mousemove",(event) => {
    xcoord.innerHTML = event.screenX;
    ycoord.innerHTML = event.screenY;
});