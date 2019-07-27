import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/Home/home/home.component';
import { LoginComponent } from './component/Home/login/login.component';
import { RegisterComponent } from './component/Home/register/register.component';
import { UserHomeComponent } from './component/User/user-home/user-home.component';
import { PickupAddressComponent } from './component/User/ShipOrder/pickup-address/pickup-address.component';
import { DestinationAddressComponent } from './component/User/ShipOrder/destination-address/destination-address.component';
import { PackageInfoComponent } from './component/User/ShipOrder/package-info/package-info.component';
import { OrderStatusComponent } from './component/User/order-status/order-status.component';
import { OrderDetailsComponent } from './component/User/order-details/order-details.component';
import { LogoutComponent } from './component/Home/logout/logout.component';
import { AdminHomeComponent } from './component/Admin/admin-home/admin-home.component';
import { AdminOrderStatusComponent } from './component/Admin/admin-order-status/admin-order-status.component';

const routes: Routes = [
  { path:"" , component : HomeComponent },
  { path:"login" , component : LoginComponent },
  { path:"register" , component : RegisterComponent },

  { path:"user/home" , component : UserHomeComponent },
  { path:"user/order/pickup" , component : PickupAddressComponent },
  { path:"user/order/destination" , component : DestinationAddressComponent },
  { path:"user/order/package" , component : PackageInfoComponent },
  { path:"user/status" , component : OrderStatusComponent },
  { path:'user/details/:id' , component : OrderDetailsComponent },
  { path:'user/logout' , component : LogoutComponent },

  { path:'admin/home' , component : AdminHomeComponent },
  { path:'admin/orders' , component : AdminOrderStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
