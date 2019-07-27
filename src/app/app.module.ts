import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/Home/login/login.component';
import { NavbarComponent } from './component/Home/navbar/navbar.component';
import { RegisterComponent } from './component/Home/register/register.component';
import { HomeComponent } from './component/Home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserHomeComponent } from './component/User/user-home/user-home.component';
import { UserNavBarComponent } from './component/User/user-nav-bar/user-nav-bar.component';
import { PickupAddressComponent } from './component/User/ShipOrder/pickup-address/pickup-address.component';
import { DestinationAddressComponent } from './component/User/ShipOrder/destination-address/destination-address.component';
import { PackageInfoComponent } from './component/User/ShipOrder/package-info/package-info.component';
import { OrderStatusComponent } from './component/User/order-status/order-status.component';
import { OrderDetailsComponent } from './component/User/order-details/order-details.component';
import { LogoutComponent } from './component/Home/logout/logout.component';
import { AdminHomeComponent } from './component/Admin/admin-home/admin-home.component';
import { AdminNavBarComponent } from './component/Admin/admin-nav-bar/admin-nav-bar.component';
import { AdminOrderStatusComponent } from './component/Admin/admin-order-status/admin-order-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    UserHomeComponent,
    UserNavBarComponent,
    PickupAddressComponent,
    DestinationAddressComponent,
    PackageInfoComponent,
    OrderStatusComponent,
    OrderDetailsComponent,
    LogoutComponent,
    AdminHomeComponent,
    AdminNavBarComponent,
    AdminOrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
