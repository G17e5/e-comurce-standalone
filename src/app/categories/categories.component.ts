import { categories } from './../categories';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _ProductsService:ProductsService){}
  allCategories!:categories;
  isloadingPage:boolean=false;


  ngOnInit(): void {
    this.isloadingPage=true;

    this._ProductsService.getCategores().subscribe({
      next:(res)=>{
        this.allCategories=res;
        // console.log(this.allCategories);
        this.isloadingPage=false;


      },
      error:(err)=>{
        // console.log(err);
        this.isloadingPage=false;


      }
    })

  }
}


