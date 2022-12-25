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

  genBtn.addEventListener("click", () => {
    spinner.classList.remove("hidden");
    pokemonCard.classList.add("hidden");
    fetchPokemonData();
  });

  const fetchPokemonData = async () => {
    const pokemonId = Math.floor(Math.random() * 898) + 1;
    const response = await fetch(`${apiBaseUrl}${pokemonId}`);
    const data = await response.json();
    generatePokemonCard(data);
  }

  const generatePokemonCard = (pokemonData) => {
    const pokemonName = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
    const pokemonId = pokemonData.id;
    const pokemonImage = pokemonData.sprites.front_default;
    const pokemonTypes = pokemonData.types;
    const pokemonHp = pokemonData.stats[0].base_stat;
    const pokemonAttack = pokemonData.stats[1].base_stat;
    const pokemonDefense = pokemonData.stats[2].base_stat;
    const pokemonSpeed = pokemonData.stats[5].base_stat;


  }