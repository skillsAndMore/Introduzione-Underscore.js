//1. Esempio Underscore.js
// var punteggi = [42, 99, 34, 43, 90, 86, 67, 79, 85, 96],
// sopraLimite = [], limite = 85;
//
// sopraLimite = _.select( punteggi, function( pun ){ return pun > limite; } );
//
// console.log(sopraLimite);

//2. Classico ciclo for
// var linguaggi = [ 'PHP', 'JavaScript', 'CSS', 'HTML', 'Ruby', 'Go' ];
//
// for( var i = 0; i < linguaggi.length; i++ ){
//     console.log( 'Linguaggio: ' + linguaggi[i] );
// }

//3. Trasformazione ciclo for con each
var linguaggi = [ 'PHP', 'JavaScript', 'CSS', 'HTML', 'Ruby', 'Go' ];

_.each( linguaggi, function( linguaggio, index, linguaggi ) {
    console.log( 'Linguaggio: ' + linguaggio + ' con indice(' + index + ')' );
});
