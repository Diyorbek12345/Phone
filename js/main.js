// const currentTime = document.querySelector(".title");
// const selectMenu = document.querySelectorAll("select");
// const content = document.querySelector(".content");
// const setAlarmBtn = document.querySelector(".btn");

// let alarmTime;
// (isAlarmSet = false), (ringtone = new Audio("ringtone.mp3"));

// for (let i = 12; i > 0; i--) {
//   i = i < 10 ? "0" + i : i;
//   console.log(i);
//   let option = `<option value="${i}">${i}</option>`;
//   selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
// }

// for (let i = 59; i >= 0; i--) {
//   i = i < 10 ? "0" + i : i;
//   let option = `<option value="${i}">${i}</option>`;
//   selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
// }

// for (let i = 2; i > 0; i--) {
//   let ampm = i == 1 ? "AM" : "PM";
//   let option = `<option value="${ampm}">${ampm}</option>`;
//   selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
// }

// setInterval(() => {
//   let date = new Date();
//   h = date.getHours();
//   m = date.getMinutes();
//   s = date.getSeconds();
//   ampm = "AM";

//   if (h >= 12) {
//     h = h - 12;
//     ampm = "PM";
//   }

//   h = h == 0 ? (h = 12) : h;

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

//   if (alarmTime == `${h}:${m} ${ampm}`) {
//     ringtone.play();
//     ringtone.loop = true;
//     console.log(alarmTime)
//   }
// }, 1000);

// function setAlarm() {
//   if (isAlarmSet) {
//     alarmTime = "";
//     ringtone.pause();
//     content.classList.remove("disabled");
//     setAlarmBtn.innerText = "Set Alarm";
//     return (isAlarmSet = false);
//   }

//   let Time = `${selectMenu[0].value} : ${selectMenu[1].value} : ${selectMenu[2].value}`;

//   if (
//     Time.includes("hour") ||
//     Time.includes("Minute") ||
//     Time.includes("AM/PM")
//   ) {
//     return alert("please select valid time to set Alarm");
//   }
//   isAlarmSet = true;
//   alarmTime = Time;
//   // content.classList.add("disabled")
//   setAlarmBtn.innerText = "Clear Alarm";
// }

// setAlarmBtn.addEventListener("click", setAlarm);

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
