import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.scss']
})
export class MainsliderComponent {


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
        items: 1
      }
    },
    nav: true
  }
}
