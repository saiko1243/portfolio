let direita = document.querySelector(".bar_right");

direita.addEventListener("click", ()=>{
    for(let c = 1; c < 5; c++){
    if (document.getElementById("slide" + c).checked == true){
    if (c < 4){
    document.getElementById("slide" + ++c).checked = true;} else {document.getElementById("slide1").checked = true;}
}}})

let esquerda = document.querySelector(".bar_left");

esquerda.addEventListener("click", ()=>{
    for(let c = 1; c < 5; c++){
    if (document.getElementById("slide" + c).checked == true){
    if (c > 1){
    document.getElementById("slide" + --c).checked = true;} else {document.getElementById("slide4").checked = true;}
}}})


window.sr = ScrollReveal({ reset: true});

sr.reveal(".lorem", {scale:.7, duration:1000, delay:200})
sr.reveal(".box-quest1", {scale:.7, duration:1000, delay:200})
sr.reveal(".box-quest2", {scale:.7, duration:1000, delay:300})
sr.reveal(".box-quest3", {scale:.7, duration:1000, delay:400})

sr.reveal(".controls", {scale:.7, delay:0, easing: 'cubic-bezier(0.5, 0, 0, 1)'})
sr.reveal(".battery", {scale:.7, delay:0, easing: 'cubic-bezier(0.5, 0, 0, 1)'})
sr.reveal(".phones", {scale:.7, delay:0, easing: 'cubic-bezier(0.5, 0, 0, 1)'})
sr.reveal(".microphones", {scale:.7, delay:0, easing: 'cubic-bezier(0.5, 0, 0, 1)'})

var navigation = document.querySelector(".nav")
var local = false
var btn = document.getElementById("btn")
var btn2 = document.getElementById("btn2")
function display (){
    local = !local
    console.log(local)
    if(local){
        navigation.style.display = 'flex'
        btn.style.display = 'none'
        btn2.style.display = 'block'

    }else{
        navigation.style.display = 'none'
        btn.style.display = 'block'
        btn2.style.display = 'none'
    }
}

/*let cont = 1;
document.getElementById("slide1").checked = true;

setInterval( function () {
    cont++
    if (cont>4){
        cont=1
    }
    document.getElementById("slide" + cont).checked = true;
}, 3500)
//Quando apertar o botao da direita ele aciona o radio à direita*/

