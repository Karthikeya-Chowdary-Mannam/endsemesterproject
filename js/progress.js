let watched = 2;

let total = 4;

let percent = (watched / total) * 100;

document.getElementById("watchedCount").innerText =
    watched + " / " + total;

document.getElementById("progressFill").style.width =
    percent + "%";