const API_URL = 'https://pokeapi.co/api/v2';
const div = document.querySelector('#app');

fetch(`${API_URL}/pokemon/pikachu`)
    .then((response) => response.json())
    .then((pokemon) => {
        console.log(pokemon);
        const cadena_nombre = `<li>${pokemon.name}</li>`;
        const cadena_movimientos = pokemon.moves.map((mov) => `<li>${mov.move.name} </li>`);
        div.innerHTML = `<o1>${cadena_movimientos}</o1>`;
    });
