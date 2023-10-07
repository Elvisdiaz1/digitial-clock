// Clock
let time = document.createElement("p");
time.id = "time";
document.getElementById("timeContainer").appendChild(time);

// To continue the clock instead of staying at one time point
setInterval(function () {
  time.innerText = dayjs().format("hh-mm-ss a");
}, 100);

//Color Choosing Function and html
let colorButton = document.createElement("button");
colorButton.innerText = "Change Clock Color";
document.getElementById("buttons").appendChild(colorButton);

function changeColor() {
  document.getElementById("time").style.color =
    document.getElementById("MyColorPicker").value;
  document.getElementById("time").classList.remove("rainbow");
}

// Light and Dark Mode
function lightMode() {
  document.body.style.backgroundColor = "white";
}
function DarkMode() {
  document.body.style.backgroundColor = "grey";
}

// Color Changing Button Function
// Click the button to choose the color and disable the RGB checkbox and function
colorButton.addEventListener("click", function () {
  if (rgbModeChanger.checked) {
    rgbModeChanger.checked = false;
  }
  // Click the button again to make the clock the color of choice
  document.getElementById("MyColorPicker").style.display = "block";
  colorButton.innerText = "Confirm";

  changeColor();
});

// Light and Dark Mode Checkbox Function
let lightDarkModeChanger = document.getElementById("ldCheckbox");
lightDarkModeChanger.addEventListener("click", function () {
  if (lightDarkModeChanger.checked) {
    DarkMode();
  }
  if (!lightDarkModeChanger.checked) {
    lightMode();
  }
});

// RGB Color Checkbox Function
let rgbModeChanger = document.getElementById("rgbCheckbox");
// When checked, removes user's selected color and adds RGB via the rainbow class
rgbModeChanger.addEventListener("click", function () {
  if (rgbModeChanger.checked) {
    document.getElementById("time").classList.add("rainbow");
    document.getElementById("time").style.color = "";
  }
  //   When unchecked, removes rainbow class and returns user's selected color
  if (!rgbModeChanger.checked) {
    document.getElementById("time").classList.remove("rainbow");
    document.getElementById("time").style.color =
      document.getElementById("MyColorPicker").value;
  }
});
