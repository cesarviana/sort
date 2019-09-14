const Sort = require('./sort');

class Quick extends Sort {

    getName(){ return "QUICK SORT"; }

    executeSort(array) {
        const copyArray = [...array];
        this.quickSort(copyArray, 0, copyArray.length);
        return copyArray
    }

    quickSort(array, begin, end) {
        if (begin - end === 1 || begin - end === 0) return array;

        let pivotIndex = end;
        let comparisionIndex = begin;

        while (comparisionIndex < pivotIndex) {
            if (this.greatherThan( array[comparisionIndex], array[pivotIndex])) {
                // pivo anda para esquerda
                // item no currentComparisonIndex assume o lugar antigo do pivo
                // elemento da esquerda entra no currentComparisonIndex
                this.swap(array, pivotIndex - 1, pivotIndex);
                if (pivotIndex - 1 !== comparisionIndex) {
                    this.swap(array, comparisionIndex, pivotIndex);
                }
            }
            pivotIndex--;
        }

        this.quickSort(array, begin, pivotIndex);
        this.quickSort(array, pivotIndex + 1, end);
    }
}

module.exports = new Quick();