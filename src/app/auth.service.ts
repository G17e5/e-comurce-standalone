import { UpdatePassword } from './update-password';
import { Updateinfo } from './updateinfo';
import { ResetPass } from './reset-pass';
import { validationCode } from './rest';
import { Email } from './email';
import { UserLogin } from './user-login';
import { UserData } from './user-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem("userToken")!==null)
    {
      this.decodeUserData();
    }

  }
  MyFirstChar:BehaviorSubject<any> = new BehaviorSubject("A");
  baseUrl:string="https://ecommerce.routemisr.com";
  userData = new BehaviorSubject(null);



  logOut()
  {
    localStorage.removeItem("userToken");
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }

  decodeUserData()
  {
    let encodeData =JSON.stringify(localStorage.getItem("userToken")) ;
    let decodeData:any = jwtDecode(encodeData);
    this.userData.next(decodeData);
  }

  register(userData:UserData):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup` , userData )
  }

  login(UserLogin:UserLogin):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin` , UserLogin )
  }

  forgetPassword(email:Email):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords` , email)
  }

  sendCode(code:validationCode):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode` , code)
  }

  resetPassword(reset:ResetPass):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}/api/v1/auth/resetPassword` , reset)
  }


  getUserData(id:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/users/${id}`)
  }

  header:any={token:localStorage.getItem("userToken")}

  UpdateUserInfo(data:Updateinfo ):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}/api/v1/users/updateMe`,data ,
    { headers: this.header }
    )
  }

  UpdateUserPassword(data:UpdatePassword ):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}/api/v1/users/changeMyPassword`,data ,
    { headers: this.header }
    )
  }


  getAllUserOrders(uId:string):Observable<any>
  {
  return this._HttpClient.get(`${this.baseUrl}/api/v1/orders/user/${uId}`);
  }




}

