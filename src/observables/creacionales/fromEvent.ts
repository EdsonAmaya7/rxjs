import { fromEvent } from "rxjs";




// from event crea observables en base a los eventos
// eventargets click, scroll


const src1$ = fromEvent<MouseEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');


src1$.subscribe( ({x,y}) => {
    console.log(x,y)
} )

src2$.subscribe( ({key}) => {
    console.log(key)
} )