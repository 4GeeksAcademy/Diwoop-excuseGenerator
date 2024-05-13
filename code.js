
function excuses(variable1,variable2, variable3, variable4){
    let quien = ['Mi perro', 'Mi abuela', 'Mi gato', 'El repartidor'];
    let accion =['se comió', 'rompió', 'perdió', 'se accidentó'];
    let que = ['mis deberes', 'mi telefono', 'el coche'];
    let cuando = ['cuando estaba durmiendo','antes de clase','mientras venia','por la noche'];

    let recQuien = Math.floor(Math.random()*quien.length);
    let recAccion = Math.floor(Math.random()*accion.length);
    let recQue = Math.floor(Math.random()*que.length);
    let recCuando = Math.floor(Math.random()*cuando.length);

    let excusaFinal = quien[recQuien]+" "+accion[recAccion]+" "+que[recQue]+" "+cuando[recCuando];

    return excusaFinal
}
console.log(excuses())