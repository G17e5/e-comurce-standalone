import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-portflio',
  templateUrl: './portflio.component.html',
  styleUrls: ['./portflio.component.scss']
})
export class PortflioComponent {
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
        this.myId=res.data._id;
        this.isloadingPage=false;


      },
      error:(err)=>{
        // console.log(err);
        this.isloadingPage=false;

      }
    })
  }


}
