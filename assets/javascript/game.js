let team01_numOfShorts_Element = document.querySelector("#teamone-numshots");
let team02_numOfShorts_Element = document.querySelector("#teamtwo-numshots");
let team01_numOfGoals_Element = document.querySelector("#teamone-numgoals");
let team02_numOfGoals_Element = document.querySelector("#teamtwo-numgoals");
let team01_score_Element = document.querySelector("#teamone-score");
let team02_score_Element = document.querySelector("#teamtwo-score");
let numOfRound_Element = document.querySelector("#num-resets");
let shootButton_team01 = document.querySelector("#teamone-shoot-button");
let shootButton_team02 = document.querySelector("#teamtwo-shoot-button");
let newRoundButton = document.querySelector("#reset-button");
let newGameButton = document.querySelector("#start-game-button");
let quitButton = document.querySelector("#quit-game-button");
let gameField = document.querySelector("#gameField");
let gameContainer = document.querySelector("#gameContainer");

let team01_countOfShorts = 0;
let team01_countOfGoals = 0;
let team02_countOfShorts = 0;
let team02_countOfGoals = 0;
let team01_countScore = 0;
let team02_countScore = 0;
let countOfRound = 1;


let scoreIsSet = false;
let newGame = true;
let countOfShorts;
let countOfGoals;
let goalColor;
let shortColor;
let winner;


//  Shoot Button.  TEAM 1. Event 'on click'

shootButton_team01.addEventListener("click", function () {

    if (team01_countOfShorts <= 9) {

        playAudio("./assets/sounds/tree.mp3"); // call function to play sound

        goal_function(team01_countOfShorts, team01_countOfGoals); // call function to calculate the RANDOM result. Return number of shorts, number of goals

        team01_countOfShorts = arr[0];
        team01_countOfGoals = arr[1];

        changeColorForGoalNumber(team01_countOfGoals);  //call function to change color of goals number.Return goalColor

        team01_numOfGoals_Element.style.color = goalColor;

        changeColorForShotNumber(team01_countOfShorts); //call function to change color of shorts number. Return shortColor

        team01_numOfShorts_Element.style.color = shortColor;

        team01_numOfShorts_Element.innerHTML = team01_countOfShorts;
        team01_numOfGoals_Element.innerHTML = team01_countOfGoals;


        if ((team01_countOfShorts + team02_countOfShorts) === 20 && scoreIsSet === false) {
            
            setTheScore();  // call function to calculate and set the score
            scoreIsSet = true;

            playAudio("./assets/sounds/hitcrowdcheer.mp3");  // call function to play sound
        }

    } else {

        if (team02_countOfShorts === 10) {

            alert("Round is over! Start new round!");
            console.log("team01_countOfShorts  :: " + team01_countOfShorts);
            console.log("team02_countOfShorts  :: " + team02_countOfShorts);

        } else {
            alert(" Number of your shorts is 10. Wait for other Team!");
            console.log("team01_countOfShorts  :: " + team01_countOfShorts);
            console.log("team02_countOfShorts  :: " + team02_countOfShorts);
        }
    }
});

// Shoot Button.  TEAM 2. Event 'on click'
shootButton_team02.addEventListener("click", function () {

    if (team02_countOfShorts <= 9) {

        playAudio("./assets/sounds/bathitball.mp3"); // call function to play sound

        goal_function(team02_countOfShorts, team02_countOfGoals); // call function to calculate the RANDOM result. Return number of shorts, number of goals

        team02_countOfShorts = arr[0];
        team02_countOfGoals = arr[1];

        changeColorForGoalNumber(team02_countOfGoals);  //call function to change color of goals number.Return goalColor

        team02_numOfGoals_Element.style.color = goalColor;

        changeColorForShotNumber(team02_countOfShorts); //call function to change color of shorts number. Return shortColor

        team02_numOfShorts_Element.style.color = shortColor;


        team02_numOfShorts_Element.innerHTML = team02_countOfShorts;
        team02_numOfGoals_Element.innerHTML = team02_countOfGoals;

        if ((team01_countOfShorts + team02_countOfShorts) === 20 && scoreIsSet === false) {

            playAudio("./assets/sounds/hitcrowdcheer.mp3"); // call function to play sound

            setTheScore(); // call function to calculate and set the score
            
            scoreIsSet = true;
        }


    } else {
        if (team01_countOfShorts === 10) {

            alert("Round is over! Start new round!");
            console.log("team01_countOfShorts  :: " + team01_countOfShorts);
            console.log("team02_countOfShorts  :: " + team02_countOfShorts);

        } else {
            alert(" Number of your shorts is 10. Wait for other Team!");
            console.log("team01_countOfShorts  :: " + team01_countOfShorts);
            console.log("team02_countOfShorts  :: " + team02_countOfShorts);
        }
    }

});

/* Function goal_function.
Calculate the RANDOM result. Return ARRAY [countOfShorts, countOfGoals]*/

function goal_function(countOfShorts, countOfGoals) {
    let result = Math.random();
    let goalInClick;

    console.log("result   :  " + result);

    if (result >= 0.5) {
        goalInClick = 0;
        console.log("goalInClick  :" + goalInClick);
    } else {
        goalInClick = 1;
        console.log("goalInClick  :" + goalInClick);
    }
    countOfShorts += 1;
    countOfGoals += goalInClick;

    arr = [countOfShorts, countOfGoals];

    return arr;
}

// Function setTheScore. Calculate and set the score
function setTheScore() {

    if (team01_countOfGoals > team02_countOfGoals) {
        team01_countScore += 1;
    } else if (team01_countOfGoals < team02_countOfGoals) {
        team02_countScore += 1;
    } else {
        team01_countScore += 1;
        team02_countScore += 1;
    }

    team01_score_Element.innerHTML = team01_countScore;
    team02_score_Element.innerHTML = team02_countScore;
}
// BUTTON. New round. Event 'on click'

newRoundButton.addEventListener("click", function () {

    if (team01_countOfShorts + team02_countOfShorts === 20) {

        playAudio("./assets/sounds/GongSound.mp3"); // call function to play sound

       //reset the number of shorts and the number of goals
        scoreIsSet = false;
        team01_countOfShorts = 0;
        team01_countOfGoals = 0;
        team02_countOfShorts = 0;
        team02_countOfGoals = 0;

        team01_numOfShorts_Element.innerHTML = team01_countOfShorts;
        team02_numOfShorts_Element.innerHTML = team02_countOfShorts;
        team01_numOfGoals_Element.innerHTML = team01_countOfGoals;
        team02_numOfGoals_Element.innerHTML = team02_countOfGoals;

        //calculate the number of round
        countOfRound += 1;
        numOfRound_Element.innerHTML = countOfRound;

    } else {
        alert("Round is not over. Each Team should implement 10 Goals!");
    }

});


// Start Game button. Event 'on click'

newGameButton.addEventListener('click', function () {
    if (newGame === false) {

        alert("Do you really want to start new game?"); // if click on Start button by mistke

    } else {

        newGame = false;

        startTheGame(); //call  function to Stert new game

        playAudio("./assets/sounds/crowdapplause.mp3");  // call function to play sound

        gameContainer.style.backgroundColor = "red";  //change the background color of gameContainer

    }

});

// Quit Game button. Event 'on click'

quitButton.addEventListener('click', function () {

    gameContainer.style.backgroundColor = "gray"; //change the background color of gameContainer

    playAudio("./assets/sounds/fanfare.mp3");  // call function to play sound

    whoIsWinner()   // call function to calculate who is Winner. return winner

    // to forse play sound before  the alert window appears
    setTimeout(function () {
        alert("Congratulations!!! " + winner + " with the score: " + team01_countScore + " : " + team02_countScore);
    }, 1000);  

    newGame = true;

});

// Function. Start the game. Reset the counters of shorts, goals. Reset displayed numbers
function startTheGame() {
    team01_countOfShorts = 0;
    team01_countOfGoals = 0;
    team02_countOfShorts = 0;
    team02_countOfGoals = 0;
    team01_countScore = 0;
    team02_countScore = 0;
    countOfRound = 1;
    scoreIsSet = false;

    team01_numOfShorts_Element.innerHTML = team01_countOfShorts;
    team02_numOfShorts_Element.innerHTML = team02_countOfShorts;
    team01_numOfGoals_Element.innerHTML = team01_countOfGoals;
    team02_numOfGoals_Element.innerHTML = team02_countOfGoals;
    team01_score_Element.innerHTML = team01_countScore;
    team02_score_Element.innerHTML = team02_countScore;
    numOfRound_Element.innerHTML = countOfRound;
}

//Function. Change color for number of goals. Return color for number od goals
function changeColorForGoalNumber(countOfGoals) {
    switch (countOfGoals) {
        case 0:
            goalColor = "#000000";
            break;
        case 1:
            goalColor = "#B30095";
            break;
        case 2:
            goalColor = "#E600E6";
            break;
        case 3:
            goalColor = "#0000E6";
            break;
        case 4:
            goalColor = "#E32636";
            break;
        case 5:
            goalColor = "#1EB300";
            break;
        case 6:
            goalColor = "#E52B50";
            break;
        case 7:
            goalColor = "#73E600";
            break;
        case 8:
            goalColor = "B284BE";
            break;
        case 9:
            goalColor = "#E67300";
            break;
        case 10:
            goalColor = "#E60000";
            break;
        default:
            goalColor = "#E60000";
    }
    return goalColor;
}

//Function. Change color for number of SHORTS TAKEN. Return color for number od goals
function changeColorForShotNumber(countOfShorts) {
    if (countOfShorts <= 7) {
        shortColor = "#915100";
    } else if (countOfShorts > 7 && countOfShorts < 10) {
        shortColor = "0000FF";
    } else {
        shortColor = "#FF0000";
    }
    return shortColor;
}

// Function. Play sound
function playAudio(url) {
    new Audio(url).play();
}

// Function. Calculate who is the winner in the game. Return winner
function whoIsWinner() {

    if (team01_countScore > team02_countScore) {
        
        winner = "Team 1 won the Game";

    } else if (team01_countScore < team02_countScore) {

        winner = "Team 2 won the Game";

    } else {

        winner = "Dead heat!!! Team 1 and Team 2 won the Game"
    }

    return winner;
}