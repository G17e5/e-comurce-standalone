import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorMassage!:string;
  isLoding:boolean=false;
  constructor(private _AuthService:AuthService , private _Router:Router){}

  registerForm:FormGroup = new FormGroup({
    name:new FormControl(null , [Validators.required]),
    email:new FormControl(null ,[Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    rePassword:new FormControl(null ,[ Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    phone:new FormControl(null ,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}/)]) ,
  })

  handelSubmit(rForm:FormGroup)
  {
    this.isLoding=true;
    this._AuthService.register(rForm.value).subscribe({
      next:(res)=>{
        this.isLoding=false;
        this._Router.navigate(['/login'])

      }
      ,
      error:(err)=>{
        this.isLoding=false;
        this.errorMassage = err.error.message;
      }

})
  }
}
