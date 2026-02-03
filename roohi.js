const PASSWORD = "kunju"; // CHANGE THIS
let attempts = 0;

function checkPassword(){
  const input = document.getElementById("password").value;
  const hint = document.getElementById("hint");

  if(input === PASSWORD){
    go(2);
  } else {
    attempts++;
    if(attempts === 1){
      hint.innerText = "Hint 💕 : don't worry Babe 🤎!,  I'll give u hint on next try ";
    } else {
      alert("Still wrong , starts with 'k' ends with 'u' and you’re cute");
    }
  }
}

function go(n){
  document.querySelector(".active").classList.remove("active");
  document.getElementById("p"+n).classList.add("active");
}

/* QUESTIONS LOGIC */
function checkAnswers(){
  const a1 = document.getElementById("q1").value.toLowerCase();
  const a2 = document.getElementById("q2").value.toLowerCase();

  if(a1 && a2){
    go(6);
  } else {
    alert("Answer properly 😌");
  }
}

/* COUNTDOWN */
const meetDate = new Date("2026-03-01");

setInterval(()=>{
  const el = document.getElementById("countdown");
  if(!el) return;

  const now = new Date();
  const days = Math.floor((meetDate-now)/(1000*60*60*24));
  el.innerText =
    days>0 ? `Days until I see you: ${days} ❤️` : "Today ❤️";
},1000);
const images = [
  "us 1.jpeg",
  "us 2.jpeg",
  "us 3.jpeg"
];

let current = 0;

function showImage(){
  document.getElementById("sliderImage").src = images[current];
}

function nextImage(){
  current = (current + 1) % images.length;
  showImage();
}

function prevImage(){
  current = (current - 1 + images.length) % images.length;
  showImage();
}
function openGift(){
  document.querySelector(".gift-box").innerText = "💖";
  document.getElementById("giftImage").classList.remove("hidden");
  document.getElementById("finalBtn").classList.remove("hidden");
}
