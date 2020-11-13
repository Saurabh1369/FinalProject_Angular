import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Users } from 'src/app/model/user';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
declare var M: any;

@Component({
  selector: 'app-delivery-person-register',
  templateUrl: './delivery-person-register.component.html',
  styleUrls: ['./delivery-person-register.component.css']
})
export class DeliveryPersonRegisterComponent implements OnInit,AfterViewInit  {

  constructor( private as:AdminService ,private router:Router ) { }

  user:Users = new Users();

  ngOnInit() { }
  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }

  signup() {
    this.user.user_type="D";
    this.as.signupService(this.user).subscribe( s=> {
      this.router.navigate(["/admin/home"]);
    },
    err=> {
      console.log(err.error);
    });
  }

}
