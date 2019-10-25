import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {  UserServices} from '../../_services/user.services';
import {User} from '../Models/User';

@Component({
  selector: 'values-root',
  templateUrl: './values.component.html'
   
})
export class ValuesComponent implements OnInit{

    //usata per il risultato della chiamata api
 values : User[] ;

 //costruttore per injection client  
    constructor(private http : HttpClient, private service: UserServices)
    {  }

    ngOnInit()
    {
      this.service.getValueFromDb().subscribe (response => {this.values=response;});
    }
 
}
 

   
 
