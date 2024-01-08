function getNextNewYear() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextNewYear = new Date(`Jan 1, ${currentYear + 1} 00:00:00`);
    return nextNewYear.getTime();
}

const updateTimer = () => {
    const now = new Date().getTime();
    const countdownDate = getNextNewYear();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "Happy New Year!";
    }
};

setInterval(updateTimer, 1000);
