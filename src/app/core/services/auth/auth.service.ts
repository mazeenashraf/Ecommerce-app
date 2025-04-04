import { jwtDecode } from "jwt-decode";

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { enviroment } from "../../../shared/enviroment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData:any
router=inject(Router)


  constructor( private httpClient :HttpClient ) { }
  sendregisterform(data:object):Observable<any>{
     return this.httpClient.post( enviroment.baseUrl + `/api/v1/auth/signup`,data)

  }
  sendloginform(data:object):Observable<any>{
     return this.httpClient.post( enviroment.baseUrl + `/api/v1/auth/signin`,data)

  }

  savedatauser():void{
    if(localStorage.getItem("usertoken")!==null){
     this.userData= jwtDecode( localStorage.getItem("usertoken") ! )
     console.log( 'userdata' , this.userData);

     }
  }
 logOutUser():void{
  localStorage.removeItem('usertoken')
  this.userData=null;
  this.router.navigate(['/login'])

 }

  setEmailVerify(data:object):Observable<any>{
    return this.httpClient.post( 'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords' ,data   )
  }
  setCodVerify(data:object):Observable<any>{
    return this.httpClient.post( 'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode' ,data   )
  }
  setResetPassword(data:object):Observable<any>{
    return this.httpClient.put( 'https://ecommerce.routemisr.com/api/v1/auth/resetPassword' ,data   )
  }

}
