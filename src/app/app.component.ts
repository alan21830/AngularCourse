import { Component } from '@angular/core';
import { UserServices } from './_services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourseFE';


  //inject service for all component
constructor(private apiservice:UserServices)
{}



}
