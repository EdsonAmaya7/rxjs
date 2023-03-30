import { map, range, fromEvent } from 'rxjs';
import { mapTo, pluck } from 'rxjs/operators';



// range(1, 5)
//     .pipe(
//         map<number, string>(val => (val * 10).toString())
//     )
//     .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.pipe(
    map<KeyboardEvent,string>( ({key}) => {
       return key
    } )
)
.subscribe( console.log )


const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
)

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);


keyupPluck$.subscribe( console.log )

keyupPluck$.subscribe( code => console.log(`pluck `,code))
keyupMapTo$.subscribe( code => console.log('keyupMapTo',code))
