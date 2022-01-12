import { of, from } from 'rxjs';

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
};

const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (let id of miIterable) {
//     console.log(id)
// } con el from funciona igual

from(miIterable).subscribe(observer);
// const source$ = from([1, 2, 3, 4, 5]); // from hace como si fuera el spread
// const source$ = of([1, 2, 3, 4, 5]); // hace una sola emision del array

// const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(observer);
// source$.subscribe(async (resp) => {
//     const dataResp = await resp.json();
//     console.log(dataResp);
// })