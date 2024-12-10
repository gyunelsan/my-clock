function updateClock() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode"); // Переключение класса для body
}

document.getElementById("toggleMode").addEventListener("click", toggleMode);


setInterval(updateClock, 1000);
updateClock();
 