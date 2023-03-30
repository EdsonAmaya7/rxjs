import { interval, Observer, subscribeOn, timer } from 'rxjs';


const observer = {
    next: (next:any) => console.log('siguiente[next]:', next),
    error: (error:any) => console.warn('Error: ', error), 
    complete: () => console.log('COMPLETE')
}

// emite un valor por segundo
const interval$ = interval(1000)
// emite el valor despues de 2 segundos
// const timer$ = timer(2000)
// emite el valor despues de 2 segundos y despues lo llama cada segundo
// const timer$ = timer(2000,1000)

// le suma 5 segundos hoy
const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);
const timer$ = timer(hoyEn5)



console.log('inicio')

// interval$.subscribe( observer )
 timer$.subscribe( observer )


console.log('fin')