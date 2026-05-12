let time = 3600; // 1 hour = 3600 seconds
let timer;

function updateDisplay() {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Add leading zero
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("timer").innerHTML =
        `${minutes}:${seconds}`;
}

function startTimer() {

    // Prevent multiple timers
    clearInterval(timer);

    timer = setInterval(() => {

        time--;

        updateDisplay();

        if (time <= 0) {
            clearInterval(timer);
            alert("Study Session Completed!");
        }

    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {

    clearInterval(timer);

    time = 3600;

    updateDisplay();
}

// Show timer initially
updateDisplay();