/* 🔐 UNLOCK */
function unlock() {
  const name = document.getElementById("nameInput").value;

  if (name.toLowerCase() === "babi") {
    document.getElementById("gameArea").classList.remove("hidden");
    document.getElementById("unlockMsg").innerHTML = "💜 Welcome my babi 💙";
    typeText();
    countdown();
  } else {
    document.getElementById("unlockMsg").innerHTML = "Try again 💔";
  }
}

/* typing */
const text = "Welcome to your Love Game Room 💜💙";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(typeText, 50);
  }
}

/* COUNTDOWN */
function countdown() {
  const target = new Date();
  target.setDate(target.getDate() + 30);

  setInterval(() => {
    const now = new Date().getTime();
    const dist = target - now;
    const days = Math.floor(dist / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = days + " days left 💜";
  }, 1000);
}

/* WHY I LOVE YOU */
const reasons = [
  "God-fearing 💜",
  "Faithful 💙",
  "Kind and Gentleman",
  "Smart",
  "Talented",
  "Very gwapoo 😭",
  "You make me feel safe",
  "You support me always",
  "You are my babi 💜"
];

let r = 0;
function showReason() {
  document.getElementById("reasonBox").innerHTML =
    reasons[r % reasons.length];
  r++;
}

/* SPIN */
const prizes = [
  "💜 Hug soon",
  "💙 I love you",
  "💜 Movie date",
  "💙 Extra clingy mode",
  "💜 Forever mine"
];

function spinWheel() {
  document.getElementById("wheelResult").innerHTML =
    prizes[Math.floor(Math.random() * prizes.length)];
}

/* SCRATCH */
function scratch() {
  const msgs = [
    "💜 You are my happiness",
    "💙 I miss you babi",
    "💜 I love you endlessly",
    "💙 You are my safe place"
  ];

  document.getElementById("scratchResult").innerHTML =
    msgs[Math.floor(Math.random() * msgs.length)];
}

/* GIFT */
function openGift() {
  document.getElementById("giftResult").innerHTML =
    "🎁 My heart is yours forever 💜💙";
}

/* CHAT */
function chat() {
  const chat = [
    "Babi: I love you 💜",
    "You: I miss you 💙",
    "Babi: Hug soon 😭",
    "You: Always yours 💜"
  ];

  document.getElementById("chatBox").innerHTML =
    chat[Math.floor(Math.random() * chat.length)];
}

/* SLIDESHOW */
const images = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let s = 0;

function nextSlide() {
  s = (s + 1) % images.length;
  document.getElementById("slide").src = images[s];
}

/* POINTS */
let points = 0;

function addPoint() {
  points++;
  document.getElementById("points").innerHTML = points + " 💜";
}

/* MUSIC */
function toggleMusic() {
  const music = document.getElementById("music");
  music.paused ? music.play() : music.pause();
}

/* LETTER */
function openLetter() {
  document.getElementById("letter").classList.remove("hidden");
}

/* ENDING */
function finalScene() {
  document.body.innerHTML = `
    <div style="color:white;text-align:center;padding:50px;
    background: linear-gradient(-45deg,#4b0082,#1e90ff,#8a2be2);
    height:100vh;">

      <h1>💜 Game Complete 💙</h1>
      <h2>I love you forever, babi 💖</h2>

    </div>
  `;
}

/* HEARTS */
function heart() {
  const h = document.createElement("div");
  h.classList.add("heart");
  h.innerHTML = "💜";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 4000);
}

setInterval(heart, 200);
