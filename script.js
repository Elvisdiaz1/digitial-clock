let timeContainer = document.createElement("p");
timeContainer.classList.add("time");
document.body.appendChild(timeContainer);

setInterval(function () {
  timeContainer.innerText = dayjs().format("hh-mm-ss a");
}, 100);
