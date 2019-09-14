class Sort {
    sort(array) {
        this.initialTime = Date.now();
        this.comparisons = 0;
        this.movements = 0;

        const sortedArray = this.executeSort(array);

        const time = Date.now() - this.initialTime;
        return {
            //sortedArray,
            time,
            comparisons: this.comparisons,
            movements: this.movements,
            toString:()=>{

                return time+"\t|"+this.comparisons+"\t|"+this.movements//+"\t|"+sortedArray.join(',');
            }
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

    lowerThan(a, b){
        this.comparisons++;
        return a < b;
    }

    lowerOrEqual(a,b){
        this.comparisons++;
        return a <= b;
    }

    greatherOrEqual(a, b){
        this.comparisons++;
        return a >= b;
    }

    greatherThan(a, b){
        this.comparisons++;
        return a > b;
    }

    set(array, index, value) {
        this.movements++;
        array[index] = value
    }
}

module.exports = Sort;