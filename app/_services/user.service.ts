import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
    constructor() { }

    getAll() {
       
    }
    
   
    register(data) {
     alert("User registered!");
     localStorage.setItem("userInfo", JSON.stringify(data));
    }

   
}