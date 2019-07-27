import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Users } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private us : UserService , private router:Router) { }

  user :Users = new Users();

  ngOnInit() {
    
  }

  signup()
  {
    console.log("signup()");
    this.user.user_type="U";
    this.us.signupService(this.user).subscribe( );
    this.router.navigate(["/login"]);
  }
}
