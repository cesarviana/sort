const Sort = require('./sort');

class Select extends Sort {

    /**
     * Find min index and swap
     */

    executeSort(array) {

        for (let i = 0; i < array.length - 1; i++) {

            let min = i;

            for (let j = i + 1; j < array.length; j++) {
                this.comparisons++;
                if (array[j] < array[min]) {
                    min = j
                }
            }

            this.swap(array, min, i);

        }

        return array;

    }
}

module.exports = new Select();