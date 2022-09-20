/**
 * REST PARAMETERS y DESTRUCTURING ARRAYS
 * 
 */

 function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]

  /**
   * DESTRUCTURING ARRAYS
   */

  //Ejemplo 1
  let carIds = [1,2,5];
  let [car1,car2,car3]= carIds;
  console.log(car1,car2,car3);
  // Console Output:
  // 1  2  5

  //Ejemplo 2
  let carNums = [1,2,5];
  let carA, remainingCars;
  [carA, ...remainingCars]=carNums;
  console.log(carA,remainingCars);
  // Console Output:
  // 1  [2,5]

  //Ejemplo 3
  let carIdenti = [1,2,5];
  let restoCars;
  [, ...restoCars]=carIdenti;
  console.log(restoCars);
  // Console Output:
  //[2,5]



