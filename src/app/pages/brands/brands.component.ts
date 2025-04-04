import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands/brands.service';
import { Ibrand } from '../../ibrand';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
  allbrands:Ibrand[]=[]
  private brandsService=inject(BrandsService)
  ngOnInit(): void {
      this.mybrands()
  }
mybrands():void{
  this.brandsService.getbrands().subscribe( {
    next:(res)=>{

    console.log( this.allbrands=res.data );


    },
    error:(err)=>{
      console.log(err);

    }
  }  )
}
}
