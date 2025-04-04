import { Component, inject, OnInit } from '@angular/core';
import { ProudctsService } from '../../core/services/proudcts/proudcts.service';
import { Iproudct } from '../../shared/interfaces/iproudct';

@Component({
  selector: 'app-proudcts',
  imports: [],
  templateUrl: './proudcts.component.html',
  styleUrl: './proudcts.component.scss'
})
export class ProudctsComponent  implements OnInit   {
  proudctsService = inject(ProudctsService)
  allproudcts:Iproudct[]=[]

  myallprouddcts():void{
    this.proudctsService.getallproudcts().subscribe( {
      next:(res)=>{
        console.log(res.data);
        this.allproudcts=res.data

      },
      error:(err)=>{
        console.log(err);

      }
    } )
  }
  ngOnInit(): void {
      this.myallprouddcts()
  }

}
