
import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit,AfterViewInit  {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }

  clickOnOrderManagement()
  {
    
  }

}
