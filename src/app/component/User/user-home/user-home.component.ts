import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit,AfterViewInit {

  uid:number;

  constructor(private router :Router) { }

  ngOnInit() {
    this.uid = parseInt( sessionStorage.getItem( 'id' ) ); 
  }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
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
