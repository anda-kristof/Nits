import {Questions} from "./QuestionList.js";

let Box1 = document.querySelector("#box1");
let Box2 = document.querySelector("#box2");
let Box3 = document.querySelector("#box3");
let Box4 = document.querySelector("#box4");
let Said = 1;
let NitsAudio = false; // same here
let audioActive = false; // csakhogy ne halljam a nits jumpscaret egyfolytában
let TappedNum = 0;
let Phone = false;
let Joeover = false;

const NegativeNitsReactions = ["Nagyon lassan válaszolsz gyerekem , nagyanyám is gyorsabb volt nálad! FAILURE!!!!", "Hát fiacskám ez nagyon lassú ,hogy leszel így Függvény Bajnok? Most azonnal sétálj az asztal körül 1 kört!!!", "Ha ilyen sebességgel haladsz tovább akkor egy alá alát fogsz kapni!","Azt hiszed hogy Chuck Norris vagy aki nulla után is tud quizt csinálni?","Nagyon csalódott vagyok benned fiacskám, remélem szabad idődben többet tanulsz"];
const NeutralNItsReaction = ["Gyerekem megy ez idő döntened kell!", "Ihaj Csuhaj a hétszáz mindenit, repül az idő de te még nem döntöttél!", "Ilyen egyszerű kérdésre nem kéne ennyi időt szánni", "Ennyi idő alatt már többször elosztottam volna a nulát", "Remélem nem fogsz csalódást okozni nekem..."]
const PositiveNitsReactions = [`Ügyes vagy már csak 9 kérdés maradt hátra!`, "Tudtam hogy megtudod csinálni, egynap majd utol fogsz érni!", "Olyan profi leszel mint én fiacskám, már hullanak a könnyeim", "Büszke vagyok rád, Szerinem igazgató úr is egyet értene velem", "Már majdnem utoléred Chuck Norrist csak így tovább!"];


function Counter() {
    let num = document.querySelector("#counter").innerHTML;
    num--;
    if (NitsAudio == false){
        document.querySelector("#audio").innerHTML = '<audio src="/Boss.mp3" controls="controls" style="display: none;" autoplay></audio>';
        NitsAudio = true;
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
    if (num < 0 && audioActive == false && Joeover == false){
        document.querySelector("#audio").innerHTML = '<audio src="/Whistle.mp3" controls="controls" style="display: none;" autoplay></audio>';
        document.querySelector("#SCARY").innerHTML = '<img src="/képek/jumpcare.png" id="jumpscare">';
        document.querySelector("#SCARY").innerHTML += '<a href="quiz_oldal.html" id="ReTry"><button>Vissza!</button></a>';
        audioActive = true;
    }
    if (TappedNum == 9 && Phone == false) {
        Phone = true;
        document.querySelector("#audio").innerHTML = '<audio src="/Phone.mp3" controls="controls" style="display: none;" autoplay></audio>';
        document.querySelector('#upperHalf1').innerHTML = '<img src="/képek/NL_300x300.jpg" alt="lacika" title="lacika" id="fade"></img>';
        document.querySelector('#reaction').innerHTML = 'Várjál gyerekem hívnak engemet, minjárt visszajövök';
    }
    if (audioActive == false && Phone == false && Joeover == false) {
        document.querySelector("#counter").innerHTML = num;        
    }

};

setInterval(Counter,1000);



    Box1.addEventListener('click', function() {
        let TappedButtonValue;
        if (Questions[TappedNum].question1.includes('<p')) {
            TappedButtonValue = document.querySelector('#answer1').innerHTML;
        }
        else if (Questions[TappedNum].question1.includes('name'))
        {
            TappedButtonValue = "jo";
        }

        if (TappedButtonValue == Questions[TappedNum].answer) {
            TappedNum++;
            if (Questions[TappedNum].question1.includes('<p')) {
                let valasz1 = document.querySelectorAll('.valasz1');
                let valasz2 = document.querySelectorAll('.valasz2');
                for (let i = 0; i < valasz2.length; i++) {
                    valasz1[i].style.width = '40%';
                    valasz1[i].style.height = '40%';
                    valasz1[i].style.margin = '2% 5%';
                    valasz2[i].style.width = '40%';
                    valasz2[i].style.height = '40%';
                    valasz2[i].style.margin = '2% 5%';
                }
            }
            else{
                let valasz1 = document.querySelectorAll('.valasz1');
                let valasz2 = document.querySelectorAll('.valasz2');
                for (let i = 0; i < valasz2.length; i++) {
                    valasz1[i].style.width = '175px';
                    valasz1[i].style.height = '150px';
                    valasz1[i].style.margin = '0% 15%';
                    valasz2[i].style.width = '175px';
                    valasz2[i].style.height = '150px';
                    valasz2[i].style.margin = '5% 15%';
                }
            }
                document.querySelector('#box1').innerHTML = Questions[TappedNum].question1;
                document.querySelector('#box2').innerHTML = Questions[TappedNum].question2;
                document.querySelector('#box3').innerHTML = Questions[TappedNum].question3;
                document.querySelector('#box4').innerHTML = Questions[TappedNum].question4;
            document.querySelector('#nehezseg').innerHTML = Questions[TappedNum].difficulty;
            document.querySelector("#kerdes").innerHTML = Questions[TappedNum].Title;
            Said = 0;
            document.querySelector('#counter').innerHTML = 24;
            let randomNum = Math.floor(Math.random() * 5);
            PositiveNitsReactions[0] = `Ügyes vagy már csak ${10 - TappedNum} kérdés maradt hátra!`;
            document.querySelector("#reaction").innerHTML = PositiveNitsReactions[randomNum];
        }
        else 
        {
            document.querySelector("#audio").innerHTML = '<audio src="/Lost.mp3" controls="controls" style="display: none;" autoplay></audio>';
            document.querySelector("#SCARY").innerHTML = '<img src="/képek/lost_game.png" id="jumpscare2">';
            document.querySelector("#SCARY").innerHTML += '<a href="quiz_oldal.html" id="ReTry"><button>Vissza!</button></a>';
            Joeover = true;
        }
      });



    Box2.addEventListener('click', function() {
        let TappedButtonValue = '';
        if (Questions[TappedNum].question1.includes('<p')) {
            TappedButtonValue = document.querySelector('#answer2').innerHTML;
        }
        else if (Questions[TappedNum].question2.includes('name'))
        {
            TappedButtonValue = "jo";
        }
        if (TappedButtonValue == Questions[TappedNum].answer) {
            TappedNum++;
            if (Questions[TappedNum].question1.includes('<p')) {
                let valasz1 = document.querySelectorAll('.valasz1');
                let valasz2 = document.querySelectorAll('.valasz2');
                for (let i = 0; i < valasz2.length; i++) {
                    valasz1[i].style.width = '40%';
                    valasz1[i].style.height = '40%';
                    valasz1[i].style.margin = '2% 5%';
                    valasz2[i].style.width = '40%';
                    valasz2[i].style.height = '40%';
                    valasz2[i].style.margin = '2% 5%';
                }
            }
            else{
                let valasz1 = document.querySelectorAll('.valasz1');
                let valasz2 = document.querySelectorAll('.valasz2');
                for (let i = 0; i < valasz2.length; i++) {
                    valasz1[i].style.width = '175px';
                    valasz1[i].style.height = '150px';
                    valasz1[i].style.margin = '0% 15%';
                    valasz2[i].style.width = '175px';
                    valasz2[i].style.height = '150px';
                    valasz2[i].style.margin = '0% 15%';
                }
            }
                document.querySelector('#box1').innerHTML = Questions[TappedNum].question1;
                document.querySelector('#box2').innerHTML = Questions[TappedNum].question2;
                document.querySelector('#box3').innerHTML = Questions[TappedNum].question3;
                document.querySelector('#box4').innerHTML = Questions[TappedNum].question4;
            document.querySelector('#nehezseg').innerHTML = Questions[TappedNum].difficulty;
            document.querySelector("#kerdes").innerHTML = Questions[TappedNum].Title;
            document.querySelector('#counter').innerHTML = 24;
            Said = 0;
            let randomNum = Math.floor(Math.random() * 5);
            PositiveNitsReactions[0] = `Ügyes vagy már csak ${10 - TappedNum} kérdés maradt hátra!`;
            document.querySelector("#reaction").innerHTML = PositiveNitsReactions[randomNum];
        }
        else 
        {
            document.querySelector("#audio").innerHTML = '<audio src="/Lost.mp3" controls="controls" style="display: none;" autoplay></audio>';
            document.querySelector("#SCARY").innerHTML = '<img src="/képek/lost_game.png" id="jumpscare2">';
            document.querySelector("#SCARY").innerHTML += '<a href="quiz_oldal.html" id="ReTry"><button>Vissza!</button></a>';
            Joeover = true;
        }
      });



    Box3.addEventListener('click', function() {
        let TappedButtonValue = '';
        if (Questions[TappedNum].question1.includes('<p')) {
            TappedButtonValue = document.querySelector('#answer3').innerHTML;
        }
        else if (Questions[TappedNum].question3.includes('name'))
        {
            TappedButtonValue = "jo";
        }
        let test = Questions[TappedNum].question1.includes('name');
        if (TappedButtonValue == Questions[TappedNum].answer) {
            TappedNum++;
            if (Questions[TappedNum].question1.includes('<p')) {
                let valasz1 = document.querySelectorAll('.valasz1');
                let valasz2 = document.querySelectorAll('.valasz2');
                for (let i = 0; i < valasz2.length; i++) {
                    valasz1[i].style.width = '40%';
                    valasz1[i].style.height = '40%';
                    valasz1[i].style.margin = '2% 5%';
                    valasz2[i].style.width = '40%';
                    valasz2[i].style.height = '40%';
                    valasz2[i].style.margin = '2% 5%';
                }
            }
            else{
                let valasz1 = document.querySelectorAll('.valasz1');
                let valasz2 = document.querySelectorAll('.valasz2');
                for (let i = 0; i < valasz2.length; i++) {
                    valasz1[i].style.width = '175px';
                    valasz1[i].style.height = '150px';
                    valasz1[i].style.margin = '0% 15%';
                    valasz2[i].style.width = '175px';
                    valasz2[i].style.height = '150px';
                    valasz2[i].style.margin = '0% 15%';
                }
            }
                document.querySelector('#box1').innerHTML = Questions[TappedNum].question1;
                document.querySelector('#box2').innerHTML = Questions[TappedNum].question2;
                document.querySelector('#box3').innerHTML = Questions[TappedNum].question3;
                document.querySelector('#box4').innerHTML = Questions[TappedNum].question4;                
                document.querySelector('#nehezseg').innerHTML = Questions[TappedNum].difficulty;
                document.querySelector("#kerdes").innerHTML = Questions[TappedNum].Title;
            document.querySelector('#counter').innerHTML = 24;
            Said = 0;
            let randomNum = Math.floor(Math.random() * 5);
            PositiveNitsReactions[0] = `Ügyes vagy már csak ${10 - TappedNum} kérdés maradt hátra!`;
            document.querySelector("#reaction").innerHTML = PositiveNitsReactions[randomNum];
        }
        else 
        {
            document.querySelector("#audio").innerHTML = '<audio src="/Lost.mp3" controls="controls" style="display: none;" autoplay></audio>';
            document.querySelector("#SCARY").innerHTML = '<img src="/képek/lost_game.png" id="jumpscare2">';
            document.querySelector("#SCARY").innerHTML += '<a href="quiz_oldal.html" id="ReTry"><button>Vissza!</button></a>';
            Joeover = true;
        }
      });



    Box4.addEventListener('click', function() {
        let TappedButtonValue = '';
        if (Questions[TappedNum].question1.includes('<p')) {
            TappedButtonValue = document.querySelector('#answer4').innerHTML;
        }
        else if (Questions[TappedNum].question4.includes('name'))
        {
            TappedButtonValue = "jo";
        }

        if (TappedButtonValue == Questions[TappedNum].answer) {
            TappedNum++;
            if (Questions[TappedNum].question1.includes('<p')) {
                let valasz1 = document.querySelectorAll('.valasz1');
                let valasz2 = document.querySelectorAll('.valasz2');
                for (let i = 0; i < valasz2.length; i++) {
                    valasz1[i].style.width = '40%';
                    valasz1[i].style.height = '40%';
                    valasz1[i].style.margin = '2% 5%';
                    valasz2[i].style.width = '40%';
                    valasz2[i].style.height = '40%';
                    valasz2[i].style.margin = '2% 5%';
                }
            }
            else{
                let valasz1 = document.querySelectorAll('.valasz1');
                let valasz2 = document.querySelectorAll('.valasz2');
                for (let i = 0; i < valasz2.length; i++) {
                    valasz1[i].style.width = '175px';
                    valasz1[i].style.height = '150px';
                    valasz1[i].style.margin = '0% 15%';
                    valasz2[i].style.width = '175px';
                    valasz2[i].style.height = '150px';
                    valasz2[i].style.margin = '0% 15%';
                }
            }
                document.querySelector('#box1').innerHTML = Questions[TappedNum].question1;
                document.querySelector('#box2').innerHTML = Questions[TappedNum].question2;
                document.querySelector('#box3').innerHTML = Questions[TappedNum].question3;
                document.querySelector('#box4').innerHTML = Questions[TappedNum].question4;
            document.querySelector('#nehezseg').innerHTML = Questions[TappedNum].difficulty;
            document.querySelector("#kerdes").innerHTML = Questions[TappedNum].Title;
            document.querySelector('#counter').innerHTML = 24;
            Said = 0;
            let randomNum = Math.floor(Math.random() * 5);
            PositiveNitsReactions[0] = `Ügyes vagy már csak ${10 - TappedNum} kérdés maradt hátra!`;
            document.querySelector("#reaction").innerHTML = PositiveNitsReactions[randomNum];
        }
        else 
        {
            document.querySelector("#audio").innerHTML = '<audio src="/Lost.mp3" controls="controls" style="display: none;" autoplay></audio>';
            document.querySelector("#SCARY").innerHTML = '<img src="/képek/lost_game.png" id="jumpscare">';
            document.querySelector("#SCARY").innerHTML += '<a href="quiz_oldal.html" id="ReTry"><button>Vissza!</button></a>';
            Joeover = true;
        }
      });
