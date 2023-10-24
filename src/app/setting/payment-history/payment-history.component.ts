import { Allorders } from './../../allorders';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _AuthService:AuthService){}
  userId!:string;
  allOrders!:any;
  message:boolean=true;
  ngOnInit(): void {
  this.userId=this._ActivatedRoute.snapshot.params['uId'];

  this._AuthService.getAllUserOrders(this.userId).subscribe({
    next:(res)=>{
      this.allOrders=res;
      console.log(this.allOrders[0].cartItems[0].count);
      this.message=false;

    },
    error:(err)=>{
      console.log(err);
    }
  })
  }

}
