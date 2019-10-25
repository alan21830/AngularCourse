import {Component ,OnInit,EventEmitter } from '@angular/core';
 import {User} from '../Models/User';
 
 import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';


@Component ({
selector:'nav-root',
templateUrl:'./nav.component.html'
})

export class NavComponent implements OnInit{

 model : any;
registerForm:FormGroup;
constructor(private http :HttpClient) {
this.model= new User;
}
ngOnInit(){
this.registerForm= new FormGroup({
    username:new FormControl(),
    password : new FormControl(),

    });
}
  
insert()
{ 

this.http.post('https://localhost:44389/api/user',this.model).subscribe();
    console.log("è stato premuto click");


}

 
 

}