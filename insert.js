const Sort = require('./sort');

class Insert extends Sort {

    executeSort(array) {

        for (let sourceIndex = 1; sourceIndex < array.length; sourceIndex++) {
            let sourceValue = array[sourceIndex];

            let targetIndex = sourceIndex - 1;

            while (targetIndex >= 0 && sourceValue < array[targetIndex]) {
                this.comparisons++;
                array[targetIndex + 1] = array[targetIndex];
                this.movements++;
                targetIndex--
            }

            array[targetIndex + 1] = sourceValue;
            this.movements++;

        }

        return array
    }
}

module.exports = new Insert();