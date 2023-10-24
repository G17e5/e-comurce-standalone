import { CartService } from '../cart.service';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLogin:boolean=true;

  numberOfCart!:number;
  numberOfWishlistItem!:number;

  myFirstChar!:any;

  cartBeatEnter()
  {
    document.querySelector('.beat')?.classList.add('fa-bounce');
  }
  cartBeatLeave()
  {
    document.querySelector('.beat')?.classList.remove('fa-bounce');
  }

  constructor(private _AuthService:AuthService , private _CartService:CartService){}

  ngOnInit(): void {
    this._AuthService.userData.subscribe((val)=>{
      this.myFirstChar=val;
      console.log(this.myFirstChar.name);

    })



  this._AuthService.userData.subscribe(()=>{
    if(this._AuthService.userData.getValue() !== null)
    {
      this.isLogin=true;
    }
    else
    {
      this.isLogin=false;
    }
  })

  this._CartService.numberOfCartItem.subscribe({
    next:(val)=>{
      this.numberOfCart=val;

    }
  })



  this._CartService.numberOfWishlistItem.subscribe({
    next:(val)=>{
      this.numberOfWishlistItem=val;
    }
  })

}

logOut()
{
  this._AuthService.logOut();
}

}
