import {Questions} from "./QuestionList.js";

const nitsReactions = ["Nagyon Lassan válaszolsz Vagy gyerekem , nagyanyám is gyorsabb volt nálad! FAILURE!!!!", "Hát fiacskám ez nagyon lassú volt hogy leszel így Függvény Bajnok? Most azonnal sétálj az asztal körül 1 kört!!!", "Ha ilyen sebességgel haladsz tovább akkor egy alát fogsz kapni!","Azt hiszed hogy Chuck Norris vagy aki 0 után is tud quizt csinálni?"];

let Box1 = document.querySelector("#box1");
let Box2 = document.querySelector("#box2");
let Box3 = document.querySelector("#box3");
let Box4 = document.querySelector("#box4");
let Said = false;
let audioActive = true; // csakhogy ne halljam a nits jumpscaret egyfolytában
let TappedNum = 0;


function Counter() {
    let num = document.querySelector("#counter").innerHTML;
    num--;
    if (num < 0) {
        alert("VESZTETTÉL BITCH")
    }
    if (num < 6 && Said == false) {
    Said = true;
    let randomNum = Math.floor(Math.random() * 5);
    document.querySelector("#reaction").innerHTML = nitsReactions[randomNum];
    }
    else if (num < 0 && audioActive == false){
        document.querySelector("#audio").innerHTML += '<audio src="/Whistle.mp3" controls="controls" style="display: none;" autoplay></audio>';
        audioActive = true;
    }
    document.querySelector("#counter").innerHTML = num;
};

setInterval(Counter,1000);



    Box1.addEventListener('click', function() {
        let TappedButtonValue = document.querySelector('#answer1').innerHTML;
        if (TappedButtonValue == Questions[TappedNum].answer) {
            TappedNum++;
            document.querySelector('#box1').innerHTML = Questions[TappedNum].question1;
            document.querySelector('#box2').innerHTML = Questions[TappedNum].question2;
            document.querySelector('#box3').innerHTML = Questions[TappedNum].question3;
            document.querySelector('#box4').innerHTML = Questions[TappedNum].question4;
            document.querySelector('#Difficulty').innerHTML = Questions[TappedNum].difficulty;
            Said = false;
            document.querySelector('#counter').innerHTML = 12;
        }
        console.log(TappedButtonValue);
        console.log(TappedNum);
      });



    Box2.addEventListener('click', function() {
        let TappedButtonValue = document.querySelector('#answer2').innerHTML;
        if (TappedButtonValue == Questions[TappedNum].answer) {
            TappedNum++;
            document.querySelector('#box1').innerHTML = Questions[TappedNum].question1;
            document.querySelector('#box2').innerHTML = Questions[TappedNum].question2;
            document.querySelector('#box3').innerHTML = Questions[TappedNum].question3;
            document.querySelector('#box4').innerHTML = Questions[TappedNum].question4;
            document.querySelector('#Difficulty').innerHTML = Questions[TappedNum].difficulty;
            document.querySelector('#counter').innerHTML = 12;
            Said = false;
        }
        console.log('Div2 was clicked!');
      });



    Box3.addEventListener('click', function() {
        let TappedButtonValue = document.querySelector('#answer3').innerHTML;
        if (TappedButtonValue == Questions[TappedNum].answer) {
            TappedNum++;
            document.querySelector('#box1').innerHTML = Questions[TappedNum].question1;
            document.querySelector('#box2').innerHTML = Questions[TappedNum].question2;
            document.querySelector('#box3').innerHTML = Questions[TappedNum].question3;
            document.querySelector('#box4').innerHTML = Questions[TappedNum].question4;
            document.querySelector('#Difficulty').innerHTML = Questions[TappedNum].difficulty;
            document.querySelector('#counter').innerHTML = 12;
            Said = false;
        }
        console.log('Div3 was clicked!');
      });



    Box4.addEventListener('click', function() {
        let TappedButtonValue = document.querySelector('#answer4').innerHTML;
        if (TappedButtonValue == Questions[TappedNum].answer) {
            TappedNum++;
            document.querySelector('#box1').innerHTML = Questions[TappedNum].question1;
            document.querySelector('#box2').innerHTML = Questions[TappedNum].question2;
            document.querySelector('#box3').innerHTML = Questions[TappedNum].question3;
            document.querySelector('#box4').innerHTML = Questions[TappedNum].question4;
            document.querySelector('#Difficulty').innerHTML = Questions[TappedNum].difficulty;
            document.querySelector('#counter').innerHTML = 12;
            Said = false;
        }
        console.log('Div4 was clicked!');
      });
