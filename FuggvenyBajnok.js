const Box1 = document.querySelector("box1");
const Box2 = document.querySelector("box2");
const Box3 = document.querySelector("box3");
const Box4 = document.querySelector("box4");

function Counter() {
    let num = document.querySelector("#counter").innerHTML;
    num--;
    if (num < 6) {
    document.querySelector("#reaction").innerHTML = "Nagyon Lassan válaszolsz Vagy gyerekem , nagyanyám is gyorsabb volt nálad! FAILURE!!!!";
    }
    document.querySelector("#counter").innerHTML = num;
};

setInterval(Counter,1000);

for (let index = 0; index < 11; index++) {
    addEventListener()
}