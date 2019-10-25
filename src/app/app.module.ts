import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import per chiamate Api
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {NavComponent} from './component/nav/nav.component';
import {FormsModule} from '@angular/forms';

//import per chiamate Api
import{ValuesComponent} from './component/values/values.component';
import{UploadComponent} from './component/Upload/upload.component';
import { AuthServices } from './_services/auth.services';
import {ButtonRoot} from './component/button/button.component';
import { UserServices } from './_services/user.services';

@NgModule({
  declarations: [
    AppComponent,ValuesComponent,UploadComponent,NavComponent,ButtonRoot
  ],
  imports: [
    BrowserModule,
   HttpClientModule
   ,FormsModule
  ],
  providers: [AuthServices,UserServices],
  bootstrap: [ NavComponent,ValuesComponent,ButtonRoot]
})
export class AppModule { }
