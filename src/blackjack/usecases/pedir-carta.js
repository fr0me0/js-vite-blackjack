/**
 * Esta función extrae una carta del deck y la elimina del arreglo
 * @param {Array <String>} deck Recibe un arreglo de cartas
 * @returns {String} Extrae una carta del deck y la retorna
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) throw new Error('No hay cartas en el deck');

    const carta = deck.pop();

    return carta;
}