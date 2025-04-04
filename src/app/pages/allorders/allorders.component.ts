import { Component, inject, OnInit } from '@angular/core';
import { OrdersService } from '../../core/services/orders/orders.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { userOrders } from '../../shared/interfaces/userorders';

@Component({
  selector: 'app-allorders',
  imports: [],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit {
  private readonly ordersService = inject(OrdersService)
   private readonly authService=inject(AuthService)
   userId:string='';
   allOrdersList:userOrders[]=[]

  ngOnInit(): void {
    this.authService.savedatauser()
    this.userId=this.authService.userData.id
      this.ordersService.getUserOrder( this.userId    ).subscribe( {
        next:(res)=>{
          console.log(res);
          this.allOrdersList=res;

        },
        error:(err)=>{
          console.log(err);

        }
      } )
  }


}
