import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProudctsService } from '../../core/services/proudcts/proudcts.service';
import { Iproudct } from '../../shared/interfaces/iproudct';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Icategory } from '../../shared/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { CartService } from '../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslatePipe } from '@ngx-translate/core';



@Component({
  selector: 'app-home',
  imports: [CarouselModule ,RouterLink , UpperCasePipe,LowerCasePipe,SlicePipe,CurrencyPipe,TitleCasePipe,DatePipe,TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  date=new Date()

  customMainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl:true,
    autoplay:true,
    dots: false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['', ''],
   items:1,

    nav: false
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl:true,
    dots: true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['  <i class="fa-solid fa-house"></i>', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }


// categories:Icategory[]=[]
categories:WritableSignal<Icategory[]>=signal([])
  private readonly categoriesService=inject(CategoriesService)
  private readonly cartService=inject(CartService)
  private readonly toastrService =inject(ToastrService)

  getcategorydata():void{
    this.categoriesService.getallcategroies().subscribe( {
      next:(myres)=>{
        this.categories.set(myres.data)

      },
      error:(err)=>{
        console.log(err);


      }
    } )
  }




  // proudcts:Iproudct[]=[];
  proudcts:WritableSignal<Iproudct[]>=signal([])
  getproudctsdata():void{
    this.proudctsService.getallproudcts().subscribe( {
      next:(res)=>{
        this.proudcts.set(res.data)


      },
      error:(err)=>{
        console.log(err);

      }
    } )
  }
  private readonly proudctsService=inject(ProudctsService)
ngOnInit(): void {
this.getproudctsdata()
this.getcategorydata()
}
addCartItem(id:string){
this.cartService.addproudcttocart(id).subscribe( {
  next:(res)=>{
    console.log(res);
    this.toastrService.success('Product added successfully to your cart' , 'FreshCart')
    this.cartService.cartNumber.set(res.numOfCartItems)
    console.log(this.cartService.cartNumber());



  },
  error:(err)=>{
    console.log(err);

  }
} )
}
}

