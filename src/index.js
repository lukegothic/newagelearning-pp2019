/*
import games_social from '../static/data/games_social.json';
import games_academic from '../static/data/games_academic.json';
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
        "<td>" + game.Precio + "</td>" + 
        "<td>" + game.Monetización.join(", ") + "</td>" + 
        "<td>" + (game.RequiereOnline ? "Sí" : "No") + "</td>" + 
        "<td>" + game.Jugadores.min + (game.Jugadores.min !== game.Jugadores.max ? ("-" + game.Jugadores.max) : "") + " jug.</td>" + 
        "<td>" + (game.PersonasPorEquipo !== null ? game.PersonasPorEquipo.min + (game.PersonasPorEquipo.min !== game.PersonasPorEquipo.max ? ("-" + game.PersonasPorEquipo.max) : "") + " jug." : "-") + "</td>" + 
        "<td>" + game.ModosJuego.join(", ") + "</td>" + 
        "<td>" + (game.TiempoJuego !== null ? game.TiempoJuego.min + (game.TiempoJuego.min !== game.TiempoJuego.max ? ("-" + game.TiempoJuego.max) : "") + " min." : "ilimitado") + "</td>";
    table.tBodies[0].appendChild(tr);
});
console.log(games_academic);
*/


/*
 _   _  _____ _    _    ___  _____  _____
| \ | ||  ___| |  | |   / _ \|  __ \|  ___|
|  \| || |__ | |  | |  / /_\ \ |  \/| |__
| . . ||  __|| |/\| |  |  _  | | __ |  __|
| |\  || |___\  /\  /  | | | | |_\ \| |___
\_| \_/\____/ \/  \/   \_| |_/\____/\____/  
 _                           _             
| |                         |_|            
| |     ___  __ _ _ __ _ __  _ _ __   __ _    ___  ___ 
| |    / _ \/ _. | '__| '_ \| | '_ \ / _. |  / _ \/ __|
| |___|  __/ (_| | |  | | | | | | | | (_| | |  __/\__ \
\_____/\___|\__,_|_|  |_| |_|_|_| |_|\__, ||_|___||___/
                                      __/ | 
                                     |___/                                               
                                       proudly presents

      =================== Games PAL ==================
      La herramienta que te ayuda a elegir videojuegos

visita -- newagelearning.es -- para encontrar mas herramientas
*/

require("babel-polyfill");
require('./style.css');
import i18n from './i18n.js';
import db from '../static/data/s0c14l.json';


// defined apps: TODO: FaaS
const apps = {
    "s0c14l": i18n.ui.subtitle,
    "4c4d3m1c": "Estudio Académico"
}
// traductor numeros a strings
// COMO funciona este invento: 
// se coge el valor de entrada (n) y se aplica una regla de tres:
// n sobre d1 (ej. puntuacion sobre 10) = [x] sobre d2 ([x] = incognita sobre tramos disponibles)
// se presupone que la escala comienza en el 0 (ej. 0-10)
// el tramo empieza en el escalon inferior (ej. 0-1, 2-3, 4-5, 6-7, 8-9 para 5 tramos sobre 10)

// regla de 3 fn
const rd3 = (n, d1, d2) => n * d2 / d1;
// stringizer
const g10r_values = {
    "h10r": {
        "gameweight": [i18n.ui.filters.skill.lv0, i18n.ui.filters.skill.lv1, i18n.ui.filters.skill.lv2, i18n.ui.filters.skill.lv3, i18n.ui.filters.skill.lv4]
    },
    "s10r": {
        "gameweight": ["verylight","light","medium","heavy","veryheavy"],
        "gameweight_icon": ["fa-tachometer-slowest","fa-tachometer-slow","fa-tachometer-average","fa-tachometer-fast","fa-tachometer-fastest"],
        "score": ["verylow","low","medium","high","veryhigh"],
        "type_icon": {"?": "fa-question-circle", "BattleRoyal": "fa-axe-battle", "MOBA": "fa-helmet-battle", "MMORPG": "fa-globe-europe","Estrategia": "fa-chess-pawn-alt","Deporte": "fa-futbol","Shooter": "fa-meteor","RPG": "fa-swords","Creativo": "fa-lightbulb","Lucha": "fa-fist-raised","Baile": "fa-album-collection","Aventura": "fa-wand-magic","Sandbox": "fa-boxes","Habilidad": "fa-puzzle-piece","Simulación": "fa-car"}
    }
}
const g10r = (n, ceil, t, c) => {
    const values = g10r_values[c][t];
    if (Array.isArray(values)) {
        let norm = Math.floor(rd3(n, ceil, values.length));
        norm = Math.min(norm, values.length - 1);
        return values[norm];
    } else {
        return values[n];
    }
}
// stylizer
const s10r = (n, ceil, t) => g10r(n, ceil, t, "s10r");
// humanizer
const h10r = (n, ceil, t) => g10r(n, ceil, t, "h10r");
// Misc.
const ReducedRange = (min, max) => min === max ? min : min + "-" + max;
//const GetBestPlayers = game => game.players.poll.best.length > 0 ? game.players.poll.best[0].min : game.players.max;

const sortFns = {
    "rank":     (a, b) => a.rank - b.rank,
    "score":    (a, b) => b.score - a.score,
    "players":  (a, b) => { /* TODO */ }
}
const filterFns = {
    "players":  game => 
                    filter.players ? game.ModosJuego.indexOf(filter.players) !== -1 :
                    true,
    "playtime": game => 
                    filter.playtime ? filter.playtime[0] <= game.TiempoJuegoNormalizado && filter.playtime[1] >= game.TiempoJuegoNormalizado: 
                    true,
    "monetization":   game => filter.monetization ? game.Monetizacion.indexOf(filter.monetization) !== -1 : true
}
const filter = {
    "players":  null,
    "playtime": null,
    "monetization":   null
}
let $template = null;
const $games = document.getElementById("games");
const AddGame = (game) => {
    const clon = $template.cloneNode(true);
    // imagen
    const $gameThumb = clon.querySelector(".game-image");
    $gameThumb.src = `img/${game.Imagen}`;
    $gameThumb.alt = game.Nombre;
    // puntuacion
    // TODO: usar rosco ?
    /*
    const $gameScore = clon.querySelector(".game-score");
    const score = Math.round(game.score * 10);
    $gameScore.classList.add("p" + score);
    $gameScore.classList.add(s10r(score, 100, "score"));
    $gameScore.querySelector("span").innerHTML = score !== 0 ? score : "?";
    */
    // titulo
    const $gameTitle = clon.querySelector(".game-title a");
    $gameTitle.innerHTML = game.Nombre;
    // TODO: quiero un enlace al juego?
    //$gameTitle.href = "https://boardgamegeek.com" + game.href;
    $gameTitle.classList.add("c" + Math.max(Math.min(game.Nombre.length, 70),43));

    //clon.querySelector(".game-online").classList.add(game.RequiereOnline ? "fa-wifi" : "fa-wifi-slash");

    
    clon.querySelector(".game-title span").innerHTML = `${game.Precio} ${game.Monetizacion ? '- ' + game.Monetizacion : ''}`;
    // jugadores
    // la siguiente linea ajusta el numero de jugadores con el poll de la bgg de players recomendados
    clon.querySelector(".game-players span").innerHTML = `${ReducedRange(game.Jugadores.min, game.Jugadores.max)} ${i18n.game.players}`;
    // duracion
    clon.querySelector(".game-playtime span").innerHTML = game.TiempoJuego ? `${ReducedRange(game.TiempoJuego.min, game.TiempoJuego.max)}'` : "Sin límite";
    // dificultad
    // TODO: que hago con la dificultad?
    /*
    const $gameWeight = clon.querySelector(".game-weight");
    const weight = game.weight;
    $gameWeight.classList.add(s10r(weight, 5, "gameweight"));
    $gameWeight.querySelector("span").innerHTML = h10r(weight, 5, "gameweight");
    $gameWeight.querySelector("i").classList.add(s10r(weight, 5, "gameweight_icon"));
    */
    // tipo
    const $gameType = clon.querySelector(".game-type");
    $gameType.querySelector("span").innerHTML = game.Genero;
    $gameType.querySelector("i").classList.add(s10r(game.Genero || "?", null, "type_icon"));
    // categorias
    // TODO: bloque de mas informacion?
    /*
    const $gameCategories = clon.querySelector(".game-categories");
    game.mechanics.forEach(m => {
        const e = document.createElement("span");
        e.innerHTML = i18n["boardgamemechanic"][m] || m;
        $gameCategories.appendChild(e);
    });
    $gameCategories.addEventListener("click", (e) => { $gameCategories.classList.add("no"); e.stopPropagation(); });
    */
    // bloque gameinfo
    /*
    clon.querySelector(".game-info").addEventListener("click", () => $gameCategories.classList.remove("no"));
    */
    game.node = clon;
    $games.appendChild(clon);
}
const Create = () => {
    if (!$template) {
        const t = document.getElementById("gametemplate");
        $template = t.firstElementChild.cloneNode(true);
        t.parentElement.removeChild(t);
    }
    while ($games.firstChild) {
        $games.removeChild($games.firstChild);
    }
    gamesdb.forEach(AddGame);
}
const updateViz = () => gamesdb.forEach(game => 
                            game.node.classList[filterFns.players(game) && filterFns.playtime(game) && filterFns.monetization(game) ? "remove" : "add"]("no"));
const handleFilterUI = f => {
    const $current = document.querySelector(".filters.main .filter.selected");
    if ($current) {
        $current.classList.remove("selected");
        document.getElementById($current.dataset.subfilter).classList.remove("raised");
    } 
    if ($current !== f) {
        f.classList.add("selected");
        document.getElementById(f.dataset.subfilter).classList.add("raised");
    }
}
const handleFilterSelect = f => {
    const $current = f.parentElement.querySelector(".filter.selected");
    if ($current !== f) {
        $current.classList.remove("selected");
        f.classList.add("selected");
        let v = null;
        if (f.dataset.value) {
            if (f.dataset.value.indexOf(",") !== -1) {
                v = f.dataset.value.split(",").map(v => parseInt(v));
            } else {
                v = parseInt(f.dataset.value);
            }
            if (isNaN(v) && typeof(v) !== "object") {
                v = f.dataset.value;
            }
        }
        filter[f.dataset.filter] = v;
        updateViz();
    }
}
const setupUI = () => {
    document.querySelectorAll(".filters.main .filter").forEach(f => {
        f.addEventListener("click", () => handleFilterUI(f));
    });
    document.querySelectorAll(".filters.sub .filter").forEach(f => {
        f.addEventListener("click", () => handleFilterSelect(f));
    });
}
const applyi18n = () => {
    document.querySelectorAll("[data-i18n]").forEach(e => {
        const path = e.dataset.i18n.split(".");
        e.innerText = path.reduce((acc, i) => acc[i], i18n);
    });
}
let gamesdb = [];
(() => {
    const params = new URLSearchParams(window.location.search);
    const k = params.get("k") || "s0c14l";
    // cachear
    gamesdb = db.slice();
    gamesdb.sort(sortFns.score);
    Create();
    // subtitulo/descripcion
    if (apps[k]) {
        const subtitle = document.querySelector(".header-sub");
        subtitle.innerHTML = apps[k];
        subtitle.classList.remove("mgm");
    }
    setupUI();
    applyi18n();
})();