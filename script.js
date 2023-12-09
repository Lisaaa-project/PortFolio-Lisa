let nightMode = false;

const button = document.getElementById('button');
const text = document.getElementById('nightMode');
const projectsSection = document.getElementById('projects'); // Ajout de cette ligne

button.addEventListener('click', () => {
    nightMode = !nightMode;
    document.body.className = nightMode ? "night-mode" : "";
    button.className = nightMode ? "button on" : "button";
    text.innerText = nightMode ? "on" : "off";
    projectsSection.className = nightMode ? "projects night-mode" : "projects"; // Ajout de cette ligne
});