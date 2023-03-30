import { filter, from, map, of, range, fromEvent } from 'rxjs';




range(1, 10)
    .pipe(
        filter((val, index) => {
            return val % 2 === 1;
        })
    )
    .subscribe(console.log)

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
]

from(personajes)
    .pipe(
        filter<Personaje>(curren => {
            return curren.tipo === 'heroe';
        }),
        map<Personaje, string>(personaje => {
            return personaje.nombre
        })
    )
    .subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
        .pipe(
            map( ({code}) => code),
            filter( code => code === 'Enter')
        )


keyup$.subscribe( console.log )