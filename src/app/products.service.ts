import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string="https://ecommerce.routemisr.com";

  constructor(private _HttpClient:HttpClient) { }

  getHomeProducts():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products`);
  }

  getSpecificProducts(id:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products/${id}`);
  }

  getCategores():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories`);
  }

  getAllBrands():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/brands`);
  }

  getSpecificBrands(bId:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/brands/${bId}`);
  }

  getAllSubCategoreis(bId:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories/${bId}/subcategories`);
  }

}



