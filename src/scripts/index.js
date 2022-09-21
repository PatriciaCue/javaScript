/**
 * FUNCTIONS AND SCOPE
 */

  ////////////////FUNCTION SCOPE///////////////////////
  //Ejemplo 1
  function startCar(CarId) {
     let message = 'Starting...';
  }

  startCar(123);
  console.log(message); // Error message no esta definido despues de la funcion


  //Ejemplo 2
  function startCar2(CarId) {
     let message = 'Starting...';
     let startFn= function turnKey(){
          console.log(message); //'Starting...'
     };
     startFn();
  }
  startCar(123);
  //Console Output: 'Starting...'

  //Ejemplo 3
  function startCar2(CarId) {
     let message = 'Starting...';
     let startFn= function turnKey(){
          let message='Override';
     };
     startFn();
     console.log(message); //'Starting...'
  }
  startCar(123);
  
   ////////////////BLOCK SCOPE///////////////////////
  //Ejemplo 1
  let message = 'Outside';
  if (5===5){
     let message='Equal';
     console.log(message); //Console Output: 'Equal'
  }
  console.log(message); //Console Output: 'Outside'

  //Ejemplo 2
  var message2 = 'Outside';
  if (5===5){
    var message2='Equal';
    console.log(message); //Console Output: 'Equal'
  }
  console.log(message); //Console Output: 'Equal'

  ////////////////  IIFE's  ///////////////////////
  //Ejemplo 1
  (function(){
     console.log('in function');
  })(); // de esta manera se ejecutaria la funcion directamente

  ////////////////  Clousures  ///////////////////////
  //Ejemplo 1
  let app=(function(){
     let CarId= 123;
     let getId= function() {
          return CarId;
     };
     return {getId:getId};
  })();
  console.log(app.getId()); 
  //Console Output: 123


  ////////////////  CALL AND APPLY  ///////////////////////
  //Ejemplo 1 CALL
  let o={
     carId: 123,
     getId: function() {
          return this.carId;
     }
  };
  let newCar = {carId: 456};
  console.log(o.getId.call(newCar)); //Console Output: 456

  //Ejemplo 2 APPLY
  let q={
     carId: 123,
     getId: function(prefix) {
          return prefix + this.carId;
     }
  };
  let newCar2 = {carId: 456};
  console.log(q.getId.apply(newCar2,['ID: '])); //Console Output: ID: 456

  ////////////////  BIND  ///////////////////////
  //Ejemplo 1
  let s={
     carId: 123,
     getId: function() {
          return this.carId;
     }
  };
  let newCar3 = {carId: 456};
  let newFn = s.getId.bind(newCar3);
  console.log(newFn()); //Console Output: 456

  ////////////////  ARROW FUNCTION  ///////////////////////
  //Ejemplo 1
  let getId=()=>123;
  console.log(getId()); //Console Output: 123

  //Ejemplo 2
  let getId2=(prefix)=> prefix + 123;
  console.log(getId2('ID: ')); //Console Output: ID: 123

  //Ejemplo 3
  let getId3=(prefix, suffix)=> prefix + 123 + suffix;
  console.log(getId3('ID: ', '!')); //Console Output: ID: 123!

  ////////////////  DEFAULT PARAMETERS  ///////////////////////
  //Ejemplo 1
  let trackCar = function(carId, city='NY'){  //El parametro por defecto tiene que estar situado el ultimo?
     console.log(`Tracking ${carId} in ${city}.`);
  };
  console.log(trackCar(123)); //Console Output: Tracking 123 in NY.
  console.log(trackCar(123, 'Chicago')); //Console Output: Tracking 123 in Chicago.


  




  

