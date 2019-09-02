const Sort = require('./sort');

class Merge extends Sort {

    executeSort(array) {
        return array;
    }
}

module.exports = new Merge();