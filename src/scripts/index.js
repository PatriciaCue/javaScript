/**
 * DESTRUCTURING OBJECTS
 * SPREAD
 */

  /**
   * DESTRUCTURING OBJECTS
   */

  //Ejemplo 1
  let car = { id: 5000, style:'convertible'};
  let {id,style}= car;
  console.log(id,style);
  // Console Output:
  // 5000 convertible

  //Ejemplo 2
  ({id,style}= car);
  //{id,style}= car; error!!
  
   /**
   * SPREAD SYNTAX, separa el array o la cadena de texto.
   * Separa iterables
   */

   function startCars(car1, car2, car3) {
    console.log(car1,car2,car3);
   }

   let carIds = [100,300,500];
   startCars(...carIds);
   // Console Output:
  // 100 300 500

  function startCars(car1, car2, car3) {
    console.log(car1,car2,car3);
   }

   let carCodes = 'abc';
   startCars(...carCodes);
   // Console Output:
  // a b c