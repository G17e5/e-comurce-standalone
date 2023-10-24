import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  errorMassage!:string;
  isLoding:boolean=false;
  constructor(private _AuthService:AuthService , private _Router:Router ){}

  resetForm:FormGroup = new FormGroup({
    resetCode:new FormControl(null ,[Validators.required ]),
  })

  handelReset(rForm:FormGroup)
  {
    this.isLoding=true;
    this._AuthService.sendCode(rForm.value).subscribe({
      next:(res)=>{

        console.log(res);
        this.isLoding=false;
        this._Router.navigate(['/resetPassword'])

      }
      ,
      error:(err)=>{
        this.isLoding=false;
        this.errorMassage = err.error.message;
      }

})
  }


}
