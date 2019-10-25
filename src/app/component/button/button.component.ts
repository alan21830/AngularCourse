import {Component ,OnInit} from '@angular/core';
 
 

@Component ({
selector:'button-root',
template:'<button (click)="onClickMe()">Click me!</button>'
})

export class ButtonRoot implements OnInit{

    api:boolean=false;

    model:any = {};
constructor() {}
ngOnInit(){}

onClickMe():void 
{
    console.log("clickkk")
this.api=true;
    
}

}