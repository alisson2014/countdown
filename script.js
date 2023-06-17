const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const launch = "1 Dec 2023";

const countdown = () => {
  const launchDate = new Date(launch);
  const currentDate = new Date();

  const totalSeconds = (launchDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = ": " + formatTime(minutes);
  secondsEl.innerHTML = ": " + formatTime(seconds);
}

const formatTime = time => time < 10 ? `0${time}` : time;

countdown()

setInterval(countdown, 1000)
