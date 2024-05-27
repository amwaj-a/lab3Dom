let stop1 = document.getElementById("stopButton");
let slow = document.getElementById("slowButton");
let go = document.getElementById("goButton");
let stopColor = document.getElementById("stopLight");
let slowColor = document.getElementById("slowLight");
let goColor = document.getElementById("goLight");

stop1.addEventListener("click", () => {
  stopColor.style.backgroundColor = "red";
  slowColor.style.backgroundColor = "rgba(200,200,0,0.1)";
  goColor.style.backgroundColor = "rgba(0,200,0,0.1)";
});
slow.addEventListener("click", () => {
  slowColor.style.backgroundColor = "yellow";
  stopColor.style.backgroundColor = "rgba(200,0,0,0.1)";
  goColor.style.backgroundColor = "rgba(0,200,0,0.1)";
});
go.addEventListener("click", () => {
  stopColor.style.backgroundColor = "rgba(200,0,0,0.1)";
  slowColor.style.backgroundColor = "rgba(200,200,0,0.1)";
  goColor.style.backgroundColor = "green";
});
