import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../core/services/orders/orders.service';

@Component({
  selector: 'app-check',
  imports: [ReactiveFormsModule],
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss'
})
export class CheckComponent implements OnInit {
  private readonly formBuilder =inject(FormBuilder)
  private readonly activatedRoute =inject(ActivatedRoute)
  private readonly ordersService =inject(OrdersService)

  cartid:string=''

checkOutform!:FormGroup;
ngOnInit(): void {
    // this.checkOutform=new FormGroup({
    //   details:new FormControl(null , [Validators.required]),
    //   phone: new FormControl(null,[Validators.required , Validators.pattern( /^01[0125][0-9]{8}$/ )  ]),
    //   city:new FormControl(null, [Validators.required ])
    // })
this.initForm()
this.getIdCard()

}
initForm():void{
  this.checkOutform=  this.formBuilder.group({
    details:[null , [Validators.required] ],
    phone:[null, [Validators.required , Validators.pattern( /^01[0125][0-9]{8}$/ )  ]],
    city:[null ,  [Validators.required ]]
  })
}
getIdCard():void{
  this.activatedRoute.paramMap.subscribe( {
    next:(param)=>{
     this.cartid= param.get('id') !
    }
  } )
}
submitform():void{
  console.log(this.checkOutform.value);
  this.ordersService.checkOutPayment(this.cartid , this.checkOutform.value).subscribe({
    next:(res)=>{
      console.log(res);
      // open url
      if(res.status==='success'){
        open(res.session.url , '_self' )
      }

    },
    error:(err)=>{
      console.log(err);


    }
  })

}


}
