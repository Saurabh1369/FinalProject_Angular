import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Users } from 'src/app/model/user';
import { HttpErrorResponse } from '@angular/common/http';



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

  ngOnInit() {
    
  }
  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }

  onLogin()
  {
    console.log("onLogin()");
    this.us.onlogin( this.u ).subscribe( u => {
       console.log(u);
       if( u != null)
       {
        sessionStorage.setItem('uname',u.fname);
        sessionStorage.setItem('id',u.user_id.toString());
        
         if(u.user_type == 'A'){
          this.router.navigate(["/admin/home"]);
         }
         else if(u.user_type == 'U'){
          this.router.navigate(["/user/home"  ]);
         }
         else if (u.user_type == 'D'){
          this.router.navigate(["/delivery/Home"]);
         }
       }
       else{
        this.msg ="Invalid Email or Password";
        this.router.navigate(["/login"]);
        }
      },
      (err:HttpErrorResponse)=>{
        console.log(err.error);
        this.msg ="Server Unavailable";
      }
      );
    
  }
}
