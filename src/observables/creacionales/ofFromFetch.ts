import { from, of } from "rxjs";

const observer = {
    next: (next:any) => console.log('siguiente[next]:', next),
    error: (error:any) => console.warn('Error: ', error), 
    complete: () => console.log('COMPLETE')
}


// const source$ = from([1,2,3,4,5]);
// const source$ = from([1,2,3,4,5]);

// const source$ = from( fetch('https://api.github.com/users/edsonamaya7'));

// source$.subscribe( async(resp) => {
//     console.log(resp)

//     const dataResp = await resp.json();
//     console.log(dataResp);
// })

// source$.subscribe( observer )

// const miGenerador = function*(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// const miIterable = miGenerador();

// from(miIterable).subscribe(observer)
