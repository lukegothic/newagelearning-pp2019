require("babel-polyfill");
import games_social from '../data/games_social.js';
import games_academic from '../data/games_academic.js';
var table = document.getElementById("games_social_table");
// TODO: limpiar tabla
// TODO: enlace en nombre
// TODO: iconos de genero
// TODO: buscar precios y que solo salga euro cuando tiene un precio
// TODO: iconos de montenizacion
// TODO: iconos de modos de juego
games_social.forEach(function(game) {
    var tr = document.createElement("tr");
    tr.innerHTML = 
        "<td>" + game.Nombre + "</td>" + 
        "<td>" + game.Género.join(", ") + "</td>" + 
        "<td>" + game.Precio + "€</td>" + 
        "<td>" + game.Monetización.join(", ") + "</td>" + 
        "<td>" + (game.RequiereOnline ? "Sí" : "No") + "</td>" + 
        "<td>" + game.Jugadores.min + (game.Jugadores.min !== game.Jugadores.max ? ("-" + game.Jugadores.max) : "") + " jug.</td>" + 
        "<td>" + (game.PersonasPorEquipo !== null ? game.PersonasPorEquipo.min + (game.PersonasPorEquipo.min !== game.PersonasPorEquipo.max ? ("-" + game.PersonasPorEquipo.max) : "") + " jug." : "-") + "</td>" + 
        "<td>" + game.ModosJuego.join(", ") + "</td>" + 
        "<td>" + (game.TiempoJuego !== null ? game.TiempoJuego.min + (game.TiempoJuego.min !== game.TiempoJuego.max ? ("-" + game.TiempoJuego.max) : "") + " min." : "ilimitado") + "</td>";
    table.tBodies[0].appendChild(tr);
});
console.log(games_academic);