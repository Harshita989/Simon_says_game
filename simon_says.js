let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let level = 0;
let started = false;

let h1 = document.querySelector("h1");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("key Presed");

    started = true;
    levelup();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}
function levelup() {
  userSeq = [];
  level++;
  h1.innerText = `level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randcolor = btns[randIdx];
  let randomBtn = document.querySelector(`.${randcolor}`);
  gameSeq.push(randcolor);
  console.log(gameSeq);
  gameflash(randomBtn);
}
function checkans(ind) {
  // let index=level-1;
  if (userSeq[ind] == gameSeq[ind]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h1.innerHTML = `Game Over! Your score is<b> ${level}</b>`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    reset_to();
  }
}

function btnpress() {
  let btn = this;
  console.log(this);
  userflash(btn);
  usercolor = btn.getAttribute("id");
  // console.log(usercolor);
  // userSeq.push(usercolor);
  // console.log(userSeq);
  userSeq.push(usercolor);
  checkans(userSeq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btnn of allbtns) {
  btnn.addEventListener("click", btnpress);
}
function reset_to() {
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}
