const lamp = document.getElementById("lamp");
const switchButton = document.getElementById("switch");
const statusText = document.getElementById("status");

let isLightOn = false;

switchButton.addEventListener("click", () => {
  isLightOn = !isLightOn;

  if (isLightOn) {
    lamp.classList.remove("off");
    lamp.classList.add("on");
    statusText.textContent =
      "The light is on. Click the switch to turn it off.";
  } else {
    lamp.classList.remove("on");
    lamp.classList.add("off");
    statusText.textContent =
      "The light is off. Click the switch to turn it on.";
  }

  switchButton.classList.add("active");
  setTimeout(() => switchButton.classList.remove("active", 200));
});