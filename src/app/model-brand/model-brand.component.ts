import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-model-brand',
  templateUrl: './model-brand.component.html',
  styleUrls: ['./model-brand.component.scss']
})
export class ModelBrandComponent {
constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){}
bId!:string;
brandData!:any;
isloadingPage:boolean=false;

ngOnInit(): void {
  this.isloadingPage=true;
  this.bId= this._ActivatedRoute.snapshot.params['bId']
  console.log(this.bId);
  this._ProductsService.getSpecificBrands(this.bId).subscribe({
    next:(res)=>{
      // console.log(res);
      this.isloadingPage=false;

      this.brandData=res.data;

    },
    error:(err)=>{
      this.isloadingPage=false;
      // console.log(err);

    }
  })
}
}
