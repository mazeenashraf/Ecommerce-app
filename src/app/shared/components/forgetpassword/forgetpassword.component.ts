import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  private readonly authsrtvice=inject(AuthService)
  readonly router=inject(Router)

step:number=1

verifyEmail:FormGroup=new FormGroup({
  email: new FormControl(null , [Validators.required , Validators.email]),

})
verifyCode:FormGroup=new FormGroup( {
  resetCode:new FormControl( null ,[Validators.required , Validators.pattern(/^ \w{6} $/) ] )
} )

resetPassword:FormGroup=new FormGroup( {
  email: new FormControl( null , [Validators.required , Validators.email ] ),
  newPassword:new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z]\w{7,}$/) ]),

} )
verifyEmailSubmit():void{
  this.authsrtvice.setEmailVerify(this.verifyEmail.value).subscribe( {
    next:(res)=>{
      console.log(res);
      if(res.statusMsg==='success'){
        this.step+=1;
      }

    },
    error:(err)=>{
      console.log(err);

    }
  } )
}
verifyCodeSubmit():void{
  this.authsrtvice.setCodVerify(this.verifyCode.value).subscribe( {
    next:(res)=>{
      console.log(res);
      if(res.status==='Success'){
        this.step=3;
      }

    },
    error:(err)=>{
      console.log(err);

    }
  } )
}
resetPasswordSubmit():void{
  this.authsrtvice.setResetPassword(this.resetPassword.value).subscribe( {
    next:(res)=>{
      console.log(res);
      localStorage.setItem('usertoken' , res.token )
      this.authsrtvice.savedatauser()
      this.router.navigate(['/home'])

    },
    error:(err)=>{
      console.log(err);

    }
  } )
}
}
