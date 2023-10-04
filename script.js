let timeContainer = document.createElement("p");
document.body.appendChild(timeContainer);

setInterval(function () {
  timeContainer.innerText = dayjs().format("hh-mm-ss");
}, 100);
