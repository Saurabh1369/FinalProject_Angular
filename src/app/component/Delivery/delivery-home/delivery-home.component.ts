import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-delivery-home',
  templateUrl: './delivery-home.component.html',
  styleUrls: ['./delivery-home.component.css']
})
export class DeliveryHomeComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }

}
