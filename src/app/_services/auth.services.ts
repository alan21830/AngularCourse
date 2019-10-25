import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from  'rxjs/operators';
@Injectable
({
providedIn:'root'
})
export class AuthServices
{
Url='http://localhost:4200/api/auth/';
constructor(private http: HttpClient){}

login (model : any){
return this.http.post(this.Url + 'login',model).pipe( 
map((response:any) => {
const user = response;})
);
}
}