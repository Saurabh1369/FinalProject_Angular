import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Users } from 'src/app/model/user';

declare var M: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,AfterViewInit {

  constructor(private us : UserService , private router:Router) { }

  user :Users = new Users();

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }

  signup()
  {
    console.log("signup()");
    this.user.user_type="U";
    this.us.signupService(this.user).subscribe( );
    this.router.navigate(["/login"]);
  }
}
