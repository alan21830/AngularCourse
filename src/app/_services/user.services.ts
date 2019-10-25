import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../component/Models/User';


@Injectable()
export class UserServices
{

constructor(private http : HttpClient){}



//get user
getValueFromDb() :Observable<any> 
{

    //https://localhost:44389/api/values
   return this.http.get('https://localhost:44389/api/user') ;
}

//post user 
postNewUser(user:User):Observable<any>
{ 

    return this.http.post('http://localhost:50261/api/user',user);  
}


}