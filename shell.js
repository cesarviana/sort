const Sort = require('./sort');

class Shell extends Sort {

    executeSort(array) {

        // choose gap
        let gap = array.length;

        do {

            for (let i = 0; (i + gap) < array.length; i++) {
                let currentIndex = i;
                let gapIndex = currentIndex + gap;

                while (currentIndex >= 0) {
                    // swap
                    this.comparisons++;
                    if (array[currentIndex] > array[gapIndex]) {
                        this.swap(array, currentIndex, gapIndex);
                    }

                    gapIndex = currentIndex;
                    currentIndex -= gap;
                }
            }

            // update gap
            gap = Math.floor(gap / 2);

        } while (gap > 0);

        return array;

    }
}

module.exports = new Shell();