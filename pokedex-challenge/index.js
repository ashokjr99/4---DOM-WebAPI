/*
? Challenge:
    - Grab a hold of the HTML elements that are necessary
    - Use the https://pokeapi.co/ to retrieve the information of a pokemon
    - Then using the input field, a user should be able to type in the pokemon name or number.

    * HINT There is a method you can use to grab a hold of the value contained within the input field

    - The button with the text of "Look", should execute a fetch to the Pokemon API
    The API should return the exact data for the pokemon-name/# that was provided to the input field

    * You will only need to fetch to one endpoint

    Display the results within each respected html element

    * Be sure to understand the data type you are working with to display the results correctly

    - Name
    - Image
    - Stats
    - Moves

    Bonus*
    - when a user goes and types in another pokemon-name/#, the moves and stats keep stacking on top of the previous data.

    Handle clearing out the past data to present the new data.

*/

// let pokeName = document.getElementById("name");
// let pokeImg = document.getElementById("img-avatar");
// let pokeStats = document.getElementById("stats");
// let pokeMoves = document.getElementById("moves");

// let pokeSearchBar = document.querySelector(".search");
// let pokeLookBtn = document.querySelector(".btn");

// fetch(`https://pokeapi.co/api/v2/pokemon`)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Could not fetch");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(`ERROR`));

// async function fetch() {
//   try {
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokeSearchBar}`
//     );

//     if (!response.ok) {
//       throw new Error("Could not fetch");
//     }

//     const data = await response.json();
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetch();

//! First step
//? Grabbing a hold of our display html elements for results
let pokeName = document.querySelector(".name");
let pokeImg = document.querySelector("#img-avatar");
let pokeStats = document.querySelector(".stats");
let pokeMoves = document.querySelector(".moves");

//? Grabbing a hold of html input and button
let searchInput = document.querySelector(".search");
let button = document.querySelector(".btn");

const displayPokemon = (pokemonObj) => {
  pokeName.textContent = pokemonObj.name;
  pokeImg.src = pokemonObj.img;

  while (pokeStats.firstChild) {
    pokeStats.removeChild(pokeStats.firstChild);
  }

  while (pokeMoves.firstChild) {
    pokeMoves.removeChild(pokeMoves.firstChild);
  }
  pokemonObj.stats.forEach((i) => {
    console.log(i);
    let statName = document.createElement("p");
    statName.textContent = i.stat.name + "" + i.base_stat;
    pokeStats.appendChild(statName);
  });
  //   console.log(pokemonObj);

  pokemonObj.moves.forEach((i) => {
    let moveName = document.createElement("li");
    moveName.textContent = i.move.name;
    pokeMoves.appendChild(moveName);
  });
};

// ----------------------------------------------------------------
const getPokemon = async (pokemon) => {
  // Storing our fetch URL in a variable
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  // ? Using async/await
  let res = await fetch(url);
  let data = await res.json();

  let dataObj = {
    name: data.name,
    img: data.sprites.front_default,
    stats: data.stats,
    moves: data.moves,
  };

  // Call a function to display the data -- Passing our custom object (dataObj)
  displayPokemon(dataObj);

  // ? Using .then syntax method instead of async
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
};

//? Adding click event to our button
button.addEventListener("click", () => {
  // Grabbing the input field's value
  let input = searchInput.value;
  getPokemon(input);
});
