import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: next => console.log('siguiente[next]:', next),
    error: error => console.warn('Error: ', error), 
    complete: () => console.log('COMPLETE')
}


const intervalo$ = new Observable<number>( susbcriber => {
    // crear un contador 1 2 3 4 por segundos
    let contador = 0;
   const interval  = setInterval( () => {
        //cada segundo
        contador++;
        susbcriber.next(contador)
        console.log(contador)
    },1000)

    return () =>{
        clearInterval(interval)
        console.log('intervalo destruido')
    }

});


const subs1 = intervalo$.subscribe( observer)
const subs2 = intervalo$.subscribe( observer)
const subs3 = intervalo$.subscribe( observer)
 
subs1.add(subs2);
subs2.add(subs3);
     

setTimeout(() => {
    subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('completado timeout')
},3000)