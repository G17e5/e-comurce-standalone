import { categoryData } from './../categories';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categore-slider',
  templateUrl: './categore-slider.component.html',
  styleUrls: ['./categore-slider.component.scss']
})
export class CategoreSliderComponent implements OnInit {
  constructor(private _ProductsService:ProductsService){}
  allCategories!:categoryData[];
  ngOnInit(): void {
    this._ProductsService.getCategores().subscribe({
      next:(res)=>{

        this.allCategories=res.data;
      }
      ,
      error:(err)=>{
        console.log(err);
      }
    })
  }


  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 5
      },
    },
    nav: true
  }
}
