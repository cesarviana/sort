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

  let output = 'Algoritmo,Quantidade,Tempo,Tipo,Comparações,Movimentos\n';

  sortAlgorithms.forEach(algo => {
    dataToSort.forEach((data, i) => {

      const EXECUTIONS_PER_QUANTITY = 10;
      const EXECUTIONS = quantities.length * EXECUTIONS_PER_QUANTITY;

      let timeSum = {};
      let movementsSum = {};
      let comparisonsSum = {};

      for(let i=0; i<quantities.length; i++)
      {
        timeSum[quantities[i]] = 0;
        movementsSum[quantities[i]] = 0;
        comparisonsSum[quantities[i]] = 0;
      }

      for(let i=0; i<EXECUTIONS; i++)
      {

        const quantity = quantities[i % quantities.length]
        
        let arrayCopy = data.array.slice(0, quantity);
        let result = algo.sort(arrayCopy);
        
        timeSum[quantity] += result.time
        movementsSum[quantity] += result.movements
        comparisonsSum[quantity] += result.comparisons
      }

      for(let i=0; i<quantities.length; i++)
      {
        const quantity = quantities[i];

        const time = timeSum[quantity] / EXECUTIONS_PER_QUANTITY
        const movements = movementsSum[quantity] / EXECUTIONS_PER_QUANTITY
        const comparisons = comparisonsSum[quantity] / EXECUTIONS_PER_QUANTITY

        output += `${algo.getName()},${quantity},${time.toFixed(6)},${data.name},${comparisons},${movements}\n`;
        
      }
    });
  });

  const fs = require('fs')
  fs.writeFile('output.csv', output, (err) => { if (err) console.error(err)} )
}

function test() {
  const a = arraysLoader.loadSimple()[0];
  const b = arraysLoader.loadComplex()[0];
  console.log(quick.sort(a));
  console.log(quick.sort(b));
  console.log("fim");
}

execute();
