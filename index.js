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
    console.log(algo.getName());
    quantities.forEach(quantity => {
      console.log(quantity);
      console.log("Tipo\t\t| Tempo\t|Comparações\t|Movimentos");
      arraysToSort.forEach((array, i) => {
        const arrayCopy = array.slice(0, quantity);
        console.log(arrayNames[i], '\t|', algo.sort(arrayCopy).toString());
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
