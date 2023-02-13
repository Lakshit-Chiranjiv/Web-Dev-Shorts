const movieData = [

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
inputBtns = document.querySelector(".inputBtns");

// append buttons for A-Z and 0-9 in inputBtns div
for (let i = 65; i < 91; i++) {
    const btn = document.createElement("button");
    btn.classList.add("letterBtn");
    btn.classList.add("btn");
    btn.innerText = String.fromCharCode(i);
    inputBtns.appendChild(btn);
    btn.addEventListener("click", () => {
        if(!userGuess.includes(btn.innerText)){
            userGuess += btn.innerText;
        }
        console.log("userGuess",userGuess);
    })
}

for (let i = 48; i < 58; i++) {
    const btn = document.createElement("button");
    btn.classList.add("numberBtn");
    btn.classList.add("btn");
    btn.innerText = String.fromCharCode(i);
    inputBtns.appendChild(btn);
    btn.addEventListener("click", () => {
        if(!userGuess.includes(btn.innerText)){
            userGuess += btn.innerText;
        }
        console.log("userGuess",userGuess);
    })
}