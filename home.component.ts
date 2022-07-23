import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface User{
  userName:string,
  password: string,
  email : string
};


export interface Persion{
  firstName:string
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  
user:User={
    userName:'',
    password:'',
    email:''
  };

 
 persion:Persion={
    firstName :''
  };
 
 constructor() { 
    this.user = {} as User;
   
 this.persion ={} as Persion;
  }

 
 ngOnInit(): void {
  }
  color= new FormControl('');
  name ='';

 
 myForm = new FormGroup({
   
 username : new FormControl(this.user.userName,[
     
 Validators.required,
    
  Validators.minLength(5),
     
 Validators.maxLength(15)
    ]),
    
password : new FormControl(this.user.password,[
      
Validators.required,
      Validators.minLength(6)
      
    ]),
 
   email:new FormControl(this.user.email,[
      Validators.required,
 
     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ])
  })
  
get username(){
    return this.myForm.get('username');
  }

get email(){
  return this.myForm.get('email');
}
  
onSubmit(){
    console.log(this.myForm.value)
  }
}
