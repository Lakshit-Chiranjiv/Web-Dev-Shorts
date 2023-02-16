const movieData = [
  {
    title: "500 Days of Summer",
    emojiImgs: "👦💔👱‍♀️☀️",
    genres: ["Comedy", "Romance", "Drama"],
    itemLink: "https://www.imdb.com/title/tt1022603/",
    type: "movie",
    year: 2009,
  },
]
//   {
//     title: "500 Days of Summer",
//     emojiImgs: "👦💔👱‍♀️☀️",
//     genres: ["Comedy", "Romance", "Drama"],
//     itemLink: "https://www.imdb.com/title/tt1022603/",
//     type: "movie",
//     year: 2009,
//   },
const generateRandomMovie = () => {
    const randomMovie =
        movieData[Math.floor(Math.random() * movieData.length)];
    return randomMovie;
}

let userGuess = "";
let tries = 10;
let generatedMovie;
let generatedMovieTitle; 
let guessString = "";
let prevGuessString = "";

const triesText = document.querySelector("#tries");
const emojisPara = document.querySelector('#emo')
const result = document.querySelector("#result");
const guess = document.querySelector("#guess");

const emojiDiv = document.querySelector(".emoji");
const guessingDiv = document.querySelector(".guessing");
const inputBtns = document.querySelector(".inputBtns");
const resultDiv = document.querySelector(".result");
const spinner = document.querySelector(".spinner");
const card = document.querySelector(".card");

const renderButtons = () => {

    // append buttons for A-Z and 0-9 in inputBtns div
    for (let i = 65; i < 91; i++) {

        // add a break tag after every 9th button
        if (i === 74 || i === 83) {
            inputBtns.appendChild(document.createElement("br"));
        }

        const btn = document.createElement("button");
        btn.classList.add("letterBtn");
        btn.classList.add("btn");
        btn.innerText = String.fromCharCode(i);
        inputBtns.appendChild(btn);
        btn.addEventListener("click", () => {
            btn.disabled = true;

            if(!userGuess.includes(btn.innerText)){
                userGuess += btn.innerText;
            }
            if(!generatedMovieTitle.includes(btn.innerText)){
                tries--;
                triesText.innerText = tries;
                if(tries === 0){
                    resultDiv.classList.remove("hidden");
                    result.innerText = "You Lose!";
                    result.classList.add("lose");
                    result.classList.remove("win");

                    // disable all the buttons
                    const enabledBtns = document.querySelectorAll(".btn:not(:disabled)");
                    enabledBtns.forEach((btn) => {
                        btn.disabled = true;
                    })
                }
            }
            prevGuessString = guessString;
            guessString = ""
            for (let i = 0; i < generatedMovieTitle.length; i++) {
                if (generatedMovieTitle[i] === btn.innerText) {
                    guessString += btn.innerText;
                }
                else if (generatedMovieTitle[i] === " ") {
                    guessString += " ";
                }
                else {
                    if (prevGuessString[i] !== "_") {
                        guessString += prevGuessString[i];
                    }
                    else {
                        guessString += "_";
                    }
                }
            }
            guess.innerText = guessString;
            if(guessString === generatedMovieTitle){
                resultDiv.classList.remove("hidden");
                result.innerText = "You Win!";
                result.classList.add("win");
                result.classList.remove("lose");

                // disable all the buttons
                const enabledBtns = document.querySelectorAll(".btn:not(:disabled)");
                enabledBtns.forEach((btn) => {
                    btn.disabled = true;
                })
            }
        })
    }

    inputBtns.appendChild(document.createElement("br"));

    for (let i = 48; i < 58; i++) {
        const btn = document.createElement("button");
        btn.classList.add("numberBtn");
        btn.classList.add("btn");
        btn.innerText = String.fromCharCode(i);
        inputBtns.appendChild(btn);
        btn.addEventListener("click", () => {
            btn.disabled = true;
            if(!userGuess.includes(btn.innerText)){
                userGuess += btn.innerText;
            }
            if(!generatedMovieTitle.includes(btn.innerText)){
                tries--;
                triesText.innerText = tries;
                if(tries === 0){
                    resultDiv.classList.remove("hidden");
                    result.innerText = "You Lose!";
                    result.classList.add("lose");
                    result.classList.remove("win");

                    // disable all the buttons
                    const enabledBtns = document.querySelectorAll(".btn:not(:disabled)");
                    enabledBtns.forEach((btn) => {
                        btn.disabled = true;
                    })
                }
            }
            prevGuessString = guessString;
            guessString = ""
            for (let i = 0; i < generatedMovieTitle.length; i++) {
                if (generatedMovieTitle[i] === btn.innerText) {
                    guessString += btn.innerText;
                }
                else if (generatedMovieTitle[i] === " ") {
                    guessString += " ";
                }
                else {
                    if (prevGuessString[i] !== "_") {
                        guessString += prevGuessString[i];
                    }
                    else {
                        guessString += "_";
                    }
                }
            }
            guess.innerText = guessString;
            if(guessString === generatedMovieTitle){
                resultDiv.classList.remove("hidden");
                result.innerText = "You Win!";
                result.classList.add("win");
                result.classList.remove("lose");

                // disable all the buttons
                const enabledBtns = document.querySelectorAll(".btn:not(:disabled)");
                enabledBtns.forEach((btn) => {
                    btn.disabled = true;
                })
            }
        })
    }

}

const startGame = () => {
    tries = 10;
    triesText.innerText = tries;
    generatedMovie = generateRandomMovie();
    generatedMovieTitle = generatedMovie.title.toUpperCase(); 
    guessString = "";
    prevGuessString = "";
    for (let i = 0; i < generatedMovieTitle.length; i++) {
        if (generatedMovieTitle[i] === " ") {
            guessString += " ";
        } else {
            guessString += "_";
        }
    }
    emojisPara.innerText = generatedMovie.emojiImgs;
    guess.innerText = guessString;
    result.innerText = "";
    //hide result div
    resultDiv.classList.add("hidden");

    // enable all the disabled buttons
    const disabledBtns = document.querySelectorAll(".btn:disabled");
    disabledBtns.forEach((btn) => {
        btn.disabled = false;
    })
}


const nextMovieBtn = document.querySelector("#next-btn");

window.onload = () => {
    spinner.classList.remove("hidden");
    card.classList.add("hidden");
    nextMovieBtn.classList.add("hidden");
    startGame();
    renderButtons();
    setTimeout(() => {
        spinner.classList.add("hidden");
        card.classList.remove("hidden");
        nextMovieBtn.classList.remove("hidden");
    }, 3000)
}

nextMovieBtn.addEventListener("click", () => {
    spinner.classList.remove("hidden");
    card.classList.add("hidden");
    nextMovieBtn.classList.add("hidden");
    startGame();
    setTimeout(() => {
        spinner.classList.add("hidden");
        card.classList.remove("hidden");
        nextMovieBtn.classList.remove("hidden");
    }, 3000)
})


// TODO:
// 1. Next Movie Button functionality --- X
// 2. Add movies to movieData array
// 3. Add emoji rendering functionality --- X
// 4. Put all the game events in a function and call it when the page loads --- X
// 5. Conditional rendering the gameplay buttons and the result text