
let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const userchoice = choice.getAttribute("id");
        playGame(userchoice);

    });
});

let genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};


let userScorepara = document.querySelector("#user_score");
let compScorepara = document.querySelector("#comp_score");
const msg = document.querySelector("#msg");
let userScore = 0;
let compScore = 0;

let playGame = (userchoice) => {
    const compchoice = genCompChoice();
    if (userchoice === compchoice) {
        msg.innerText = "Game was draw play again!";
        msg.style.backgroundColor = "black";
    }
    else
        if (
            (userchoice === "rock" && compchoice === "scissor") || (userchoice === "paper" && compchoice === "rock") || (userchoice === "scissor" && compchoice === "paper")
        ) {
            msg.innerText = `You win! your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor = "green";
            userScore++;
            userScorepara.innerText = userScore;
        }
        else {
            msg.innerText = `Computer wins! ${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor = "red";
            compScore++;
            compScorepara.innerText = compScore;
        }

};





