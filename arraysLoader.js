const fse = require('fs-extra')
class ArraysLoader {
    loadDefault(){
        //return this.loadSimple();
        return this.loadComplex();
    }
    loadSimple(){
        return [
                [1,2,3,4], // Ordenado
                [5,4,3,2], // Inverso
                [9,3,4,5], // Aleatório
        ];
    }
    loadComplex(){
        let ordenado = this.loadArray('./saidaOrdenada.txt');
        let inverso = this.loadArray('./saidaInvertida.txt');
        let aleatorio = this.loadArray('./saidaAleatoria.txt');
        return [ ordenado, inverso, aleatorio ];
    }

    loadArray(fileName){
        let content = fse.readFileSync(fileName, 'UTF-8');
        const match = content.match(/(?<index>\d+)/gm);
        return match.map(string => Number(string))
    }

}

module.exports = new ArraysLoader();