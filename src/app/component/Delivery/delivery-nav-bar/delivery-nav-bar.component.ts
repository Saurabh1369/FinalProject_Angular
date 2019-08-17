import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-nav-bar',
  templateUrl: './delivery-nav-bar.component.html',
  styleUrls: ['./delivery-nav-bar.component.css']
})
export class DeliveryNavBarComponent implements OnInit {

  constructor() { }
  userName:String;

  ngOnInit() {
    this.userName = sessionStorage.getItem('uname');
  }

}
