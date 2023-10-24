import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  constructor(private _CartService:CartService , private _ActivatedRoute:ActivatedRoute){}
  cId!:string;
  ngOnInit(): void {
  this.cId= this._ActivatedRoute.snapshot.params['cId'];



  }
  shippingAddress:FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })

  handelSubmit(shippingForm:FormGroup)
  {
    this._CartService.onlinePayment(shippingForm.value , this.cId).subscribe({
      next:(res)=>{
        console.log(res.session.url);
        window.location.href = res.session.url;
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
}
