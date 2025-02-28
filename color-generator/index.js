for(let i=0;i<30;i++){
    const divEl = document.createElement("div");
    let color = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`;
    divEl.innerText = color;
    divEl.style.backgroundColor = color;
    document.getElementById("gallery").appendChild(divEl);
}