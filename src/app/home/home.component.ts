import { productData } from './../products';
import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ProductId } from '../product-id';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private _ProductsService:ProductsService , private _CartService:CartService , private _ToastrService:ToastrService){}
  allProducts!:productData[];
  isloadingPage:boolean=false;
  isProductAdd:boolean=false;
  ngOnInit(): void {

    this._ProductsService.getHomeProducts().subscribe({
      next:(res)=>{
        this.allProducts=res.data;
        console.log(this.allProducts)
        this.isloadingPage=false;

      }
      ,
      error:(err)=>{
        console.log(err);
        this.isloadingPage=false;


      }
    })
    this.isloadingPage=true;

  }

  addToCart(pId:string)
  {
    this.isProductAdd=true;
    this._CartService.addToCart(pId).subscribe({
      next:(res)=>{
        this._CartService.numberOfCartItem.next(res.numOfCartItems)
        console.log(res);
        this.showSuccess();
        this.isProductAdd=false;

      }
      ,
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

