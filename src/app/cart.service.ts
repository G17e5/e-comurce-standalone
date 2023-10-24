import { Orders } from './orders';
import { ProductId } from './product-id';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:string="https://ecommerce.routemisr.com";
  numberOfCartItem:BehaviorSubject<any> = new BehaviorSubject(0);
  numberOfWishlistItem:BehaviorSubject<any>=new BehaviorSubject(0);
  constructor(private _HttpClient:HttpClient) {
    this.getLogedUserCart().subscribe({
      next:(res)=>{
        this.numberOfCartItem.next(res.numOfCartItems);
      },
      error:(err)=>{
        console.log(err);

      }
    })

    this.getLogedUserWhishList().subscribe({
      next:(res)=>{
        this.numberOfWishlistItem.next(res.count)

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }


  header:any={token:localStorage.getItem("userToken")}

  addToCart(pId:string):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`, {productId:pId},
      { headers: this.header }
    );
  }

  getLogedUserCart():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`,
      { headers: this.header }
    );
  }

  removeCartItem(pId:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${pId}`,
      { headers: this.header }
    );
  }

  clearAllCartItem():Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart`,
      { headers: this.header }
    );
  }

  updateCartItem(pId:string , pCount:number):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${pId}`,
    {count:pCount},
      { headers: this.header }
    );
  }

  onlinePayment(order:Orders , cartId:string):Observable<any>
  {
  return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200` , {shippingAddress:order}
    ,
    { headers: this.header }
    )
  }



  addToWishlist(pId:string):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/wishlist`,
    {productId:pId},
      { headers: this.header }
    );
  }

  getLogedUserWhishList():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/wishlist`,
      { headers: this.header }
    );
  }

  removeWishListItem(pId:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/wishlist/${pId}`,
      { headers: this.header }
    );
  }


}

