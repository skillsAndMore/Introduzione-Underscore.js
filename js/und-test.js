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
// var linguaggi = [ 'PHP', 'JavaScript', 'CSS', 'HTML', 'Ruby', 'Go' ];
//
// _.each( linguaggi, function( linguaggio, index, linguaggi ) {
//     console.log( 'Linguaggio: ' + linguaggio + ' con indice(' + index + ')' );
// });

//4. Array che contiene i linguaggi e i suoi relativi framework
// var langFramework = [
//     { linguaggio: 'PHP', framework: 'Zend' },
//     { linguaggio: 'PHP', framework: 'Laravel' },
//     { linguaggio: 'Python', framework: 'Django' },
//     { linguaggio: 'Ruby', framework: 'Ruby on Rails' },
//     { linguaggio: 'JavaScript', framework: 'jQuery' },
//     { linguaggio: 'JavaScript', framework: 'AngularJs' }
// ];

//5. Estrapoliamo soltanto i valori da un array associativo
// var frameworks = [];
// for (var i = 0; i < langFramework.length; i++) {
//     frameworks.push( langFramework[i]['framework'] );
// }
// console.log( frameworks );

//6. Usiamo pluck per ottenere i valori di un array
// var framework = _.pluck( langFramework, 'framework' );
// console.log( framework );


//7. Array contenente soltanto valori numerici
// var nums = [ 1, 3, 6, 9, 12 ];

//8. Incremento tutti i valori moltiplicandoli per 3
// var triple = [];
// for( var i = 0; i < nums.length; i++ ){
//     triple.push( nums[i] * 3 );
// }
//
// console.log( triple );

//9. Incremento i valori con Underscore.js
// var triple = _.map( nums, function( num ){ return num * 3; });
// console.log( triple );

//10. Gli array da usare con zip()
// var nomi = [ "Andrea", "Eugenio", "Daniele" ],
// cognomi = [ "Barghigiani", "Petullà", "Scasciafratte" ],
// eta = [ 32, 29, 26 ];

//11. Aggreghiamo i valori con JavaScript vanilla
// var aggregati = [];
// for( var i = 0; i < nomi.length; i++ ){
//     aggregati.push( [nomi[i], cognomi[i], eta[i]] );
// }
// console.log( aggregati );

//12. Aggreghiamo i valori con Underscore.js
// var aggregati = _.zip( nomi, cognomi, eta );
// console.log( aggregati );


//13. Calcoliamo l'intersezione tra array
// var ins1 = [ 1, 2, 3, 4, 5, 6],
// ins2 = [ 2, 4, 6, 8 ],
// ins3 = [ 1, 4, 5, 9, 12, 15];
//
// var int = _.intersection( ins1, ins2, ins3 );
// console.log( int );

//14. Troviamo l'indice di un determinato valore
// var arr = [ 23, "ciao", 42, "mondo" ];
// var index = _.indexOf( arr, 42 );
//
// console.log( index );

//15. Raccogliamo le chiavi e i valori in array
// var obj = {
//     nome: "Andrea",
//     cognome: "Barghigiani",
//     eta: 32
// }
//
// var accoppiato = _.pairs( obj );
// console.log( accoppiato );

//16. Come estendere un oggetto
// var obj = {
//     nome: "Andrea",
//     cognome: "Parghigiani"
// }
//
// var obj = _.extend( obj, { cognome: "Barghigiani", eta: 32 });
// console.log( obj);

//17. Confrontiamo due oggetti in JavaScript
var obj1 = {
    nome: "Andrea",
    cognome: "Barghigiani",
    eta: 32
};

var obj2 = {
    nome: "Andrea",
    cognome: "Barghigiani",
    eta: 32
}

var confronto = obj1 == obj2;

console.log( confronto );
