const API_URL = 'https://pokeapi.co/api/v2';
const div = document.querySelector('#app');
const img = document.querySelector('#frontal');

fetch(`${API_URL}/pokemon/jolteon`)
    .then((response) => response.json())
    .then((pokemon) => {
        console.log(pokemon);
        const cadena_nombre = `<li>${pokemon.name}</li>`;
        const cadena_movimientos = pokemon.moves.map((mov) => `<li>${mov.move.name} </li>`);
        const cadena_skills = pokemon.abilities.map((skill) => `<li>${skill.ability.name} </li>`);
        const cadena_stats = pokemon.stats.map((stat) => `<li>${stat.stat.name} </li>`);
        const cadena_front_default =pokemon.sprites.front_default;
        div.innerHTML = `<o1>${cadena_front_default}</o1>`;
        img.setAttribute("src", cadena_front_default);
    });