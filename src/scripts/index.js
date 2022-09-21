/**
 * FORMS
 */

     let form = document.getElementById('user-form');

          form.addEventListener('submit', event=>{
               event.preventDefault();
     });
     
     //Accessing form fields
     let form2 = document.getElementById('user-form');

          form2.addEventListener('submit', event=>{
               let user = form.element['user'];
               let avatarFile= form.element['avatar-file'];
               
               console.log(user.value, avatarFile.value);
               event.preventDefault();
     });

     //Showing validation Errors
     //<input name="user" placeholder="User Name"/>
     //<span id="user-error"></span>
     
     let user= form.elements['user'];
     let useError = document.getElementById('user-error');

     useError.textContent='Invalid entry';
     useError.style.color='red';
     user.style.borderColor='red';
     user.focus();

     //Posting from JavaScript
     
     import $ from 'jquery';
     let form3 = document.getElementById('user-form');

          form3.addEventListener('submit', event=>{
               let user = form.element['user'];
               let avatarFile= form.element['avatar-file'];
               
               let posting={
                    user:user.value,
                    avatarFile: avatarFile.value
               };

               let promise= $.post('https://miurl.com', posting);

               promise.then(
                    data=> console.log('success: ', data),
                    error=> console.log('error',error)
               );

               event.preventDefault();
     });
