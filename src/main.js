export default class App {
    sumatoriaSerieUno(numero) {
       let suma = 0;

        for(let i = 1; i <= numero; i++) {
        
            suma = suma + 1/i;
            
        }

        return suma
    }
 
    sumatoriaSerieDos(numero) {
        let i = 1;
        let suma = 0;

        while(i <= numero) {

            if(i % 2 == 0){
                suma = suma + 1/i;
            } else {
                suma = suma - 1/i;
            } 

            i++
        }

        return suma;
    }

    esPrimo(numero) {

        do{
            if(numero % 1 == 1) {
                return true 
            } else if (numero % numero == 1) {
                return true;
            } else if (numero == 2) {
                return false
            }
        } while(not)
    }

    obtenerMultiplos(inicio, fin) {

    }

    obtenerImpares(numero1, numero2) {

    }
}

let app = new App();

console.log("Implemented sumatoriaSerieUno");
console.log(app.sumatoriaSerieUno(7));
console.log("Implemented sumatoriaSerieDos");
console.log(app.sumatoriaSerieDos(2));
console.log("Implemented esPrimo");
console.log(app.esPrimo());
console.log("Implemented obtenerMultiplos");
console.log(app.obtenerMultiplos());
console.log("Implemented obtenerImpares");
console.log(app.obtenerImpares());
