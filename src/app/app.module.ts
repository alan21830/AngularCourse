import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import per chiamate Api
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

//import per chiamate Api
import{ValuesComponent} from './component/values/values.component';

@NgModule({
  declarations: [
    AppComponent,ValuesComponent
  ],
  imports: [
    BrowserModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,ValuesComponent]
})
export class AppModule { }
