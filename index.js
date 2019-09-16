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

  const arraysToSort = arraysLoader.loadDefault();

  const arrayNames = ["Ordenado", "Inverso", "Aleatório"];
  const quantities = [500, 1000, 5000, 10000];

  sortAlgorithms.forEach(algo => {
    quantities.forEach(quantity => {
      arraysToSort.forEach((array, i) => {
        const arrayCopy = array.slice(0, quantity);
        console.log(algo.getName(), '\t|', quantity, '\t\t|', arrayNames[i], '\t|', algo.sort(arrayCopy).toString());
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
