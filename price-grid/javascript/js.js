let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let m = document.querySelector(".content");
let sombraL = document.querySelector(".sombra-l")

btn1.addEventListener("click", ()=>{
        m.style.left = "unset"
        m.style.right = "102%"
        m.style.transform = "translateX(108%)";
        sombraL.style.display = "none"
        btn1.style.backgroundColor = "#9d00ff";
        btn2.style.backgroundColor = "transparent";
        btn3.style.backgroundColor = "transparent";
    
    })
btn2.addEventListener("click", ()=>{
        m.style.right = "44%";
        m.style.transform = "translateX(52%)";
        m.style.left = "unset";
        sombraL.style.display = "block";
        btn1.style.backgroundColor = "transparent";
        btn2.style.backgroundColor = "#9d00ff"
        btn3.style.backgroundColor = "transparent";
})
btn3.addEventListener("click", ()=>{

        m.style.right = "0px";
        m.style.left = "unset";
        m.style.transform = "translateX(-2%)";
        sombraL.style.display = "block";
        btn3.style.backgroundColor = "#9d00ff"
        btn2.style.backgroundColor = "transparent";
        btn1.style.backgroundColor = "transparent";
})
let view = document.documentElement.clientWidth;
console.log(view)
