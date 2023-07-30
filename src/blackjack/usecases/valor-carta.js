/**
 * Esta función recibe una carta y determina el valor numérico de la misma
 * @param {String} carta Recibe una carta extraida del deck
 * @returns {Number} Retorna el valor numérico de una carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1; // * 1 Cambia string a number
}