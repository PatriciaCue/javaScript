/**
 * USING HTTP
 */

     //HTTP REQUEST USING XHR
     let xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
          if(this.readyState ==4 && this.status ==200){
               console.log(this.responseText);
          }
     };

     xhttp.open("GET", "http://myid.mockapi.io/api/v1/users", true);
     xhttp.send();

     //HTTP REQUEST USING JQUERY
     /** instalamos jquery npm instal jquery*/
     import $ from 'jquery';
                         //-----------end point--------------//
     let promise= $.get("http://myid.mockapi.io/api/v1/users",
          data=> console.log('data: ',data)
     );

     promise.then(
          data=> console.log('success: ', data),
          error=> console.log('error: ', error)
     );

     //HTTP POST USING JQUERY
     let user ={
          name:'Marta Gomez',
          avatar:'marta.jpg'
     };
     let promise2= $.post("http://myid.mockapi.io/api/v1/users", user);
     promise2.then(
          data=>console.log('data: ', data),
          error=>console.log('error: ', error)
     );

     