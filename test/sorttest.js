const insert = require('../insert');
const select = require('../select');
const sheel = require('../shell');
const quick = require('../quick');
const quick2 = require('../quick2');
const merge = require('../merge');
const expect = require('chai').expect;
describe('must sort', function () {

    function testSort(sorter) {
        const result = sorter.sort([49, 67, 33, 96, 21, 33, 58, 74]);
        const expected = [21, 33, 33, 49, 58, 67, 74, 96];
        expect(result.sortedArray).to.be.eql(expected);
        console.log(result)
    }

    it('insert sort', () => testSort(insert));
    it('select sort', () => testSort(select));
    it('sheel sort', () => testSort(sheel));
    it('quick sort', () => testSort(quick));
    it('quick sort 2', () => testSort(quick2));
    it('merge sort 2', () => testSort(merge));
});