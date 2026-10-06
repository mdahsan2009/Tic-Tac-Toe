let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.background = "#081b31";
}

const showWinnner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You lose.");
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
} 

const playGame = (userChoice) => {
    // Gnenerate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        // Draw game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === 'rock') {
            //scissors, paper
            userWin = compChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else 
        {
            // rock, paper
            userWin = compChoice === "rock" ? false: true ;
        }
        showWinnner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice)
    })
})