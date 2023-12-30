import {Questions} from "./QuestionList.js";

let Box1 = document.querySelector("#box1");
let Box2 = document.querySelector("#box2");
let Box3 = document.querySelector("#box3");
let Box4 = document.querySelector("#box4");
let Said = 1;
let audioActive = true; // csakhogy ne halljam a nits jumpscaret egyfolytában
let TappedNum = 0;

const NegativeNitsReactions = ["Nagyon lassan válaszolsz gyerekem , nagyanyám is gyorsabb volt nálad! FAILURE!!!!", "Hát fiacskám ez nagyon lassú ,hogy leszel így Függvény Bajnok? Most azonnal sétálj az asztal körül 1 kört!!!", "Ha ilyen sebességgel haladsz tovább akkor egy alá alát fogsz kapni!","Azt hiszed hogy Chuck Norris vagy aki nulla után is tud quizt csinálni?","Nagyon csalódott vagyok benned fiacskám, remélem szabad idődben többet tanulsz"];
const NeutralNItsReaction = ["Gyerekem megy ez idő döntened kell!", "Ihaj Csuhaj a hétszáz mindenit, repül az idő de te még nem döntöttél!", "Ilyen egyszerű kérdésre nem kéne ennyi időt szánni", "Ennyi idő alatt már többször elosztottam volna a nulát", "Remélem nem fogsz csalódást okozni nekem..."]
const PositiveNitsReactions = [`Ügyes vagy már csak 9 kérdés maradt hátra!`, "Tudtam hogy megtudod csinálni, egynap majd utol fogsz érni!", "Olyan profi leszel mint én fiacskám, már hullanak a könnyeim", "Büszke vagyok rád, Szerinem igazgató úr is egyet értene velem", "Már majdnem utoléred Chuck Norrist csak így tovább!"];


function Counter() {
    let num = document.querySelector("#counter").innerHTML;
    num--;
    if (num < 0) {
        alert("VESZTETTÉL BITCH");
    }
    if (num < 18 && Said == 0) {
    let randomNum = Math.floor(Math.random() * 5);
    document.querySelector("#reaction").innerHTML = NeutralNItsReaction[randomNum];   
    Said++;     
    }
    if (num < 12 && Said == 1) {
    Said++;
    let randomNum = Math.floor(Math.random() * 5);
    document.querySelector("#reaction").innerHTML = NegativeNitsReactions[randomNum];
    }
    if (num < 0 && audioActive == false){
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
            document.querySelector("#kerdes").innerHTML = Questions[TappedNum].Title;
            Said = 0;
            document.querySelector('#counter').innerHTML = 24;
            let randomNum = Math.floor(Math.random() * 5);
            PositiveNitsReactions[0] = `Ügyes vagy már csak ${10 - TappedNum} kérdés maradt hátra!`;
            document.querySelector("#reaction").innerHTML = PositiveNitsReactions[randomNum];
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
            document.querySelector("#kerdes").innerHTML = Questions[TappedNum].Title;
            document.querySelector('#counter').innerHTML = 24;
            Said = 0;
            PositiveNitsReactions[0] = `Ügyes vagy már csak ${10 - TappedNum} kérdés maradt hátra!`;
            document.querySelector("#reaction").innerHTML = PositiveNitsReactions[randomNum];
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
            document.querySelector("#kerdes").innerHTML = Questions[TappedNum].Title;
            document.querySelector('#counter').innerHTML = 24;
            Said = 0;
            PositiveNitsReactions[0] = `Ügyes vagy már csak ${10 - TappedNum} kérdés maradt hátra!`;
            document.querySelector("#reaction").innerHTML = PositiveNitsReactions[randomNum];
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
            document.querySelector("#kerdes").innerHTML = Questions[TappedNum].Title;
            document.querySelector('#counter').innerHTML = 24;
            Said = 0;
            PositiveNitsReactions[0] = `Ügyes vagy már csak ${10 - TappedNum} kérdés maradt hátra!`;
            document.querySelector("#reaction").innerHTML = PositiveNitsReactions[randomNum];
        }
        console.log('Div4 was clicked!');
      });
