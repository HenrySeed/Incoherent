function changeRoundLength(amount) {
    timeTotal += amount;
    if (timeTotal <= 5) {
        timeTotal = 5;
        document.getElementById("roundTimeDown").disabled = true;
    } else if (timeTotal >= 180) {
        timeTotal = 180;
        document.getElementById("roundTimeUp").disabled = true;
    } else {
        document.getElementById("roundTimeDown").disabled = false;
        document.getElementById("roundTimeUp").disabled = false;
    }
    timeLeft = timeTotal;
    document.getElementById("roundTimeTotalShower").innerHTML = timeTotal;
    document.getElementById("roundInputPreview").innerHTML = timeTotal;
}

function changeWinPoint(amount) {
    scoreTotal += amount;
    if (scoreTotal <= 10) {
        scoreTotal = 10;
        document.getElementById("winningScoreDown").disabled = true;
    } else if (scoreTotal >= 100) {
        scoreTotal = 100;
        document.getElementById("winningScoreUp").disabled = true;
    } else {
        document.getElementById("winningScoreDown").disabled = false;
        document.getElementById("winningScoreUp").disabled = false;
    }
    document.getElementById("gameInputPreview").innerHTML = scoreTotal;
    document.getElementById("winningPointTotalShower").innerHTML = scoreTotal;
}
