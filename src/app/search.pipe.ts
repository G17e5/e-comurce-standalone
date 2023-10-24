import { Pipe, PipeTransform } from '@angular/core';
import { productData } from './products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:productData[] , searchTearm:string): productData[] {
    return products.filter((product)=>product.title.toLowerCase().includes(searchTearm.toLowerCase()));
  }

}
