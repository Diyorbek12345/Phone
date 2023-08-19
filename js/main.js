

const Input = document.querySelector(".input");
const button = document.querySelector(".button");
const buttonClose = document.querySelector(".close");
console.log(buttonClose);
const alarm = new Audio()
let interval;
alarm.src = "./nasheed.mp3"



button.addEventListener("click", (e) => {
  e.preventDefault()
  buttonClose.addEventListener("click", () => {
    clearInterval(interval);
    alarm.pause()
    alarm.pause()
  })
let TIME = Input.value
console.log(TIME);
interval = setInterval(() => {
    let date = new Date();
    let options = { hour: '2-digit', minute: '2-digit' };
    let time = date.toLocaleTimeString("it-IT", options);
    console.log(time);
    if (time == TIME) {
      console.log(time);
      alarm.play();
      clearInterval(interval);
    }
  }, 1000);
})
