import { distinct, from, of } from "rxjs";



const numeros$ = of(1,'2',3,1,1,2,4,5,6,'1',1);


numeros$
.pipe(
    distinct()
)
.subscribe(console.log)


interface Personaje {
    nombre:string
}

const personajes: Personaje[] = [
    {nombre: 'megaman'},
    {nombre: 'x'},
    {nombre: 'zero'},
    {nombre: 'megaman'},
    {nombre: 'megaman'},
    {nombre: 'x'},
    {nombre: 'zero'},
    {nombre: 'megaman'},
]

from(personajes)
.pipe(
    distinct( p => p.nombre)
)
.subscribe(console.log)