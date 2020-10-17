import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  
  }
  checkdata(){
    if(this.email=="admin@shopbridge.com" && this.password=="admin") {
      this.router.navigate(['/listItem']);
    }
    else{
      
        alert("Email OR PassWord Is Incorrect");
    }
  }

}
