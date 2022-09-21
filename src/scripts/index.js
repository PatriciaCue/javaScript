/**
 * OBJECTS AND ARRAYS
 */


     //CONSTRUCTOR
     function Car(id) {
          this.carId = id;
          this.start= function(){
               console.log('start: ' +this.carId);
          }
     }
     let car = new Car(123);
     car.start();
     //Console Output: start: 123

     //PROTOYPES
     function Cars(id) {
          this.carId = id;
     }
     Cars.prototype.start= function(){
          console.log('start: ' +this.carId);
     }
     let cars = new Cars(123);
     car.start(); //Console Output: start: 123

     //EXPANDING OBJECTS USING PROTOTYPES
     String.prototype.hello=function(){
          return this.toString()+'Hello';
     };
     console.log('foo'.hello()); //Console Output: foo Hello

     //JSON
     //Convert to JSON
     let car3={
          id:123,
          style:'convertible'
     };
     console.log(JSON.stringify(car3)); //Console Output: {"id":123, "style":"convertible"}  --> cadena de texto

     //Convert to JSON
     let car4=[
          {carId:123},
          {carId:456},
          {carId:789},
     ];
     console.log(JSON.stringify(car4)); //Console Output: [{"carId":123}, {"carId":456},{"carId":789}] --> cadena de texto

     //Convert to JSON
     let jsonIn = `
          [
               {"carId":123},
               {"carId":456},
               {"carId":789},
          ]
     `
     let carIds= JSON.parse(jsonIn);
     console.log(carIds); //Console Output: [{carId:123}, {carId:456},{carId:789}] --> devuelve 3 objetos

     //ARRAY ITERATION
     let car5=[
          {carId:123 , style: 'sedan'},
          {carId:456 , style: 'ford'},
          {carId:789 , style: 'sedan'}
     ];

     car5.forEach(car => {
          console.log(car);
     });
     car5.forEach((car,index) => console.log(car, index));

     //.filter(), .find() (Selecciona el primer elemento que haga match con la condicion), .every()
     let carIds2=[
          {carId:123 , style: 'sedan'},
          {carId:456 , style: 'ford'},
          {carId:789 , style: 'sedan'}
     ];

     let sedan= carIds2.filter(
          car=>car.style === 'sedan'
     );
     console.log(sedan);


     let carIds3=[
          {carId:123 , style: 'sedan'},
          {carId:456 , style: 'ford'},
          {carId:789 , style: 'sedan'}
     ];

     let result= carIds3.every(
          car=>car.carId > 0
     );
     console.log(result); //Console Output: TRUE, si algunos de los carId fuera negativo daria FALSE


