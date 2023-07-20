import _, { min } from "underscore";




//a continuación vamos a documentar mejor a la función crearDeck, primero tenemos que escrbir /** y presionar enter, nos va a mostrar los @param que tiene la función  
/**
 * esta función crea un nuevo deck
 * @param {array<string>} tiposDeCard 
 * @param {array<string>} tiposEspecialesDeCard 
 * @returns {array<string>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCard, tiposEspecialesDeCard) => { //aca estamos exportando esta función, siempre tenemos que poner el export delante de la función que queramos exportar.

    if(!tiposDeCard || tiposDeCard === 0 ) throw new Error ('tiposDeCard es obligatorio como un arreglo de string')

    let deck = [];//declaramos el deck de nuevo aca porque el deck se encontraba en el index.js

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCard ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCard ) {
        for( let esp of tiposEspecialesDeCard ) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

let miName = 'braian';

export default  miName


