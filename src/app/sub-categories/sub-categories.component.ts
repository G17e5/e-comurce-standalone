import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit{
  constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute){}
  subId!:string;
  subCategoryName!:string;
  allSubCategory!:any;
  isloadingPage:boolean=false;
  ngOnInit(): void {
    this.isloadingPage=true;
    this.subId=this._ActivatedRoute.snapshot.params['subId'];
    this.subCategoryName=this._ActivatedRoute.snapshot.params['name'];

    this._ProductsService.getAllSubCategoreis(this.subId).subscribe({
      next:(res)=>{
        this.allSubCategory=res.data;
        console.log(this.allSubCategory);
        this.isloadingPage=false;



      },
      error:(err)=>{
        console.log(err);
        this.isloadingPage=false;


      }
    })

  }
}
