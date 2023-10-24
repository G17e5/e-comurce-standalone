import { whishList } from './../whishlist';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit{
  constructor(private _CartService:CartService , private _ToastrService:ToastrService){}
  allWishListProduct!:whishList;
  isloadingPage:boolean=false;
  isProductAdd:boolean=false;
  ngOnInit(): void {
    this.isloadingPage=true;


    this._CartService.getLogedUserWhishList().subscribe({
      next:(res)=>{
        console.log(res);
        this.allWishListProduct=res;
        this.isloadingPage=false;



      },
      error:(err)=>{
        console.log(err);
        this.isloadingPage=false;


      }
    })

  }

  addToCart(pId:string)
  {
    this.isloadingPage=true;

    this._CartService.addToCart(pId).subscribe({
      next:(res)=>{
        console.log(res);
        this._CartService.numberOfCartItem.next(res.numOfCartItems)
        this.isloadingPage=false;


        this.showSuccess()
      },
      error:(err)=>{
        console.log(err);
        this.isloadingPage=false;


      }
    })
  }

  revomeItem(pId:string)
  {
    this._CartService.removeWishListItem(pId).subscribe({
      next:(res)=>{
        this._CartService.numberOfWishlistItem.next(this._CartService.numberOfWishlistItem.getValue()-1)
        this.getRestItem();
        this.showInfo()

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }

  getRestItem()
  {
    this.isloadingPage=true;

    this._CartService.getLogedUserWhishList().subscribe({
      next:(res)=>{
        console.log(res);
        this.allWishListProduct=res;
        this.isloadingPage=false;

      },
      error:(err)=>{
        // console.log(err);
        this.isloadingPage=false;


      }
    })
  }

  showSuccess() {
    this._ToastrService.success('It has been successfully added.', '' , {
      timeOut: 3000,
      positionClass:'toast-top-center'
    });
  }

  showInfo() {
    this._ToastrService.info('Product Removed successfully ', '' , {
      timeOut: 3000,
      positionClass:'toast-top-center'
    });
  }
}
