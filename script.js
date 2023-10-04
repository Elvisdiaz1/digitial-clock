let timeContainer = document.createElement("p");

timeContainer.innerText = dayjs().format("hh-mm-ss");

document.body.appendChild(timeContainer);
