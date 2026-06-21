let userInput = document.querySelector("#guessField");
let submit = document.querySelector(".guessSubmit");
let PrevGuess = document.querySelector(".guesses");
let result = document.querySelector(".lastResult");
let hint = document.querySelector(".lowOrHi");

let randomNumber = (Math.floor(Math.random() * 100) + 1);
console.log(randomNumber);
let PrevGuess_arr = [];
let GuessRemain = 10;

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let userInp = Number(userInput.value);
    console.log(userInp);


    if (userInp <= 0 || isNaN(userInp)) {
        alert('Please enter valid input');
    } else {
        PrevGuess_arr.push(userInp);
        userInput.value = "";
        console.log(PrevGuess_arr)
        PrevGuess.textContent = PrevGuess_arr
    }

    Hint(userInp);

    if (userInp !== randomNumber) {
        GuessRemaining();
    }
});

function GuessRemaining() {
    GuessRemain--;
    result.textContent = GuessRemain;

    if (GuessRemain === 0) {
        hint.textContent = `Game Over! The correct number was ${randomNumber}`;
        setTimeout(() => {
            resetGame();
        }, 3000);
    }
}

function Hint(userInp) {
    if (userInp === randomNumber) {
        hint.textContent = `Game Over! The correct number was ${randomNumber}`;
        resetGame();
    } else if (userInp > randomNumber) {
        hint.textContent = "Too high!!"
    } else {
        hint.textContent = "Too low!!"
    }
}


function resetGame() {
    PrevGuess_arr = [];
    GuessRemain = 10;

    randomNumber = (Math.floor(Math.random() * 100) + 1);

    PrevGuess.textContent = "";
    result.textContent = GuessRemain;
    hint.textContent = "";

    userInput.value = "";
}










