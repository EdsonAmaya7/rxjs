import { of } from "rxjs";



// emite una secuencia de observables segun los parametros dados
// const obs$ = of(1,2,3,4,5,6)
// const obs$ = of(...[1,2,3,4,5,6],1,2,3)
const obs$ = of([1,2],{a:1,b:2}, function(){}, Promise.resolve(true))

console.log('inicio')

obs$.subscribe(
    next => { console.log('next', next)},
    error => { console.warn('next', error)},
    () => { console.log('complete')},
)

console.log('fin')