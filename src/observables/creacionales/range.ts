import { asyncScheduler, range } from "rxjs";

// el range es como el of pero con esteroides
// por ejemplo acepta de parametros el valor inicial 1 y las emiciones apartir de ese valor 5
//imprimira de 1 al 5 en otro caso si solo le paso las emiciones 5
// imprimira del 0 al 4 esto porque por defecto el index es 0 y genera 5 emiciones apartir del 0


// este code es sicrono se ejecuta secuencialmente para ejeturalo asyncrono se usa el observable asyncScheduler
// const src$ = range(1,5);

// console.log('inicio')
// src$.subscribe( console.log )
// console.log('fin')


// ejemplo
// la salida sera el log del inicio el lo gel fin y despues el range
const src$ = range(1,5, asyncScheduler);

console.log('inicio')
src$.subscribe( console.log )
console.log('fin')