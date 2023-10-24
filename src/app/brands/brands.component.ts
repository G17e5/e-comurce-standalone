import { Brands } from './../brands';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  isloadingPage:boolean=false;

  constructor(private _ProductsService:ProductsService){}
  allBrands!:Brands;
  bId!:string;
  ngOnInit(): void {
    this.isloadingPage=true;


    this._ProductsService.getAllBrands().subscribe({
      next:(res)=>{
        this.allBrands=res;
        this.isloadingPage=false;

      },
      error:(err)=>{
        console.log(err);
        this.isloadingPage=false;


      }
    })

  }


}
