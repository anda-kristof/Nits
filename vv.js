window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

const firstsh = document.querySelector(".b1");
const secondsh = document.querySelector(".b2");

function gombsh1() {
  firstsh.classList.add("b1p");
  window.scrollBy(0, 300);
}
function gombsh2() {
  secondsh.classList.add("b2p");
  window.scrollBy(0, 300);
}

// trex run
document.addEventListener("DOMContentLoaded", () => {
  const contentElement = document.querySelector("#trexrun");
  const dino = document.querySelector(".dino");
  const grid = document.querySelector(".grid");
  const alert = document.querySelector("#alert");
  let cactihatter = "url(img/" + aktivAkadaly + ".png)";

  document.querySelector("#karaktergomb").addEventListener("click", () => {
    if (vvswitch.checked) {
      dino.style.backgroundImage = "url(img/" + aktivKarakter + ".png)";
    } else {
      dino.style.backgroundImage = "url(img/t-rex.png)";
    }
    cactihatter = "url(img/" + aktivAkadaly + ".png)";
  });

  let position = 0;
  let gravity = 0.9;
  let isJumping = false;
  let isGameOver = false;
  let score = 0;

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Change this threshold as needed, it represents the amount of intersection needed
  };

  function control(event) {
    if (event.keyCode == 32) {
      // szóköz kódja
      if (!isJumping) {
        isJumping = true;
        jump();
      }
    }
  }

  function jump() {
    let count = 5;
    let jumpTimer = setInterval(() => {
      if (count == 20) {
        clearInterval(jumpTimer);
        let downTimer = setInterval(() => {
          if (count == 5) {
            clearInterval(downTimer);
            isJumping = false;
          }
          position -= 5;
          position *= gravity;
          dino.style.bottom = position + "px";
          count--;
        }, 20);
      }
      position += 30;
      position *= gravity;
      dino.style.bottom = position + "px";
      count++;
    }, 20);
  }

  function generateCactus() {
    let randomTime = Math.random() * 1000 + 1200;
    let cactusPosition = 1800;
    let cactus = document.createElement("div");
    if (vvswitch.checked) {
      cactus.style.backgroundImage = cactihatter;
    } else {
      cactus.style.backgroundImage = "url(img/" + "cacti" + ".png)";
    }

    if (!isGameOver) {
      cactus.classList.add("cactus");
      cactus.style.left = cactusPosition + "px";
      grid.appendChild(cactus);
    }

    let timer = setInterval(() => {
      if (isGameOver) {
        cactusPosition = -1;
      }
      if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
        clearInterval(timer);
        alert.innerHTML = "Game Over! Score: " + score + "    Click to play again";
        isGameOver = true;
        while (grid.firstChild) {
          grid.removeChild(grid.lastChild);
        }
      }

      if (cactusPosition == 0) {
        score++;
        alert.innerHTML = score;
      }
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }, 30);
    if (!isGameOver) {
      setTimeout(generateCactus, randomTime);
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.addEventListener("keyup", control);
        generateCactus();
        contentElement.addEventListener("click", () => {
          position = 0;
          gravity = 0.9;
          isJumping = false;
          isGameOver = false;
          score = 0;
          alert.innerHTML = "";
          for (let i = 0; i < grid.childElementCount; i++) {
            grid.removeChild(grid.firstChild);
          }

          grid.appendChild(dino);
          console.log("mükszik");
          document.addEventListener("keyup", control);
          generateCactus();
        });
      }
    });
  }, options);
  if (contentElement) {
    observer.observe(contentElement);
  }
});

//karakterválasztás
let karakterle = document.querySelector(".kle");
let karakterfel = document.querySelector(".kfel");
let akadalyle = document.querySelector(".akle");
let akadalyfel = document.querySelector(".akfel");
let karakterimg = document.querySelector(".karimg");
let akadalyimg = document.querySelector(".akimg");
let karaktertext = document.querySelector(".karakterfelirat");
let akadalytext = document.querySelector(".akadalyfelirat");

const karakterList = ["nistcart", "nitsnorris", "nitsrat", "nitssuperman"];
const karakterFelirat = ["LaciKart", "Nits Norris", "Latkány", "Szuper Laci"];
const akadalyList = ["gumi", "salata", "turo", "cactusnorris"];
const akadalyFelirat = [
  "Gumicsere",
  "Saláta kód",
  "A túróba...",
  "Cactus Norris",
];

let aktivKarakterf = karakterFelirat[0];
let aktivKarakter = karakterList[0];
let aktivAkadalyf = akadalyFelirat[0];
let aktivAkadaly = akadalyList[0];

function changeImage() {
  karakterimg.src = "img/" + aktivKarakter + ".png";
  karaktertext.innerHTML = aktivKarakterf;
  akadalyimg.src = "img/" + aktivAkadaly + ".png";
  akadalytext.innerHTML = aktivAkadalyf;
  console.log(aktivKarakter);
  console.log(karakterimg.src);
}

function karaktervalt(numvalt) {
  let a;
  for (i = 0; i < karakterList.length; i++) {
    if (aktivKarakter == karakterList[i]) {
      a = i;
    }
  }
  a += numvalt;
  if (a >= karakterList.length) {
    a -= karakterList.length;
  } else if (a < 0) {
    a += karakterList.length;
  }
  aktivKarakter = karakterList[a];
  aktivKarakterf = karakterFelirat[a];
  console.log(a);
  changeImage();
}
function akadalyvalt(numvalt) {
  let a;
  for (i = 0; i < akadalyList.length; i++) {
    if (aktivAkadaly == akadalyList[i]) {
      a = i;
    }
  }
  a += numvalt;
  if (a >= akadalyList.length) {
    a -= akadalyList.length;
  } else if (a < 0) {
    a += akadalyList.length;
  }
  aktivAkadaly = akadalyList[a];
  aktivAkadalyf = akadalyFelirat[a];
  changeImage();
}

// molegame
let moleimg = "url('img/mole.jpg')";
const square = document.querySelectorAll(".square");
let timeLeft = document.querySelector("#timeLeft");
let score = document.querySelector("#score");
const startGame = document.querySelector(".startGame");
const bestScore = document.querySelector("#bestScore");
let hitPosition = null;
let result = 0;
let currentTime = timeLeft.innerHTML;
let moleTimerId;
let countDownTimer;

bestScore.innerHTML = localStorage.getItem("BestScore");

function randomMole() {
  square.forEach((oneSquare) => {
    oneSquare.style.backgroundImage = "none";
    oneSquare.classList.remove("mole");
  });
  let randomPos = square[Math.floor(Math.random() * 9)];
  randomPos.classList.add("mole");
  document.querySelector(".mole").style.backgroundImage = moleimg;
  hitPosition = randomPos.id;
}

function countDown() {
  currentTime--;
  timeLeft.innerHTML = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimer);
    clearInterval(moleTimerId);
    startGame.style.display = "block";
    startGame.innerHTML = "GAME OVER!<br>Your final score is: " + result;
    if (result > bestScore.innerHTML) {
      console.log(bestScore, result);
      bestScore.innerHTML = result;
      localStorage.setItem("BestScore", result);
    }
  }
}

square.forEach((oneSquare) => {
  oneSquare.addEventListener("mouseup", () => {
    if (oneSquare.id == hitPosition) {
      result++;
      score.innerHTML = result;
    }
  });
});

startGame.addEventListener("click", () => {
  startGame.style.display = "none";
  if(vvswitch.checked){
    currentTime = 20;
  }else{
    currentTime = 5;
  }
  
  timeLeft.innerHTML = currentTime;
  result = 0;
  score.innerHTML = result;
  moleTimerId = setInterval(randomMole, 700);
  countDownTimer = setInterval(countDown, 1000);
});

const vvswitch = document.querySelector(".vveffektpreview");

function vvswitchTurn() {
  if (vvswitch.checked) {
    document.querySelector(".karaktervalaszt").style.display = "block";
    moleimg = "url('img/lacivakond.png')";
    document.querySelector(".molegame .wrapper h1").textContent =
      "Kapd el gyorsan Lacivakond grabancát mielött megdézsmálja a kerted!";
    document.querySelector(".molegame .wrapper h1").style.width = "1000px";
    
    document.querySelector(".vveffect").style.backgroundImage = "url(img/vvswitchbackground.png)"
    document.querySelector(".vveffect").classList.add("nitscurzor");
    
  } else {
    moleimg = "url('img/mole.jpg')";
    document.querySelector(".molegame .wrapper h1").textContent =
      "What a mole!";
    document.querySelector(".molegame .wrapper h1").style.width = "100%";
    document.querySelector(".vveffect").style.backgroundImage = "linear-gradient(90deg, rgb(0, 0, 0), rgb(0, 20, 0), rgb(0, 20, 0), rgb(0, 0, 0))"
    document.querySelector(".karaktervalaszt").style.display = "none";
    document.querySelector(".vveffect").classList.remove("nitscurzor");
  }
}
