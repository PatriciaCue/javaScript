/**
 * OPERATORS
 */

  ////////////////EQUALITY OPERATORS///////////////////////
  if(var1 == var2){} // puede comparar un number con un string 1 con '1'
  if(var1 === var2){} //las variables tienen que ser tambien el mismo tipo de dato
  if(var1 != var2){}
  if(var1 !== var2){}
  
  //Ejemplo
  let id = 123;
  console.log(id !== "123"); // Console Output:TRUE number es distinto que string
  console.log(id != "123"); // Console Output:FALSE 123 = '123'
  console.log(id == "123"); // Console Output:FALSE 123 = '123'
  console.log(id === "123"); // Console Output:TRUE number es distinto que string
  

   ////////////////UNARY OPERATORS///////////////////////
  //Ejemplo 
  let a=3;
  let b="1967"
  console.log(a++); // Console Output:3
  console.log(++a); // Console Output:4
  console.log(--a); // Console Output:
  console.log(a--); // Console Output:
  console.log(+b); // Console Output: 1967 lo convierte en un numero y si b="-3" lo convierte a -3
  console.log(-a); // Console Output:-3

  ////////////////LOGICAL OPERATORS///////////////////////
  //Ejemplo
   if (var1 > 5 && var2 <100){}
   if (var1 > 5 || var2 <100){}
                    //--se evalua primero &&
   if (var1 > 5 || var2 <100 && var3 ===5){}
        //--asi se evalua primero ||
   if ((var1 > 5 || var2 <100) && var3 ===5){}

   //Ejemplo
   let userSettings=null;
   let defaultSettings= {name:'Default'};
   console.log(userSettings || defaultSettings);
   //Console Output: 'Default'

   let userSettings2={name:'Joe'};
   let defaultSettings2= {name:'Default'};
   console.log(userSettings2 || defaultSettings2);
   //Console Output: 'Joe'

   ////////////////CONDITIONAL OPERATORS///////////////////////
  //Ejemplo
  var result = (foo >5)? true:false;
  

  