import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesComponent} from "./component/values/values.component"
import { ButtonRoot } from "./component/button/button.component";
import { RouterModule, Routes } from '@angular/router';



  const routes: Routes = [
    { path: '', component: ButtonRoot },
  { path: 'home', component: ValuesComponent }
   
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
