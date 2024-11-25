import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { publicDecrypt } from 'crypto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
    public producturl: string = 'https://mishka1108.github.io/json/Product.json'
  
    constructor(public product:HttpClient) { }

    getProduct():Observable<any[]>{
      return this.product.get<any[]>(this.producturl)
    }


}

