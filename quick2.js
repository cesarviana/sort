const Sort = require('./sort');

class Quick2 extends Sort {

    executeSort(array) {
        const cloneArray = [...array];
        return this.quickSort(cloneArray, 0, array.length);
    }

    quickSort(array, begin, end) {
        if (begin - end === 1 || begin - end === 0) return array;

        const pivotIndex = this.divide(array, begin, end);

        this.quickSort(array, begin, pivotIndex);
        this.quickSort(array, pivotIndex + 1, end);

        return array
    }

    divide(array, begin, end) {
        let pivotIndex = end - 1;
        let comparisionIndex = begin;

        while (comparisionIndex < pivotIndex) {
            this.comparisons++;
            if (array[comparisionIndex] > array[pivotIndex]) {
                this.swap(array, pivotIndex - 1, pivotIndex);
                this.comparisons++;
                if (pivotIndex - 1 !== comparisionIndex) {
                    this.swap(array, comparisionIndex, pivotIndex);
                }
            }
            pivotIndex--;
        }

        return pivotIndex
    }
}

module.exports = new Quick2();