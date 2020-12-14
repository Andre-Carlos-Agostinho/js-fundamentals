// console.log('Primeiro');
// setTimeout(() => console.log('ÚLTIMO'));
// console.log('Segundo');
// console.log('Terceiro');
// console.log('Quarto');
// console.log('Quinto');
// console.log('Sexto');
// console.log('Segundo');
// console.log('Terceiro');
// console.log('Quarto');
// console.log('Quinto');
// console.log('Sexto');
// console.log('Segundo');
// console.log('Terceiro');
// console.log('Quarto');
// console.log('Quinto');
// console.log('Sexto');
// console.log('Segundo');
// console.log('Terceiro');
// console.log('Quarto');
// console.log('Quinto');
// console.log('Sexto');

// PROMISES TEM UMA FILA PREFERENCIAL NA HORA DE EXECUTAR
// function promiseTest() {
//     return Promise.resolve('*** A Promise foi resolvida ***');
// }

// console.log('Primeiro');
// console.log('Segundo');
// console.log('Terceiro');
// console.log('Quarto');

// setTimeout(() => console.log('### Isto é um setTimeout com 0 de espera ###'), 0);

// console.log(promiseTest().then((data) => console.log(data)));

// // a Promise teve prioridade sobre o setTimeout

// console.log('Quinto');
// console.log('Sexto');
// console.log('Sétimo');
// console.log('Oitavo');

function realPromise() {
    return new Promise((resolve, reject) => {
        const resolved = true;

        console.log('Executando...');

        setTimeout(() => {
            return resolved ? resolve('Promise resolvida') : reject('Promise rejeitada');
        }, 5000);
    });
}

//geigdiugeiude

realPromise()
    .then((data) => console.log(data))
    .catch((reason) => console.log(reason));
