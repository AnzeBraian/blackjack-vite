
/**
 * 
 * @param {string} carta
 * @returns {HTMLImageElement} imagen insertada 
 */
export const crearCartaHTML = (carta)=>{
 if (!carta) throw new Error ('la carta es obligatoria ')
    
 const imgCarta = document.createElement('img');
 imgCarta.src = `assets/cartas/${ carta }.png`;
 imgCarta.classList.add('carta');

 return imgCarta;

}
 