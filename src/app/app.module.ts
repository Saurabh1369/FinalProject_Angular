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
import { AdminOrderStatusComponent } from './component/Admin/OrderManagement/admin-order-status/admin-order-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminOrderDetailsComponent } from './component/Admin/OrderManagement/admin-order-details/admin-order-details.component';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { UsersComponent } from './component/Admin/UserManagement/users/users.component';
import { WeightComponent } from './component/Admin/PriceManagement/weight/weight.component';
import { DeliveryTypeComponent } from './component/Admin/PriceManagement/delivery-type/delivery-type.component';
import { PriceComponent } from './component/Admin/PriceManagement/price/price.component';
import {MatDialogModule} from '@angular/material/dialog';
import { WeightDailogComponent } from './component/Admin/PriceManagement/weight-dailog/weight-dailog.component';
import { MatFormFieldModule,MatInputModule, MatSelectModule } from '@angular/material';
import { DeliveryTypeDialogComponent } from './component/Admin/PriceManagement/delivery-type-dialog/delivery-type-dialog.component';
import { DeliveryPersonRegisterComponent } from './component/Admin/delivery-person-register/delivery-person-register.component';
import { DeliveryHomeComponent } from './component/Delivery/delivery-home/delivery-home.component';
import { DeliveryNavBarComponent } from './component/Delivery/delivery-nav-bar/delivery-nav-bar.component';
import { DeliveryOrderManagementComponent } from './component/Delivery/delivery-order-management/delivery-order-management.component';
import { OrderManagementDialogComponent } from './component/Delivery/order-management-dialog/order-management-dialog.component';


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
    AdminOrderStatusComponent,
    AdminOrderDetailsComponent,
    UsersComponent,
    WeightComponent,
    DeliveryTypeComponent,
    PriceComponent,
    WeightDailogComponent,
    DeliveryTypeDialogComponent,
    DeliveryPersonRegisterComponent,
    DeliveryHomeComponent,
    DeliveryNavBarComponent,
    DeliveryOrderManagementComponent,
    OrderManagementDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WeightDailogComponent,DeliveryTypeDialogComponent,OrderManagementDialogComponent]
})
export class AppModule { }
