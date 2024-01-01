let circle = document.querySelector(".circle");
let line = document.querySelector(".line");

let rs1 = document.querySelector(".rs1")
let rs2 = document.querySelector(".rs2")
let rs3 = document.querySelector(".rs3")

let ls1 = document.querySelector(".ls1")
let ls2 = document.querySelector(".ls2")
let ls3 = document.querySelector(".ls3")
let circtop = 2800;
window.addEventListener("scroll", () => {
    if(window.scrollY > 2000 & window.scrollY < 3900){
        line.style.height = (window.scrollY - 2000) + "px";
        circtop = (2800 + window.scrollY - 2000)
        circle.style.top = circtop + "px"
    }
    if(circtop > 2801 & circtop < 3600){
        ls1.style.opacity = 1;
        rs1.style.opacity = 1;
        ls2.style.opacity = 0.4;
        rs2.style.opacity = 0.4;
        ls3.style.opacity = 0.3; 
        rs3.style.opacity = 0.3;
    }else if(circtop >= 3600 & circtop < 4000){
        ls1.style.opacity = 0.4;
        rs1.style.opacity = 0.4;
        rs2.style.opacity = 1;
        ls2.style.opacity = 1;
        ls3.style.opacity = 0.4; 
        rs3.style.opacity = 0.4; 
    }else if(circtop >= 4000 & circtop < 4700){
        ls1.style.opacity = 0.3;
        rs1.style.opacity = 0.3;
        rs2.style.opacity = 0.5;
        ls2.style.opacity = 0.5; 
        ls3.style.opacity = 1; 
        rs3.style.opacity = 1; 
    }else{
        ls1.style.opacity = 0.3;
        rs1.style.opacity = 0.3;
        rs2.style.opacity = 0.2;
        ls2.style.opacity = 0.2; 
        ls3.style.opacity = 0.3; 
        rs3.style.opacity = 0.3; 
    }
    
})

let q1 = document.querySelector(".q1");
let q2 = document.querySelector(".q2");
let q3 = document.querySelector(".q3");
let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
q1.addEventListener('click', () => {
    a1.style.display = "block"
})
q2.addEventListener('click', () => {
    a2.style.display = "block"
})
q3.addEventListener('click', () => {
    a3.style.display = "block"
})

