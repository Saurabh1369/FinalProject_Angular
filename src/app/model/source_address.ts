import { DestinationAddress } from './destination_address';
import { Users } from './user';
import { packageInfo } from './packge-info';

export class SourceAddress
{
    order_id:Number;
    fname:string;
    lname:string;
    address:string;
    state:string;
    city:string;
    pincode:string;
    phone:Number;
    email:string;
    order_status:String;
    user_id:Number;

    d:DestinationAddress;
    u:Users;
    pkg:packageInfo;
}