import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private httpClient :HttpClient ) { }
  myToken:any=localStorage.getItem('usertoken')
  checkOutPayment(id:string , data:object):Observable<any>{
    return this.httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200` ,
      {
        "shippingAddress":data
    } ,
    {
      headers:{
        token:this.myToken
      }
    }
     )
  }
getUserOrder(id:string):Observable<any>{
  return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)

}





  allOrdersItems():Observable<any>{
    return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/67a55d34fa7895e81f05064c`)
  }
}
