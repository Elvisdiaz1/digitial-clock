let time = document.createElement("p");
time.id = "time";
document.getElementById("timeContainer").appendChild(time);

let colorButton = document.createElement("button");
colorButton.innerText = "Change Clock Color";
document.getElementById("buttons").appendChild(colorButton);

setInterval(function () {
  time.innerText = dayjs().format("hh-mm-ss a");
}, 100);

// window.addEventListener("click", changeColor);
function changeColor() {
  document.getElementById("time").style.color =
    document.getElementById("MyColorPicker").value;
}

colorButton.addEventListener("click", function () {
  document.getElementById("MyColorPicker").style.display = "block";
  colorButton.innerText = "Confirm";
  changeColor();
});
