function changeRoundLength(amount) {
    timeTotal += amount;
    if (timeTotal < 5) {
        timeTotal = 5;
    } else if (timeTotal > 180) {
        timeTotal = 180;
    }
    document.getElementById("roundTimeTotalShower").innerHTML = timeTotal;
    document.getElementById("roundInputPreview").innerHTML = timeTotal;
}
function changeWinPoint(amount) {
    scoreTotal += amount;
    if (scoreTotal < 10) {
        scoreTotal = 10;
    } else if (scoreTotal > 100) {
        scoreTotal = 100;
    }
    document.getElementById("gameInputPreview").innerHTML = scoreTotal;
    document.getElementById("winningPointTotalShower").innerHTML = scoreTotal;
}
