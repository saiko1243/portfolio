let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let m = document.querySelector(".content");
let sombraL = document.querySelector(".sombra-l")

let btn = [...document.querySelectorAll(".btn1")]
let ri; let le; let transform; let dis; let sombradis; let Btn0Back; let Btn1Back; let Btn2Back;

function posicao (ri, le, transform, sombradis, btn0Back, btn1Back, btn2Back){
        m.style.right = ri;
        m.style.left = le;
        m.style.transform = transform;
        sombraL.style.display = sombradis;
        btn[0].style.backgroundColor = btn0Back;
        btn[1].style.backgroundColor = btn1Back;
        btn[2].style.backgroundColor = btn2Back;
}
btn.map((e, i)=>{
        e.addEventListener("click", ()=>{
                if (i == 0){
                        ri="102%"; le="unset"; transform="translateX(108%)"; sombradis="none"; btn0Back = "#9d00ff"; btn1Back = "transparent"; btn2Back = "transparent";
                        posicao(ri, le, transform, sombradis, btn0Back, btn1Back, btn2Back)
                }else if (i == 1){
                        ri="44%"; le="unset"; transform="translateX(52%)"; sombradis="block"; btn0Back = "transparent"; btn1Back = "#9d00ff"; btn2Back = "transparent";
                        posicao(ri, le, transform, sombradis, btn0Back, btn1Back, btn2Back)
                }else if (i == 2){
                        ri="-2%"; le="unset"; transform="translateX(-2%)"; sombradis="block"; btn0Back = "transparent"; btn1Back = "transparent"; btn2Back = "#9d00ff";
                        posicao(ri, le, transform, sombradis, btn0Back, btn1Back, btn2Back)
                }
        })
})

