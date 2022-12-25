const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

  const apiBaseUrl = " https://pokeapi.co/api/v2/pokemon/";
  const imageBaseUrl = "https://unpkg.com/browse/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/"

  const pokemonCard = document.querySelector(".card");
  const spinner = document.querySelector(".spinner");
  const genBtn = document.querySelector(".btn");

  window.onload = () => {
    spinner.classList.remove("hidden");
    pokemonCard.classList.add("hidden");
    fetchPokemonData();
  }

  genBtn.addEventListener("click", () => {
    spinner.classList.remove("hidden");
    pokemonCard.classList.add("hidden");
    fetchPokemonData();
  });

  const fetchPokemonData = async () => {
    const pokemonId = Math.floor(Math.random() * 649) + 1;
    //898
    console.log(pokemonId)
    const response = await fetch(`${apiBaseUrl}${pokemonId}`);
    const data = await response.json();
    generatePokemonCard(data);
  }

  const generatePokemonCard = (pokemonData) => {
    const pokemonName = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
    const pokemonImage = imageBaseUrl + pokemonData.id + ".svg";
    const pokemonTypes = pokemonData.types;
    const pokemonHp = pokemonData.stats[0].base_stat;
    const pokemonAttack = pokemonData.stats[1].base_stat;
    const pokemonDefense = pokemonData.stats[2].base_stat;
    const pokemonSpeed = pokemonData.stats[5].base_stat;
    const bgColor = typeColor[pokemonTypes[0].type.name];

    const pokemonHtml = `
        <div class="bg"></div>
        <div class="card-image">
            <img src=${pokemonImage} alt=${pokemonName}>
        </div>
        
        <div class="card-info">
            <h2>${pokemonName}</h2>
            <div class="types">

            </div>
            <div class="stats">
                <div>
                    <p>Attack</p>
                    <h3>${pokemonAttack}</h3>
                </div>
                <div>
                    <p>Defense</p>
                    <h3>${pokemonDefense}</h3>
                </div>
                <div>
                    <p>Speed</p>
                    <h3>${pokemonSpeed}</h3>
                </div>
            </div>
        </div>
        <span id="hp">HP: ${pokemonHp}</span>
    `
    pokemonCard.innerHTML = pokemonHtml;

    pokemonTypes.forEach(type => {
        const typeEl = document.createElement("span");
        typeEl.innerText = type.type.name;
        typeEl.style.backgroundColor = typeColor[type.type.name];
        pokemonCard.querySelector(".types").appendChild(typeEl);
    })

    setCardBgColor(bgColor);

  }

  const setCardBgColor = (color) => {
    document.querySelector('.bg').style.backgroundColor = color;
    setTimeout(() => {
        spinner.classList.add("hidden");
        pokemonCard.classList.remove("hidden");
    },5000)
  }