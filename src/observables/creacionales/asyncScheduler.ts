import { asyncScheduler } from 'rxjs';


const saludar  = () => console.log('hola mundo');
const saludar2  = ({nombre,apellido}) => console.log(`hola  ${nombre} ${apellido}`);


// manda a llamar mi funcion saludar despues de 1 segundo y se completa 
// asyncScheduler.schedule(saludar, 2000)

// como 3er arggumento acepta el state que son parametros pero solo acepta 1 por eso se manda el objeto
// asyncScheduler.schedule(saludar2, 2000, {nombre:'edson',apellido:'amaya'})


// con esta firma se puede convertir el asyncScheduler en un setInterval
// que se ejecuta cada 3 segundos y su valor inicial es 0
asyncScheduler.schedule( function(state){
    console.log('state',state);

    this.schedule(state + 1, 1000)
},3000,0)

