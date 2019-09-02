class Sort {
    sort(array) {
        this.initialTime = Date.now();
        this.comparisons = 0;
        this.movements = 0;

        const sortedArray = this.executeSort(array);

        const time = Date.now() - this.initialTime;
        return {
            sortedArray,
            time,
            comparisons: this.comparisons,
            movements: this.movements
        }
    }

    swap(array, i1, i2) {
        let aux = array[i1];
        this.movements++;
        array[i1] = array[i2];
        this.movements++;
        array[i2] = aux;
        this.movements++;
    }
}

module.exports = Sort;