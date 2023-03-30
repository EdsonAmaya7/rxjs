import { Observable, Observer } from 'rxjs';

// crea un observable de forma estatica
// const obj$ = Observable.create();

const observer: Observer<any> = {
    next: next => console.log('siguiente[next]:', next),
    error: error => console.warn('Error: ', error), 
    complete: () => console.log('COMPLETE')
}



const obs$ = new Observable<string>(subs => {

    subs.next('hola')
    subs.next('mundo')

    subs.complete()
    subs.next('mundo')
});


// obs$.subscribe(console.log)

// obs$.subscribe( resp => {
//     console.log(resp)
// } )


// obs$.subscribe({ 
//     next: next => console.log('Next: ', next), 
//     error: error => console.warn('Error: ', error), 
//     complete: () => console.log('COMPLETE')
// });

obs$.subscribe( observer );