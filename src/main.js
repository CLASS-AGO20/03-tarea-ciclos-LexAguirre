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

            
            /*if(numero % 2 === 0) {
                return true 
            } else if (numero % 3 == 0) {
                return true;
            } else if (numero % 5 == 0) {
                return true;
            } else if (numero % 7 == 0) {
                return true;
            } else if (numero % 11 == 0) {
                return true;
            } else if (numero % 13 == 0) {
                return true;
            } else if (numero % 17 == 0) {
                return true;
            } else if (numero % 19 == 0) {
                return true;
            } else if (numero % 23 == 0) {
                return true;
            } else if (numero % 29 == 0) {
                return true;
            } else if (numero % 31 == 0) {
                return true;
            } else if (numero % 37 == 0) {
                return true;
            } else if (numero % 41 == 0) {
                return true;
            } else if (numero % 43 == 0) {
                return true;
            } else if (numero % 47 == 0) {
                return true;
            } else if (numero % 53 == 0) {
                return true;
            } else if (numero % 59 == 0) {
                return true;
            } else if (numero % 61 == 0) {
                return true;
            } else if (numero % 67 == 0) {
                return true;
            } else if (numero % 71 == 0) {
                return true;
            } else if (numero % 73 == 0) {
                return true;
            } else {
                return false
            }*/
        } while(numero);
    }

    obtenerMultiplos(inicio, fin) {

        if(inicio > fin) {
            let t = inicio;
            inicio = fin;
            fin = t;
        }
        
        let i = inicio;
        let imp = 0;

        do {
            if (i % 3 == 0) {
                imp = imp + i;
                imp = imp.toString();
            }

            i++;

        } while (i <= fin);

        return imp;
    }

    obtenerImpares(numero1, numero2) {

        let imp = 0; 

        if(numero2 > numero1) {
            let t = numero2;
            numero2 = numero1;
            numero1 = t;
        }
        
        for(let i = numero1; i >= numero2; i--) {
            if(i % 2 != 0){

                if(imp == 0){
                    imp = imp + i;
                    imp = imp.toString();
                } else {
                    imp = imp + "," + i;
                    imp = imp.toString();
                }
                
            }
        }
        return imp; 
    }
}

let app = new App();

console.log("Implemented sumatoriaSerieUno");
console.log(app.sumatoriaSerieUno(7));
console.log("Implemented sumatoriaSerieDos");
console.log(app.sumatoriaSerieDos(2));
console.log("Implemented esPrimo");
console.log(app.esPrimo(3));
console.log(app.esPrimo(20));
console.log("Implemented obtenerMultiplos");
console.log(app.obtenerMultiplos(10, 25));
console.log(app.obtenerMultiplos(25, 10));
console.log("Implemented obtenerImpares");
console.log(app.obtenerImpares(4, 13));
console.log(app.obtenerImpares(13, 4));
