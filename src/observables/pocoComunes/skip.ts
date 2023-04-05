import { fromEvent, interval, skip, takeUntil, tap } from "rxjs"



const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap( () => console.log('tap antes de skip')),
    skip(2),
    tap( () => console.log('tap despues de skip'))
);


counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next(value) {
        console.log(value)
    },
    complete() {
        console.log('complete')
    },
})