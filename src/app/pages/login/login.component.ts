import { Component, inject } from '@angular/core';
import {  AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink , TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   isloading:boolean=false;
    errormessage:string='';
    isSuccess:string=''

    private readonly authservice=inject(AuthService)
    private readonly router=inject(Router)


  loginform:FormGroup=new FormGroup({

    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z]\w{7,}$/) ]),


  }, )
  submitform():void{
   if(this.loginform.valid){
    this.isloading=true
    this.authservice.sendloginform(this.loginform.value).subscribe( {
      next:(res)=>{
        console.log(res );
        if(res.message==='success'){
          localStorage.setItem("usertoken",res.token);
          this.authservice.savedatauser();
          console.log(localStorage);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 500);

          this.isSuccess=res.message;
        }
        this.isloading=false;

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this.errormessage= err.error.message
        this.isloading=false
      }
    } )
   }


  }




}
