import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { AuthService } from '../../core/services/auth/auth.service';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-blank-layout',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent  {
  _authservice=inject(AuthService)
  cartService=inject(CartService)




}
