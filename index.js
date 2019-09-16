const select = require("./select");
const insert = require("./insert");
const shell = require("./shell");
const quick = require("./quick");
const merge = require("./merge");
const arraysLoader = require("./arraysLoader");

function execute() {
  const sortAlgorithms = [
    select,
    insert,
    shell,
    merge, 
    quick
  ];

  const dataToSort = arraysLoader.loadDefault();
  const quantities = [
    500,
    1000,
    5000, 
    10000
  ];

  sortAlgorithms.forEach(algo => {
    quantities.forEach(quantity => {
      dataToSort.forEach((data, i) => {
        
        let timeSum = 0;
        let movementsSum = 0;
        let comparisonsSum = 0;
        
        const EXECUTIONS = 50;

        for(let i=0; i<EXECUTIONS; i++)
        {
          let arrayCopy = data.array.slice(0, quantity);
          let result = algo.sort(arrayCopy);
          timeSum += result.time
          movementsSum += result.movements
          comparisonsSum += result.comparisons
        }

        const time = timeSum / EXECUTIONS
        const movements = movementsSum / EXECUTIONS
        const comparisons = comparisonsSum / EXECUTIONS

        console.log(algo.getName(), '\t|', quantity, '\t\t|', data.name, '\t|', time.toFixed(6), '\t|', comparisons, '\t|', movements );
      });
    });
  });
}

function test() {
  const a = arraysLoader.loadSimple()[0];
  const b = arraysLoader.loadComplex()[0];
  console.log(quick.sort(a));
  console.log(quick.sort(b));
  console.log("fim");
}

execute();
