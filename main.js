console.log('JS Connected!');

const menubtn = document.querySelector(".menubtn");
const scrollpad = document.querySelector(".scrollpad");
const seeker = document.querySelector(".seeker");
const greets = ["Hello","Sayonara","Khublei"];
const greeting = document.getElementById("greeting");

let timer;

seeker.addEventListener("click", () => {
  
  menubtn.style.display = "grid";
  seeker.style.display = "none";
  
  startTimer();
});

menubtn.addEventListener("click", () => {
  
  menubtn.style.display = "none";
  scrollpad.style.display = "flex";
  
  startTimer();
});

scrollpad.addEventListener("click", () => {
  
  startTimer();
  
});

function startTimer() {
  
  clearTimeout(timer);
  
  timer = setTimeout(() => {
    
    menubtn.style.display = "grid";
    scrollpad.style.display = "none";
    timer = setTimeout(() => {
    
    menubtn.style.display = "none";
    seeker.style.display = "block";
    },2000);
    },2000);
}