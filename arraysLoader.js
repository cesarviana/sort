const fse = require('fs-extra')
class ArraysLoader {
    loadDefault(){
        //return this.loadSimple();
        return this.loadComplex();
    }
    loadSimple(){
        return [
                { name: 'ordenado', array: [1,2,3,4] },
                { name: 'inverso', array: [5,4,3,2] },
                { name: 'aleatório', array: [9,3,4,5] }
        ];
    }
    loadComplex(){
        let ordenado = { name: 'ordenado', array: this.loadArray('./saidaOrdenada.txt') };
        let inverso = { name: 'inverso', array: this.loadArray('./saidaInvertida.txt') };
        let aleatorio = { name: 'aleatório', array: this.loadArray('./saidaAleatoria.txt') };
        return [ ordenado, inverso, aleatorio ];
    }

    loadArray(fileName){
        let content = fse.readFileSync(fileName, 'UTF-8');
        const match = content.match(/(?<index>\d+)/gm);
        return match.map(string => Number(string))
    }

}

module.exports = new ArraysLoader();