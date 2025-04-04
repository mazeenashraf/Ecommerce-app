import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';
import { Icart } from '../../shared/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe  , RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  cartDetails:Icart={} as Icart;


  ngOnInit(): void {
    this.getCartData()
      }


   private readonly cartService=inject(CartService)
   getCartData():void{
    this.cartService.getLoggedUser().subscribe({
      next:(res)=>{

        this.cartDetails=res.data


      },
      error:(err)=>{
        console.log(err);

      }
    })
   }

   removeItem(id:string):void{
    this.cartService.RemovespecificcartItem(id).subscribe( {
      next:(res)=>{
        //data after deleted --> log(res)
        this.cartDetails=res.data
        console.log(this.cartDetails);
        this.cartService.cartNumber.set(res.numOfCartItems)

      },
      error:(err)=>{
        console.log(err);

      }
    } )
   }

   updateItem( id:string , count:number ):void{
    this.cartService.Updatecartproductquantity(id , count).subscribe( {
      next:(res)=>{

        this.cartDetails=res.data

      },
      error:(err)=>{
        console.log(err);

      }
    } )
   }
   clearCart():void{
    this.cartService.clearCart().subscribe( {
      next:(res)=>{
        console.log(res);
        if(res.message ==='success'){
          this.cartDetails={} as Icart
          this.cartService.cartNumber.set(0)

        }

      },
      error:(err)=>{
        console.log(err);


      }
    } )
   }


}
