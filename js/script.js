const API_URL = 'https://pokeapi.co/api/v2';
const div = document.querySelector('#moves');
const img = document.querySelector('#character');
const skills_div =document.querySelector('#skills');
const stats_div =document.querySelector('#stats');

// 1. creacion de boton de busqueda.
// 2. implementar la funcionalidad de busqueda.
//2.1 cada vez que le demos a buscar apareca los datos del pokemon.
// 2.2 buscar llamar funcion desde el boton de html 
// 3. implemtar materializer.

async function buscador(){
    var pokemon_name = document.getElementById("name").value;
    console.log (pokemon_name);
    return await fetch(`${API_URL}/pokemon/`+ pokemon_name)
    .then((response) => response.json())
    .then((pokemon) => {
        console.log(pokemon);
        const cadena_nombre = `<li>${pokemon.name}</li>`;
        const cadena_movimientos = pokemon.moves.slice(0,5).map((mov) => `<li>${mov.move.name}</li>`).join('');
        const cadena_skills = pokemon.abilities.map((skill) => `<li>${skill.ability.name} </li>`).join('');
        const cadena_stats = pokemon.stats.map((statistic) => `<li>${statistic.stat.name}: ${statistic.base_stat} </li>`).join('');
        const cadena_front_default =pokemon.sprites.front_default;
        div.innerHTML = cadena_movimientos;
        skills_div.innerHTML = cadena_skills;
        stats_div.innerHTML = cadena_stats;
        img.setAttribute("src", cadena_front_default);
    });

}