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
    console.log(data);
    
    data.forEach(item =>{
        cards.innerHTML += ` 
        <div class="flex bg-[#F6F6F6] rounded-[20px] p-2 gap-2 items-center ">
        <div class="min-h-full w-4/12"><img class="min-h-full object-cover" src="${item.img}" alt=""></div>
        <div class=" flex flex-col gap-3 w-8/12">
            <h2 class="font-bold">${item.info}</h2>
            <p>${item.discription}</p>
            <p class="text-[10px]">${item.avtor}</p>
        </div>
    </div>`
    })
}

render()