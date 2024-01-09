let button1 = document.getElementById("start-timeout");
let timeout = document.getElementById("timeout-display");
let button2 = document.getElementById("start-interval");
let interval = document.getElementById("interval-display");

button1.addEventListener("click", () => {
  timeout.textContent = "Getting ready...";
  setTimeout(ready, 5000);
});

function ready() {
  timeout.textContent = "READY";
}

let setInt = null;

button2.addEventListener("click", () => {
  setInt = setInterval(counter, 1000);
  console.log("im here", count);
});

let count = 5;

function counter() {
  interval.textContent = count--;
  if (count === 0) {
    interval.textContent = "GO!";
    clearInterval(setInt);
  }
}
