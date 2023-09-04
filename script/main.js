const btnMetro = document.querySelectorAll("#metro nav a");
const boxMetro = document.querySelectorAll("#metro section");
const panel = document.querySelector(".panel");
const panel_li = panel.querySelectorAll("li");
const btnPanel = document.querySelectorAll(".btns li");
const tapmenu = document.querySelector("#tapmenu");
const btns = tapmenu.querySelectorAll("ul li");
const boxes = tapmenu.querySelectorAll("section article");

btnMetro.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        add(btnMetro, index);
        add(boxMetro, index);

        setTimeout(()=>{
            active(boxMetro, index);
        }, 0)
    })
})

btnPanel.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        add(btnPanel, index);
        play(panel_li, index);
        panel.style.marginLeft = `${-100*index}%`;
    })
})

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();
        pop(btns, i);
        pop(boxes, i);
    })
}


function add(list, idx){
    for(let idx of list) idx.classList.remove("on");
    list[idx].classList.add("on");
}

function active(list, idx){
    for(let idx of list) idx.classList.remove("active");
    list[idx].classList.add("active");
}

function play(list, idx){
    for(let el of list) el.querySelector("video").pause();
    list[idx].querySelector("video").play();
}

function pop(list, index) {
    for (let box of list) { box.classList.remove("on"); }
    list[index].classList.add("on");
}


