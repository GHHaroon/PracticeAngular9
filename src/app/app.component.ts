import { Component, HostListener, Inject } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>afdadfasdf</h1>',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
  // styles:['h1{color:green}']
})
export class AppComponent {
  title = 'myAng9App.....!';
  constructor(private router:Router){

  }
  student(){
    this.router.navigate(['/student'])
  }
  checkingif=true;
  btnClick(){
    alert("You clicked me");
    console.log("You clicked me");
  }
  users=[
    'Haroon',
    'Haider'
  ];

  getCSSClass(flag:string){
    let classes;
    if(flag=="mode"){
      classes={
        'one': true,
        'two': true
      }
    }
    else{
      classes={
        'one': false,
        'two': true
      }
    }
    return classes;
  }

  empFirstName:string = 'Haroon'
  empLastName:string = 'Wasim'
  // constructor(@Inject(MyServiceService)myServiceService){
  //     console.log(myServiceService)
  //     console.log('Hi this is App Component');
  // }
  // @HostListener('click', ['$event'])
  // onHostClick(event:Event){
  //   alert('Hello');
  // }

  a: number = 10
  b: number = 10

  cols:number = 3;
  bdr:number = 5;

  data:string = 'H and H';
  data1: string = 'Haider';

  employees:any[]= [
    {
      code:'001', name:'Haroon', salary:8000, dob:'02/aug/1990'
    },
    {
      code:'002', name:'Haider', salary:9000, dob:'10/sept/1991'
    },
  ]
}
