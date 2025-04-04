import { Component, computed, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { iusercategories } from '../../shared/interfaces/iusercategories';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
 userCategorieslist:iusercategories[]=[]

  categoriesService=inject(CategoriesService)
  ngOnInit(): void {
      this.allcategories()
  }
  allcategories():void{
    this.categoriesService.getallcategroies().subscribe( {
      next:(res)=>{
        this.userCategorieslist=res.data;
        console.log(this.userCategorieslist);

      },
      error:(err)=>{
        console.log(err);

      }
    } )
  }

}
