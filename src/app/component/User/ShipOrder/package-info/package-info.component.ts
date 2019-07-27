import { Component, OnInit } from '@angular/core';
import { packageInfo } from './../../../../model/packge-info';
import { User2Service } from 'src/app/Services/user2.service';
import { Weight } from './../../../../model/weight';
import { DeliveryType } from './../../../../model/Delivery_Type';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-info',
  templateUrl: './package-info.component.html',
  styleUrls: ['./package-info.component.css']
})
export class PackageInfoComponent implements OnInit {

  constructor(private us:User2Service, private router :Router) { }

  pkg = new packageInfo();
  wgt : Weight[];
  dtype :DeliveryType[];

  

  ngOnInit() {
    this.us.getWeights().subscribe( w => {
      this.wgt = w;
      console.log(this.wgt);
      
    });

    this.us.getDtype().subscribe( d =>
    {
      this.dtype = d;
      console.log(this.dtype);
    });
  }

  onPackageSubmit(){
    this.pkg.user_id = parseInt (sessionStorage.getItem("id"));
    this.pkg.order_id = parseInt (sessionStorage.getItem("order_id"));

    console.log(this.pkg);
    this.us.onPackageSubmit( this.pkg ).subscribe (s =>
      {
        console.log(s);
        sessionStorage.removeItem("order_id");
        this.router.navigate (["/user/home"]);
      },
      (err:HttpErrorResponse)=>
      {
        console.log(err);
      });
  }

}
