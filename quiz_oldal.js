let TappedNUm = 0;

function click1() {
    document.querySelector('#Answer').innerHTML = '<p>Hát ha hallodtál már rólam, eleinte pofa egyszerű feledatsorral fogsz találkozni. A következők egyre nehezebbek lesznek szóval lelkileg készülj fel.</p>';
};

function click2() {
    document.querySelector('#Answer').innerHTML = '<p>Gyerekem a legfontosabb dolog az hogy minden hétvégén progot gyakorolsz és tisztában tartod a tiszta kód elvét!</p>';
}

function click3() {
    document.querySelector('#Answer').innerHTML = '<p>A legtöbb kérdést teljesített személy 9-t oldott meg s csak egy kérdésnyire volt el hogy elnyerje elismerésemet. Nem is tudom miért nem tudta megcsinálni az utolsót... </p>';
}

function click4() {
    document.querySelector('#Answer').innerHTML = '<p>Igen is gyerekem! De a világon csak egy személy képes rá s őt Chuck Norrisnak hívják, ha ez volt az egyik álmod akkor remélem hadjd cserben ezt a lehetetlen.</p>';
}

function StartQuiz() {
    if (TappedNUm == 0) {
        document.querySelector('#ending').innerHTML = '<button onclick="StartQuiz()">Biztos Biztos?</button>';
        TappedNUm++;
    }
    else if (TappedNUm == 1) {
        document.querySelector('#ending').innerHTML = '<button id="bounce1" onclick="StartQuiz()">Nagyon biztos vagy benne?</button>';
        TappedNUm++;
    }
    else if (TappedNUm == 2){
        document.querySelector('#ending').innerHTML = '<button onclick="StartQuiz()">Látom készen állsz, akkor nyomj rám!</button>';
        TappedNUm++;
    }
    else if (TappedNUm == 3){
        document.querySelector('#ending').innerHTML = '<button id="bounce2" onclick="StartQuiz()">Hazudtam! Ha most kapsz el akkor mehetsz csak tovább >:)</button>';
        TappedNUm++;        
    }
    else{
        document.querySelector('#ending').innerHTML = '<a href="fuggveny_bajnok.html" id="button_container"><button>Oké oké nyertél, de csak tud hogy nem jelent ez még semmit, mert a Függvény bajnok nem ilyen gyengéknek való mint te!</button></a>';     
    }
}