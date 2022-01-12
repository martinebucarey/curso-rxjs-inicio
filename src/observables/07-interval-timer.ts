import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000); // arranca a emitir despues de dos segundos, cada un segundo
const timer$ = timer(hoyEn5);


console.log('inicio');
timer$.subscribe(observer);
// interval$.subscribe(observer);
console.log('fin');
