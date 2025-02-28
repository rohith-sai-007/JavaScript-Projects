const counterEl = document.getElementById("counter");
const barEl = document.getElementById("bar");
const incEl = document.getElementById("inc");
let val = 0;

const t = setInterval(() => {
    counterEl.innerHTML = val+"%";
    inc.style.width = (val*6)+"px";
    val++;
    if(val>100)
        clearInterval(t);
},100);