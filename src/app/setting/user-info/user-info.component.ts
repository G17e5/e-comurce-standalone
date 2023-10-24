import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  errorMassage!:string;
  isLoding:boolean=false;
  id!:string;
form: any;
  constructor(private _AuthService:AuthService , private _Router:Router , private _ActivatedRoute:ActivatedRoute , private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params['id'] ;
  }
  updateInfoForm:FormGroup = new FormGroup({
    name:new FormControl(null ,[Validators.required ]),
    email:new FormControl(null ,[Validators.required , Validators.email]),
    phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}/)]),

  })

  handelUpdateInfo(rForm:FormGroup)
  {
    this.isLoding=true;


    this._AuthService.UpdateUserInfo(rForm.value ).subscribe({
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
        this.errorMassage = err.error.errors.msg;
      }

})

  }


  showSuccess() {
    this._ToastrService.success('Info changed successfully. ', '' , {
      timeOut: 3000,
      positionClass:'toast-top-center'
    });
  }
}
