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
const triesText = document.querySelector("#tries");
triesText.innerText = tries;
const result = document.querySelector("#result");
const guess = document.querySelector("#guess");
const generatedMovie = generateRandomMovie();
const generatedMovieTitle = generatedMovie.title.toUpperCase(); 
let guessString = "";
let prevGuessString = "";
for (let i = 0; i < generatedMovieTitle.length; i++) {
    if (generatedMovieTitle[i] === " ") {
        guessString += " ";
    } else {
        guessString += "_";
    }
}
guess.innerText = guessString;
inputBtns = document.querySelector(".inputBtns");

// append buttons for A-Z and 0-9 in inputBtns div
for (let i = 65; i < 91; i++) {
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
                result.innerText = "You Lose!";
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
            result.innerText = "You Win!";
        }
    })
}

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
                result.innerText = "You Lose!";
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
            result.innerText = "You Win!";
        }
    })
}


// TODO:
// 1. Next Movie Button functionality
// 2. Add movies to movieData array
// 3. Add emoji rendering functionality
// 4. Put all the game events in a function and call it when the page loads
// 5. Conditional rendering the gameplay buttons and the result text