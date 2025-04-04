import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../../shared/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProudctsService {

  constructor( private httpClient:HttpClient ) { }
getallproudcts():Observable<any>{


  return this.httpClient.get( enviroment.baseUrl + '/api/v1/products')

}
  getspecificproudcts(id:string|null):Observable<any>{


    return this.httpClient.get(enviroment.baseUrl +  `/api/v1/products/${id}`)

  }
}
