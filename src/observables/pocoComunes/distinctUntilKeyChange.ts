import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of } from "rxjs";



const numeros$ = of(1,'2',3,1,1,2,4,5,6,'1',1);


numeros$
.pipe(
    distinctUntilChanged()
)
.subscribe(console.log)


interface Personaje {
    nombre:string
}

const personajes: Personaje[] = [
    {nombre: 'megaman'},
    {nombre: 'megaman'},
    {nombre: 'megaman'},
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
    distinctUntilKeyChanged("nombre" )
)
.subscribe(console.log)