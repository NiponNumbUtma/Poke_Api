import React, { useEffect, useState } from "react";
import Card from "../src/components/card"; // Asegúrate de que la importación sea correcta
import axios from "axios";
import "./styles.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=25")
      .then(async (res) => {
        if (res.data.results) {
          const pokemonData = await Promise.all(
            res.data.results.map(async (poke) => {
              const response = await axios.get(poke.url);
              return response.data;
            })
          );
          setPokemon(pokemonData);
        } else {
          setPokemon([]);
        }
      });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
       <nav class="navbar navbar-expand-md navbar-dark bg-danger">
      <span class="navbar-brand">
        <img src="https://img.icons8.com/dusk/64/000000/pokemon.png" alt="Pokemon" />
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <span class="navbar-text">Poke-Api</span>
        </div>
      </div>
    </nav>
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pokemon.map((poke, index) => (
          <Card
            key={index}
            index={`Number of pokemon: ${index + 1}`}
            Name={poke.name}
            type={poke.types.map((type) => type.type.name).join(", ")} // Obtiene los tipos del Pokémon
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
          />
        ))}
      </main>
    </div>
  );
}


export default App;
