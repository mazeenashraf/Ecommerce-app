import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { enviroment } from '../../../shared/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
myToken:any=localStorage.getItem('usertoken')
cartNumber:WritableSignal<number>=signal(0)
  constructor( private httpClient:HttpClient  ) { }
  //add proudct to cart
  addproudcttocart(id:String):Observable<any> {
    return this.httpClient.post(  enviroment.baseUrl + '/api/v1/cart',
      {
        "productId": id
    },
    {
      headers:{
        token:this.myToken
      }
    }

     )
  }
  getLoggedUser():Observable<any>{

return this.httpClient.get( enviroment.baseUrl +  '/api/v1/cart' , {
  headers:{
    token:this.myToken
  }
} )
  }



  RemovespecificcartItem(id:string):Observable<any>{
    return this.httpClient.delete( enviroment.baseUrl +  `/api/v1/cart/${id}`,
      {
        headers:{
          token:this.myToken
        }
      }
    )
  }


  Updatecartproductquantity(id:string , newCount:number ):Observable<any>{
    return this.httpClient.put( enviroment.baseUrl +  `/api/v1/cart/${id}`,

        {
          "count": `${newCount}`
      } ,
      {
        headers:{
          token:this.myToken
        }
      }

    )
  }

  clearCart():Observable<any>{
    return this.httpClient.delete( enviroment.baseUrl + '/api/v1/cart' , {
      headers:{
        token:this.myToken
      }
    }  )
  }

}
