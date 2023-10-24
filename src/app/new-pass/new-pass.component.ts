import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.scss']
})
export class NewPassComponent {

  errorMassage!:string;
  isLoding:boolean=false;
  constructor(private _AuthService:AuthService , private _Router:Router){}

  newPassForm:FormGroup = new FormGroup({
    email:new FormControl(null ,[Validators.required , Validators.email]),
    newPassword:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),

  })

  handelNewPass(rForm:FormGroup)
  {
    this.isLoding=true;
    this._AuthService.resetPassword(rForm.value).subscribe({
      next:(res)=>{

        console.log(res);

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
