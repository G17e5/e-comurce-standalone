import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent {

  myId!:any;
  myData!:any;
  isloadingPage:boolean=false;

  constructor(private _AuthService:AuthService){}
  ngOnInit(): void {

    this.myId = this._AuthService.userData.getValue();
    this.isloadingPage=true;




    this._AuthService.getUserData(this.myId.id).subscribe({
      next:(res)=>{
        this.myData=res.data
        // console.log(this.myData);
        this.isloadingPage=false;


      },
      error:(err)=>{
        // console.log(err);
        this.isloadingPage=false;

      }
    })
  }

}
