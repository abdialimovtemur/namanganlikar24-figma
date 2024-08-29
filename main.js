import { data } from "./data.js";
const cards = document.querySelector(".cards");

const render = () => {
    // for (let i of data) {
        // let div = document.createElement("div")
        // div.className = "card";
    
        // const img = document.createElement("img")
        // img.src = i.img
    
        // const info = document.createElement("h2")
        // info.textContent = i.name
    
        // const p = document.createElement("p")
        // p.textContent = i.discription
    
        // div.append(img,info,p); 
        // cards.appendChild(div)
    // }
    data.map(item =>{
        cards.innerHTML = ` 
        <div></div>`
    })
}

render()