startingNumber = 0
totalNumber = 0
userNum1 = 0
userNum2 = 0
userNum3 = 0
userNum4 = 0
winCount = 0
lossCount = 0


//Create a random number between 19 and 120
function computersNumber() {
    startingNumber = Math.floor(Math.random() * (120 - 19) + 19)
    $("#random-number").html(startingNumber);
    $("#loss-counter").html(lossCount);
    $("#win-counter").html(winCount);
}
computersNumber()

function activeScore(num) {
    $("#active-score").html(num)
}

//Create random numbers for each of the four crystals between 1-12

$("#crys-1").on("click", function() {
    if (totalNumber === 0) {
        userNum1 = Math.floor(Math.random() * (12 - 1) + 1);
        totalNumber = userNum1
        activeScore(totalNumber);
        scoreChecker()
    } else if (totalNumber > 0 && userNum1 === 0) {
        userNum1 = Math.floor(Math.random() * (5 - 1) + 1);
        totalNumber = userNum1 + totalNumber;
        activeScore(totalNumber);
        scoreChecker()
    } else if (totalNumber > 0 && userNum1 > 0) {
        totalNumber = userNum1 + totalNumber;
        activeScore(totalNumber)
        scoreChecker()
    }
})

$("#crys-2").on("click", function() {
    if (totalNumber === 0) {
        userNum2 = Math.floor(Math.random() * (12 - 1) + 1);
        totalNumber = userNum2;
        activeScore(totalNumber);
        scoreChecker()
    } else if (totalNumber > 0 && userNum2 === 0) {
        userNum2 = Math.floor(Math.random() * (4 - 1) + 1);
        totalNumber = userNum2 + totalNumber;
        activeScore(totalNumber);
        scoreChecker()
    } else if (totalNumber > 0 && userNum2 > 0) {
        totalNumber = userNum2 + totalNumber;
        activeScore(totalNumber)
        scoreChecker()
    }
})

$("#crys-3").on("click", function() {
    if (totalNumber === 0) {
        userNum3 = Math.floor(Math.random() * (12 - 1) + 1);
        totalNumber = userNum3;
        activeScore(totalNumber);
        scoreChecker()
    } else if (totalNumber > 0 && userNum3 === 0) {
        userNum3 = Math.floor(Math.random() * (3 - 1) + 1);
        totalNumber = userNum3 + totalNumber;
        activeScore(totalNumber);
        scoreChecker()
    } else if (totalNumber > 0 && userNum3 > 0) {
        totalNumber = userNum3 + totalNumber;
        activeScore(totalNumber)
        scoreChecker()
    }
})

$("#crys-4").on("click", function() {
    if (totalNumber === 0) {
        userNum4 = Math.floor(Math.random() * (12 - 1) + 1);
        totalNumber = userNum4;
        activeScore(totalNumber);
        scoreChecker()
    } else if (totalNumber > 0 && userNum4 === 0) {
        userNum4 = Math.floor(Math.random() * (2 - 1) + 1);
        totalNumber = userNum4 + totalNumber;
        activeScore(totalNumber);
        scoreChecker()
    } else if (totalNumber > 0 && userNum4 > 0) {
        totalNumber = userNum4 + totalNumber;
        activeScore(totalNumber)
        scoreChecker()
    }
})

function scoreChecker() {
    if (totalNumber < startingNumber) {
        return false
    }
    if (startingNumber === totalNumber) {
        winCount++
        $("#win-counter").html(winCount)
        computersNumber()
        totalNumber = 0
        activeScore(totalNumber)
    } else if (totalNumber > startingNumber) {
        lossCount++
        $("#loss-counter").html(lossCount)
        computersNumber()
        totalNumber = 0
        activeScore(totalNumber)
    }
}



//update results to the html but keep results hidden from users

//create an onclick function for each of the crystals when one is clicked the total assigned to said crystal is added to the total score

//compare the random number to the total score every time a crystal is clicked 

//Create a win event and loss event