import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {

  errorMassage!:string;
  isLoding:boolean=false;
  id!:string;
form: any;
  constructor(private _AuthService:AuthService , private _Router:Router , protected _ToastrService:ToastrService ){}


  updatePasswordForm:FormGroup = new FormGroup({
    currentPassword:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    rePassword:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),


  })

  handelUpdatePassword(rForm:FormGroup)
  {
    this.isLoding=true;


    this._AuthService.UpdateUserPassword(rForm.value ).subscribe({
      next:(res)=>{

        console.log(res);

        this.isLoding=false;
        this._Router.navigate(['/Setting/portflio'])
        this.showSuccess()

      }
      ,
      error:(err)=>{
        this.isLoding=false;
        console.log(err);
        this.errorMassage = err.error.message;
      }

})

  }


  showSuccess() {
    this._ToastrService.success('Password changed successfully. ', '' , {
      timeOut: 3000,
      positionClass:'toast-top-center'
    });
  }

}
