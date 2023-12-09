let nightMode = false;

const button = document.getElementById('button');
const text = document.getElementById('nightMode');

button.addEventListener('click', () => {
  nightMode = !nightMode;
  document.body.className = nightMode ? "night-mode" : "";
  button.className = nightMode ? "button on" : "button";
  text.innerText = nightMode ? "on" : "off";
});