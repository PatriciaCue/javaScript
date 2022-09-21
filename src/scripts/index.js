/**
 * PROMISES AND ERROR HANDLING
 */

     //ERROR IN JS HANDLING USING TRY AND CATCH
     /**En la ejecucion se lanzara el error pero el programa continuara y veremos continuing por consola */
     try {
          let cat= newCar;
     } catch (error) {
          console.log('error: ', error);
     }
     console.log('continuing....')

     //FINALLY
     /**Finally siempre se ejecuta */
     try {
          let cat= newCar;
     } catch (error) {
          console.log('error: ', error);
     }
     finally{
          console.log('continuing....');
     }
     
     //DEFINE ERRORS
     /** */
     try {
          //code here...
          throw new Error('my custom error');
     } catch (error) {
          console.log('error: ', error);
     }
     finally{
          console.log('continuing....');
     }

     //CREATING A PROMISE
     let promise = new Promise(
          function (resolve,reject) {
               setTimeout(resolve,100,'someValue');
          }
     );
     console.log(promise);

     //SETTING A PROMISE
     promise.then(
          value=> console.log('fulfilled: ' + value),
          error => console.log('rejected: ' +error)
     );






     