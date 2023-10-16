 'use strict';
 
 function register(e){

    e.preventDefault();

    const user = {

        firstName: e.target[0].value,
        lastName: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value,
        confirmPassword: e.target[4].value

    };


    console.log(user.lastName);
    
}