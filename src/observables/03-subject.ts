import { observable, Observable, Observer, Subject } from 'rxjs';


const observer: Observer<any> = {
    next: next => console.log('siguiente[next]:', next),
    error: error => console.warn('Error: ', error), 
    complete: () => console.log('COMPLETE')
}

const intervalo$ = new Observable<number>(
    subs => {
        const intervalID = setInterval(
            () => subs.next( Math.random() ) ,3000
        );

        return () => {
            clearInterval( intervalID)
        console.log('intervalo destruido')
        };
});

// Subject
// --casteo multiple muchas subscripciones dependen del subject y reciben los mismos valores
// emite los mismos valores a todos los servicios subscritos
// tambien es un observer
// se puede manejar el next error y complete


const subject$ = new Subject();
const subscripton = intervalo$.subscribe( subject$ )

const subs1 = subject$.subscribe( rnd => console.log('subs1',rnd))
const subs2 = subject$.subscribe( rnd => console.log('subs2',rnd))

setTimeout(() => {
    subject$.next(10)
    subject$.complete();
    subscripton.unsubscribe()
}, 3500);

// cuando la data es producida por el observable en si mismo es considerado un cold observable
 // pero cuando la data es producida por fuera del observable es llamada hot observable

