/**
 * CLASES Y MODULOS
 */

     //IMPORTING A MODULE
     //Hemos creado la clase car, y la tenemos que importar en 
     //el fichero que vamos a utilizar
     import{Car} from './models/car.js';


     let car8 = new Car(123);
     console.log(car8.identify()); 
     //Console Output: CarId: 123


     //CLASS BASICS, CONSTRUCTOR AND PROPERTIES

     class Car{
          constructor(id){
               this.id=id;
          }
          identify(){
               return `Car Id:${this.id}`;
          }
     }

     let car = new Car(123);
     console.log(car.identify()); 
     //Console Output: CarId: 123

     class Car{
          constructor(id){
               this.id=id;
          }
          identify(suffix){
               return `Car Id:${this.id} ${suffix}`;
          }
     }
     let car2 = new Car(123);
     console.log(car.identify('!!!!')); 
     //Console Output: CarId: 123 !!!!

     //INHERITANCE
     class Vehicle{
          constructor(){
               this.type='car';
          }
          start(){
               return `Starting: ${this.type}`;
          }
     }

     class Car extends Vehicle {
          start(){
               return 'in Car start' + super.start();
          }
     }
     let car6 = new Car();
     console.log(car6.start); 
     //Console Output: 'in Car start Starting: car ' 


     //CREATING A MODULE
