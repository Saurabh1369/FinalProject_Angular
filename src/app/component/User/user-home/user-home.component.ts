import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from './../../../model/user';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  uid:number;

  constructor(private router :Router) { }

  ngOnInit() {
    this.uid = parseInt( sessionStorage.getItem( 'id' ) ); 
  }

  clickOnShipOrder()
  {
    this.router.navigate(['/user/order/pickup']);
  }

  clickOnOrderStatus()
  {
    this.router.navigate(["user/status"]);
  }
}
