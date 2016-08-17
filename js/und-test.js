var punteggi = [42, 99, 34, 43, 90, 86, 67, 79, 85, 96],
sopraLimite = [], limite = 85;

sopraLimite = _.select( punteggi, function( pun ){ return pun > limite; } );

console.log(sopraLimite);
