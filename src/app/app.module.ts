import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import per chiamate Api
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {NavComponent} from './component/nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {Routes, RouterModule} from "@angular/router";
//import per chiamate Api
import{ValuesComponent} from './component/values/values.component';
import{UploadComponent} from './component/Upload/upload.component';
import { AuthServices } from './_services/auth.services';
import {ButtonRoot} from './component/button/button.component';
import { UserServices } from './_services/user.services';
import { LoginComponent } from './component/login/login.component';
  
const routes: Routes = [
  
{ path: 'home', component: ValuesComponent },
{ path: 'button', component: ButtonRoot }

 
];

@NgModule({
  declarations: [
    AppComponent,ValuesComponent,UploadComponent,NavComponent,ButtonRoot,LoginComponent
  ],
  imports: [
    BrowserModule,
   HttpClientModule ,
   FormsModule ,
   ReactiveFormsModule,
   RouterModule.forRoot(routes)
    
  ],
  providers: [AuthServices,UserServices],
  bootstrap: [ AppComponent]
})
export class AppModule { }
