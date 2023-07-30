import { crearCarta, pedirCarta, valorCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHtml Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas
 * @param {Array<String>} deck Arreglo de deck
 */
export const turnoComputadora = (puntosMinimos, puntosHtml, divCartasComputadora, deck) => {
    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!deck) throw new Error('El deck es necesario');
    if (!puntosHtml) throw new Error('Argumento puntosHtml es necesario');
    if (!divCartasComputadora) throw new Error('Argumento divCartasComputadora es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHtml.innerText = puntosComputadora;

        // TODO: Crear carta
        const imgCarta = crearCarta(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
