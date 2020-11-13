import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Users } from 'src/app/model/user';
import { HttpErrorResponse } from '@angular/common/http';
declare var M: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  constructor(private us : UserService,private router:Router) { }

  u = new Users();
  user :Users;
  msg:string;

  ngOnInit() { }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }

  onLogin() {
    this.us.onlogin( this.u ).subscribe( user => {
      if (!user) {
        this.msg ="Invalid Email or Password";
        this.router.navigate(["/login"]);
        return;
      }
      sessionStorage.setItem('uname', user.fname);
      sessionStorage.setItem('id', user.user_id.toString());
      if(user.user_type === 'A'){
      this.router.navigate(["/admin/home"]);
      }
      else if(user.user_type === 'U'){
      this.router.navigate(["/user/home"  ]);
      }
      else if (user.user_type === 'D'){
      this.router.navigate(["/delivery/Home"]);
      }
    },
    (err:HttpErrorResponse)=>{
      this.msg ="Server Unavailable";
    });
  }
}
