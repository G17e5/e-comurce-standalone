import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorMassage!:string;
  isLoding:boolean=false;
  constructor(private _AuthService:AuthService , private _Router:Router){}

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null ,[Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),

  })

  handelLogin(rForm:FormGroup)
  {
    this.isLoding=true;
    this._AuthService.login(rForm.value).subscribe({
      next:(res)=>{

        localStorage.setItem("userToken" , res.token )
        this.isLoding=false;
        this._Router.navigate(['/home'])
        this._AuthService.decodeUserData()

      }
      ,
      error:(err)=>{
        this.isLoding=false;
        this.errorMassage = err.error.message;
      }

})
  }

}
