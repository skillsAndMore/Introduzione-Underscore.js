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
var nums = [ 1, 3, 6, 9, 12 ];

//8. Incremento tutti i valori moltiplicandoli per 3
// var triple = [];
// for( var i = 0; i < nums.length; i++ ){
//     triple.push( nums[i] * 3 );
// }
//
// console.log( triple );

//9. Incremento i valori con Underscore.js
var triple = _.map( nums, function( num ){ return num * 3; });
console.log( triple );
