import { from, interval, map, reduce, scan, take, tap } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalReduce = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReduce, 0);
console.log(`total, ${total}`)

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReduce, 5)
)
    .subscribe({
        next(value) {
            console.log(value)
        },
        complete() {
            console.log("complete")
        },
    })

interface Usuario {
    id?: string,
    autentificado?: boolean,
    token?: string,
    edad?: number,
}

const user: Usuario[] = [
    { id: 'fer', autentificado: false, token: null },
    { id: 'fer', autentificado: true, token: 'ABC' },
    { id: 'fer', autentificado: true, token: 'ABC123' },
    { id: 'fer', autentificado: true, token: 'ABC123' },
]

const state$ = from(user).pipe(
    scan((acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })
)

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log)