

const Input = document.querySelector(".input");
const button = document.querySelector(".button");
const buttonClose = document.querySelector(".close");
const alarm = new Audio()
let interval;
alarm.src = "./ringtone.mp3"

buttonClose.addEventListener("click", () => {
  clearInterval(interval);
  alarm.pause()
  alarm.pause()
})


button.addEventListener("click", (e) => {
e.preventDefault()
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
