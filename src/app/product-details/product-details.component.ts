import { ID } from './../whishlist';
import { productData } from './../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService , private _CartService:CartService , private _ToastrService:ToastrService){}
  id!:string;
  specificProducts!:productData;
  color:boolean=false;
  isloadingPage:boolean=false;
  isProductAdd:boolean=false;
  isInList:boolean=false;


  isInWishList!:any[];
  ngOnInit(): void {


  this.isloadingPage=true;
  this.id= this._ActivatedRoute.snapshot.params['id'];

  this._CartService.getLogedUserWhishList().subscribe({
    next:(res)=>{
      this.isInWishList=res.data;


      this.isInWishList.filter((p)=>{
        if(p.id.includes(this.id))
        {
          document.querySelector(".hart")?.classList.add("color-red");
        }
      });
    },
    error:(err)=>{
      console.log(err);
    }
  })


  this._ProductsService.getSpecificProducts(this.id).subscribe({
    next:(res)=>{
      this.specificProducts=res.data;
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
        console.log(res);
        this._CartService.numberOfCartItem.next(res.numOfCartItems)
        this.isProductAdd=false;

        this.showSuccess()
      },
      error:(err)=>{
        console.log(err);
        this.isProductAdd=false;


      }
    })
  }

  addTowishList(pId:string)
  {
    this.isloadingPage=true;

    this._CartService.addToWishlist(pId).subscribe({
      next:(res)=>{
        this._CartService.numberOfWishlistItem.next(this._CartService.numberOfWishlistItem.getValue()+1)
        this.isloadingPage=false;

        this.color=true;
        this.showFavList()

      },
      error:(err)=>{
        console.log(err);
        this.isloadingPage=false;


      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  showSuccess() {
    this._ToastrService.success('It has been successfully added.', '' , {
      timeOut: 3000,
      positionClass:'toast-top-center'
    });
  }
  showFavList() {
    this._ToastrService.success('It has been successfully added to WishList.', '' , {
      timeOut: 3000,
      positionClass:'toast-top-center'
    });
  }
}
