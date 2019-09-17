const Sort = require('./sort');

class Insert extends Sort {

    getName(){ return "INSERTION SORT"; }

    executeSort(array) {

        for (let sourceIndex = 1; sourceIndex < array.length; sourceIndex++) {
            let sourceValue = array[sourceIndex];

            let targetIndex = sourceIndex - 1;

            while (targetIndex > 0 && this.lowerThan(sourceValue, array[targetIndex])) {
                this.set(array, targetIndex + 1, array[targetIndex])
                targetIndex--
            }

            this.set(array, targetIndex + 1, sourceValue)

        }

        return array
    }
}

module.exports = new Insert();