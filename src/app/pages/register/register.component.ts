import { Component, inject } from '@angular/core';
import {  AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isloading:boolean=false;
  errormessage:string='';
  isSuccess:string=''

  private readonly authservice=inject(AuthService)
  private readonly router=inject(Router)


registerform:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z]\w{7,}$/) ]),
  rePassword:new FormControl(null,[Validators.required,]),
  phone:new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),

}, {validators:[this.confirmpassword]})
submitform():void{
 if(this.registerform.valid){
  this.isloading=true
  this.authservice.sendregisterform(this.registerform.value).subscribe( {
    next:(res)=>{
      console.log(res );
      if(res.message==='success'){
        setTimeout(() => {
          this.router.navigate(['/login']);
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
 else{
  this.registerform.markAllAsTouched()
 }


}

confirmpassword(group:AbstractControl){
  const password=  group.get('password')?.value;
  const rePassword=group.get('rePassword')?.value;
  return password===rePassword ? null : {mismatch:true}

  // if(password===rePassword){
  //   return null;
  // }
  // else{
  //   return {mismatch:true}
  // }

}

}
