const Sort = require('./sort');

class Quick extends Sort {

    getName(){ return "QUICK SORT"; }

    executeSort(array) {
        const copyArray = [...array];
        this.quickSort(copyArray, 0, copyArray.length);
        return copyArray
    }

    quickSort(array, begin, end) {
        var i, j, pivo;
        i = begin;
        j = end - 1;
        pivo = array[Math.ceil((begin+end)/2)];

        while(i <= j){
            while(this.lowerThan(array[i], pivo) && i < end){
                i++;
            }
            while(this.greatherThan(array[j], pivo) && j > begin){
                j--;
            }
            if(i <= j){
                this.swap(array, i, j);
                i++;
                j--;
            }
        }
        if(j > begin){
            this.quickSort(array, begin, j+1);
        }
        if(i < end){
            this.quickSort(array, i, end);
        }
    }
}

module.exports = new Quick();