import { logedCartData } from './../loged-cart';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(private _CartService:CartService , private _ToastrService:ToastrService){}
  allCartProduct!:logedCartData;
  cartId!:string;
  massage!:string;
  isloadingPage:boolean=false;


  revomeItem(pId:string)
  {
    this._CartService.removeCartItem(pId).subscribe({
      next:(res)=>{
        this._CartService.numberOfCartItem.next(res.numOfCartItems)
        this.allCartProduct=res.data;
        this.showSuccess()



      },
      error:(err)=>{
        console.log(err);


      }
    })
  }

  clearCart()
  {
this._CartService.clearAllCartItem().subscribe({
      next:(res)=>{
      this._CartService.numberOfCartItem.next(0)
      this.allCartProduct=res;
      this.massage="Your cart is empty";

      this.isloadingPage=false;


      },
      error:(err)=>{
      // console.log(err);
      this.isloadingPage=false;


      }

})
  this.isloadingPage=true;

  }

  updateCount(pId:string , pCount:number )
  {
    if(pCount==0)
    {
      this.revomeItem(pId);
    }
    this._CartService.updateCartItem(pId ,pCount).subscribe({
      next:(res)=>{
        this.allCartProduct=res.data;
        // console.log(this.allCartProduct);
        this.isloadingPage=false;

      },
      error:(err)=>{
        // console.log(err);
        this.isloadingPage=false;

      }
    })
    this.isloadingPage=true;

  }

  ngOnInit(): void {
    this.isloadingPage=true;

    this._CartService.getLogedUserCart().subscribe({
      next:(res)=>{
        this.allCartProduct=res.data;
        this.cartId=res.data._id;

        // console.log(this.allCartProduct);
        this.isloadingPage=false;


      },
      error:(err)=>{
        console.log(err);
        this.isloadingPage=false;


      }
    })


  }



  showSuccess() {
    this._ToastrService.info('Product Removed successfully ', '' , {
      timeOut: 3000,
      positionClass:'toast-top-center'
    });
  }
}
