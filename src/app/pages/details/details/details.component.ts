import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProudctsService } from '../../../core/services/proudcts/proudcts.service';
import { Iproudct } from '../../../shared/interfaces/iproudct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  detailsproudct:Iproudct | null  =null
  private readonly activatedRoute=inject(ActivatedRoute)

  private readonly proudctsService=inject(ProudctsService)

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( {
      next:(p)=>{

        let proudctId=p.get('id');
        this.proudctsService.getspecificproudcts( proudctId  ).subscribe({
          next:(res)=>{
            this.detailsproudct=(res.data);

          },
          error:(err)=>{
            console.log(err);

          }
        })

      }
    } )
  }

}
