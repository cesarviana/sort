const Sort = require('./sort');

class Merge extends Sort {

    getName(){ return  "MERGE SORT"; }

    executeSort(array) {
        return this.mergeSort(array);
    }

    merge(leftArray, rightArray) {
        let mergeArray = [];
      
        let rightComparisonIndex = 0;
        let leftComparisonIndex = 0;
        while (mergeArray.length < leftArray.length + rightArray.length) {
          let leftArrayElement = leftArray[leftComparisonIndex];
          let rightArrayElement = rightArray[rightComparisonIndex];
      
          let minElement;
          if (this.lowerOrEqual(leftArrayElement, rightArrayElement) ||
            rightComparisonIndex >= rightArray.length
          ) {
            leftComparisonIndex++;
            minElement = leftArrayElement;
          } else if (
            this.lowerThan(rightArrayElement, leftArrayElement) ||
            leftComparisonIndex >= leftArray.length
          ) {
            rightComparisonIndex++;
            minElement = rightArrayElement;
          }
          this.set(mergeArray, mergeArray.length, minElement);
        }
        return mergeArray;
      }
      
      mergeSort(array) {
        if (array.length == 1) return array;
        let splitIndex = Math.ceil(array.length / 2);
        let leftArray = [];
        let rightArray = [];
        for (let i = 0; i < splitIndex; i++) {
          this.set(leftArray, leftArray.length, array[i]);
        }
        for (let i = splitIndex; i < array.length; i++) {
          this.set(rightArray, rightArray.length, array[i]);
        }
        return this.merge(this.mergeSort(leftArray), this.mergeSort(rightArray));
      }

}

module.exports = new Merge();