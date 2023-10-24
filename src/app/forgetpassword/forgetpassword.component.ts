import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {

  errorMassage!:string;
  isLoding:boolean=false;
  constructor(private _AuthService:AuthService , private _Router:Router , private _ToastrService:ToastrService){}

  forgetForm:FormGroup = new FormGroup({
    email:new FormControl(null ,[Validators.required , Validators.email]),

  })

  handelForget(rForm:FormGroup)
  {
    this.isLoding=true;

    this._AuthService.forgetPassword(rForm.value).subscribe({
      next:(res)=>{

        // localStorage.setItem("userToken" , res.token )
        this.showSuccess();
        this._Router.navigate(['/sendValidation'])
        this.isLoding=false;
        // this._Router.navigate(['/home'])
        // this._AuthService.decodeUserData()

      }
      ,
      error:(err)=>{
        this.isLoding=false;
        this.errorMassage = err.error.message;
      }

})
  }

  showSuccess() {
    this._ToastrService.success('Code Sent To Your Email.', '' , {
      timeOut: 3000,
      positionClass:'toast-top-center'
    });
  }
}
