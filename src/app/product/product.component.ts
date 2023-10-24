import { Component, OnInit } from '@angular/core';
import { productData } from '../products';
import { ProductsService } from '../products.service';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  implements OnInit{

  constructor(private _ProductsService:ProductsService , private _CartService:CartService , private _ToastrService:ToastrService){}
  Products!:productData[];
  searchTearm:string='';
  isloadingPage:boolean=false;
  isProductAdd:boolean=false;
  ngOnInit(): void {
    this.isloadingPage=true;

    this._ProductsService.getHomeProducts().subscribe({
      next:(res)=>{
        this.Products=res.data;
        console.log(this.Products)
        this.isloadingPage=false;

      }
      ,
      error:(err)=>{
        console.log(err);
        this.isloadingPage=false;


      }
    })

  }

  addToCart(pId:string)
  {
    this.isProductAdd=true;

    this._CartService.addToCart(pId).subscribe({
      next:(res)=>{
        this._CartService.numberOfCartItem.next(res.numOfCartItems)
        this.showSuccess()
        this.isProductAdd=false;

      },
      error:(err)=>{
        console.log(err);
        this.isProductAdd=false;


      }
    })
  }

  showSuccess() {
    this._ToastrService.success('It has been successfully added. 🎉', '' , {
      timeOut: 3000,
      positionClass:'toast-top-center'
    });
  }

}
