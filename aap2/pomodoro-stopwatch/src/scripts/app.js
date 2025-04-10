// JavaScript code for the Pomodoro stopwatch functionality

// Select DOM elements
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const statusDisplay = document.getElementById('status');
const timerDisplay = document.getElementById('timer');
const themeToggle = document.getElementById('theme-toggle');

let timerInterval;
let timeRemaining = 25 * 60; // 25 minutes in seconds
let isRunning = false;

// Update the timer display
function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');

    // Change color to red if time is less than or equal to 5 minutes
    if (timeRemaining <= 5 * 60) {
        timerDisplay.style.color = '#FF0000'; // Red
    } else {
        timerDisplay.style.color = '#4CAF50'; // Green
    }
}

// Start the timer
function startTimer() {
    if (isRunning) return; // Prevent multiple intervals
    isRunning = true;
    statusDisplay.textContent = 'Timer is running...';

    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            statusDisplay.textContent = 'Time is up!';
            isRunning = false;
        }
    }, 1000);
}

// Stop the timer
function stopTimer() {
    if (!isRunning) return;
    clearInterval(timerInterval);
    isRunning = false;
    statusDisplay.textContent = 'Timer stopped.';
}

// Reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = 25 * 60; // Reset to 25 minutes
    isRunning = false;
    updateDisplay();
    statusDisplay.textContent = 'Timer reset.';
}

// Toggle dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
themeToggle.addEventListener('click', toggleTheme);

// Initialize the display
updateDisplay();