import { Component,  computed,  inject,  Input, OnInit, Signal } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { TranslatePipe } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate/mytranslate.service';
import { CartService } from '../../core/services/cart/cart.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  countCart:Signal<number> =computed(()=> this.cartService.cartNumber() )
  @Input() islogin:boolean=true;
  authservice=inject(AuthService)
private  mytranslateService=inject(MytranslateService)
private cartService =inject(CartService)
  logout(){
    this.authservice.logOutUser()
  }
  change(lang:string):void{
    this.mytranslateService.changeLangTranslate(lang)

  }
ngOnInit(): void {
  // this.cartService.cartNumber.subscribe({
  //   next:(data)=>{
  //     this.countCart=data

  //   }
  // })

  this.cartService.getLoggedUser().subscribe( {
    next:(res)=>{
      this.cartService.cartNumber.set(res.numOfCartItems)
    }
  } )
}

}
