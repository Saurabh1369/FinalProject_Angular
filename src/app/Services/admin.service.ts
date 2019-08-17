import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SourceAddress } from './../model/source_address';
import { Users } from '../model/user';
import { Weight } from './../model/weight';
import { DeliveryType } from '../model/Delivery_Type';


const httpheader = 
{
  headers:new HttpHeaders({'Content-Type':"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  hosturl = "https://rest-java-cms.herokuapp.com";

  getAllOrders( ) : Observable <SourceAddress[]>
  {
    const url = `${this.hosturl}/getAllOrders`;
    return this.http.get < SourceAddress[] > (url,httpheader);
  }

  getOrderById(id) : Observable <SourceAddress>
  {
    const url = `${this.hosturl}/getOrderByID/${id}`;
    return this.http.get < SourceAddress > (url,httpheader);
  }

  onDelete( order_id ) : Observable <String>
  {
    const url = `${this.hosturl}/deleteOrderById/${ order_id }`;
    return this.http.delete < String > (url , {
      responseType:  'text' as 'json'
        }); 
  }

  GetAllUsers( ) :Observable < Users[] >
  {
    const url = `${this.hosturl}/getAllUsers`;
    return this.http.get < Users[] > (url , httpheader);
  }

  onDeleteUser( user_id )
  {
    const url = `${this.hosturl}/deleteUserById/${ user_id }`;
    return this.http.delete < String > (url , {responseType : 'text' as 'json'});
  }

  getAllWeights()
  {
    const url = `${this.hosturl}/getAllWeights`;
    return this.http.get <Weight[]> (url , httpheader);
  }

  getAlldtype()
  {
    const url = `${this.hosturl}/getAlldtype`;
    return this.http.get <DeliveryType[]> (url , httpheader);
  }

  updateWeight(data)
  {
    const url = `${this.hosturl}/updateWeight`;
    return this.http.put <string> (url , data, {responseType : 'text' as 'json'});
  }

  updateDtype(data)
  {
    const url = `${this.hosturl}/updateDtype`;
    return this.http.put <string> (url , data, {responseType : 'text' as 'json'});
  }

  signupService(user :any) : Observable<Users>
  {
    const url = `${this.hosturl}/users/signup`;
    return this.http.post <Users> ( url ,user, httpheader);
  }
}
