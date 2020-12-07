import ShowNameComponent from './components/ShowName';
import { soma, divisao as dividirNumeros } from './modules/functions';

document.querySelector('#app').innerHTML = ShowNameComponent('Jaú');

console.log('Soma:', soma(2, 3));
console.log('Divisão:', dividirNumeros(12, 4));
