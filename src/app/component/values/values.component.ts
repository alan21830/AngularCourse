import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'values-root',
  templateUrl: './values.component.html'
   
})
export class ValuesComponent implements OnInit{
 values : any ;

 //costruttore per injection client  
    constructor(private http : HttpClient )
    {  }

    ngOnInit(){

        this.getValueFromDb();
    }

    //metodo per recuperare i dati dal db
    getValueFromDb()
    {
        this.http.get('https://10.46.90.240/ClickECollect-Cockpit-BE/anagrafica/reti').subscribe(response => {
        this.values=response;
    }, error =>{console.log(error);
        });
    }
}
 

   
 
