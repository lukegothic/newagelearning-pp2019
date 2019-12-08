let userLang = (navigator.language || navigator.userLanguage).split("-")[0];
userLang = "es";
const i18n = {
    "en": {
        "boardgamesubdomain": {
            "Strategy Games": "Strategy",
            "Family Games": "Family",
            "Abstract Games": "Abstract",
            "Thematic Games": "Thematic",
            "Party Games": "Party",
            "Children's Games": "Child's",
            "Customizable Games": "Customiz.",
            "Wargames": "Wargames"
        },
        "boardgamemechanic": {
            "Card Drafting": "Draft",
            "Set Collection": "Coleccionar sets",
            "Deck / Pool Building": "Construcci&oacute;n de mazo",
            "Player Elimination": "Eliminaci&oacute;n jugadores",
            "Point to Point Movement": "Movimiento posicional",
            "Press Your Luck": "Prueba suerte",
            "Tile Placement": "Colocaci&oacute;n de losetas",
            "Time Track": "L&iacute;nea temporal",
            "Grid Movement": "Movimiento por casillas",
            "Variable Player Powers": "Juego asim&eacute;trico",
            "Dice Rolling": "Lanzar dados",
            "Pattern Building": "Construcci&oacute;n de patrones",
            "Partnerships": "Alianzas",
            "Cooperative Play": "Cooperativo",
            "Storytelling": "Contar historias",
            "Hand Management": "Gestiona tu mano",
            "Pattern Recognition": "Reconocer patrones",
            "Action Point Allowance System": "Sistema de juego por acciones",
            "Simultaneous Action Selection": "Acci&oacute;n simult&aacute;nea",
            "Take That": "Ch&uacute;pate esa!",
            "Line Drawing": "Dibujar l&iacute;neas",
            "Paper-and-Pencil": "Con l&aacute;piz y papel",
            "Route/Network Building": "Construcci&oacute;n de rutas",
            "Area Control / Area Influence": "Control de &aacute;rea",
            "Modular Board": "Tablero modular",
            "Worker Placement": "Colocaci&oacute;n de trabajadores",
            "Memory": "Memoria",
            "Area Movement": "Movimiento en &aacute;rea",
            "Acting": "Actuar",
            "Pick-up and Deliver": "Recoger y entregar",
            "Roll / Spin and Move": "Lanza y mueve",
            "Variable Phase Order": "Secuencia de juego variable",
            "Action / Movement Programming": "Movimiento programado",
            "Trading": "Intercambios",
            "Role Playing": "RPG",
            "Stock Holding": "Almacenar recursos"
        },
        "game": {
            "players": "players"
        },
        "ui": {
            "title": "GeeK PAL",
            "subtitle": "find the Perfect Game",
            "filters": {
                "players": {
                    "label": "Players",
                    "any": "Any",
                    "lv0": "Solo",
                    "lv1": "2 players",
                    "lv2": "3 players",
                    "lv3": "4 players",
                    "lv4": "5 o more"
                },
                "duration": {
                    "label": "Duration",
                    "any": "Any",
                    "lv0": "less than 15'",
                    "lv1": "15' to 30'",
                    "lv2": "30' to 60'",
                    "lv3": "1h to 2h",
                    "lv4": "more than 2h"
                },
                "skill": {
                    "label": "Skill",
                    "any": "Any",
                    "lv0": "Begginer",
                    "lv1": "Easy",
                    "lv2": "Moderate",
                    "lv3": "Hard",
                    "lv4": "Insane"
                }
            }
        }
    },
    "es": {
        "boardgamesubdomain": {
            "Strategy Games": "Estrategia",
            "Family Games": "Familiar",
            "Abstract Games": "Abstracto",
            "Thematic Games": "Tem&aacute;tico",
            "Party Games": "Party",
            "Children's Games": "Infantil",
            "Customizable Games": "Adaptable",
            "Wargames": "Wargame"
        },
        "boardgamemechanic": {
            "Card Drafting": "Draft",
            "Set Collection": "Coleccionar sets",
            "Deck / Pool Building": "Construcci&oacute;n de mazo",
            "Player Elimination": "Eliminaci&oacute;n jugadores",
            "Point to Point Movement": "Movimiento posicional",
            "Press Your Luck": "Prueba suerte",
            "Tile Placement": "Colocaci&oacute;n de losetas",
            "Time Track": "L&iacute;nea temporal",
            "Grid Movement": "Movimiento por casillas",
            "Variable Player Powers": "Juego asim&eacute;trico",
            "Dice Rolling": "Lanzar dados",
            "Pattern Building": "Construcci&oacute;n de patrones",
            "Partnerships": "Alianzas",
            "Cooperative Play": "Cooperativo",
            "Storytelling": "Contar historias",
            "Hand Management": "Gestiona tu mano",
            "Pattern Recognition": "Reconocer patrones",
            "Action Point Allowance System": "Sistema de juego por acciones",
            "Simultaneous Action Selection": "Acci&oacute;n simult&aacute;nea",
            "Take That": "Ch&uacute;pate esa!",
            "Line Drawing": "Dibujar l&iacute;neas",
            "Paper-and-Pencil": "Con l&aacute;piz y papel",
            "Route/Network Building": "Construcci&oacute;n de rutas",
            "Area Control / Area Influence": "Control de &aacute;rea",
            "Modular Board": "Tablero modular",
            "Worker Placement": "Colocaci&oacute;n de trabajadores",
            "Memory": "Memoria",
            "Area Movement": "Movimiento en &aacute;rea",
            "Acting": "Actuar",
            "Pick-up and Deliver": "Recoger y entregar",
            "Roll / Spin and Move": "Lanza y mueve",
            "Variable Phase Order": "Secuencia de juego variable",
            "Action / Movement Programming": "Movimiento programado",
            "Trading": "Intercambios",
            "Role Playing": "RPG",
            "Stock Holding": "Almacenar recursos"
        },
        "game": {
            "players": "jug."
        },
        "ui": {
            "title": "Game PAL",
            "subtitle": "encuentra el videojuego adecuado",
            "filters": {
                "players": {
                    "label": "Jugadores",
                    "any": "cualquiera",
                    "lv0": "solitario",
                    "lv1": "cooperativo",
                    "lv2": "competitivo",
                    "lv3": "por equipos",
                    "lv4": "masivo"
                },
                "duration": {
                    "label": "Duración",
                    "any": "cualquiera",
                    "lv0": "menos de 10'",
                    "lv1": "de 10' a 15'",
                    "lv2": "de 15' a 30'",
                    "lv3": "de 30' a 60'",
                    "lv4": "sin limite"
                },
                "skill": {
                    "label": "Micropagos",
                    "any": "cualquiera",
                    "lv0": "sin microp.",
                    "lv1": "cosméticos",
                    "lv2": "personajes",
                    "lv3": "funciones",
                    "lv4": "lootbox"
                }
            }
        }
    }
}
export default i18n[userLang];