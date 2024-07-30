// traccia: chiedere all'utente il nome, il cognome, il suo colore preferito e stampare in console il tutto

/* Analisi dei passaggi
1.Recuperare gli elementi che mi interessano dal DOM (in questo caso solo durante il BONUS prima di inserire il risultato nell'elemento del DOM)
2.preparo eventuali variabili da tenere in considerazione fin da subito
3.chiedere il nome all'utente
4.chiedere il suo cognome
5.chiedere il suo colore preferito
6.creo la password e la "stampo" nella console
7.BONUS: stampo la password anche nell'elemento del DOM
*/

// prova collegamento file .js
console.log('JS OK')

//preparo eventuali variabili da tenere in considerazione fin da subito
const passwordNumbers = '21'; // perchè ho pensato che il numero 21 sia stato prefissato che fosse quello.

//chiedere il nome all'utente
const firstName = prompt('inserisci il tuo nome', 'Beniamino');
console.log(firstName, typeof firstName);

//chiedere il cognome all'utente
const lastName = prompt('inserisci il tuo nome', 'Soccio');
console.log(lastName, typeof lastName);

//chiedere il colore preferito dell'utente
const favColor = prompt('inserisci il tuo colore preferito', 'blu')
console.log(favColor, typeof favColor);

//creo la password e la "stampo" nella console
const password = firstName + lastName + favColor + passwordNumbers
console.log(password, typeof password)