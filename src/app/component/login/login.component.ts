import {Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
 import {User} from "../Models/User";
import { UserServices } from 'src/app/_services/user.services';

@Component ({
selector:'login-root',
templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit {
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'   
        })
      };
 user: User;



constructor(private http:HttpClient,private service : UserServices){}
    
mappingForm:FormGroup;

insert( )
{
 
    this.user=Object.assign({},this.mappingForm.value);

    this.service.postNewUser(this.user).subscribe ();
    this.mappingForm.setValue({username:'',password:''});
}

ngOnInit()
{
this.mappingForm= new FormGroup({
username:new FormControl(),
password: new FormControl(),
});

 
}


}
 


 