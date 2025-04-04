import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-deatils',
  imports: [],
  templateUrl: './categories-deatils.component.html',
  styleUrl: './categories-deatils.component.scss'
})
export class CategoriesDeatilsComponent  implements OnInit{
  catId:string =''
  catDeatils:any={}
   private readonly categoriesService=inject(CategoriesService)
   private readonly activatedRoute=inject(ActivatedRoute)
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( {
      next:(params)=>{
         this.catId= params.get('id')!
      }
    } )
    this.categoriesService.getspecificcategroies(this.catId).subscribe({
      next:(res)=>{
        this.catDeatils=res.data
        console.log(this.catDeatils);


      },
      error:(err)=>{
        console.log(err);

      }
    })
  }

}
