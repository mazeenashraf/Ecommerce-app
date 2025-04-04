import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';

export const lockedGuard: CanActivateFn = (route, state) => {

const id = inject(PLATFORM_ID)
  const _Router=inject(Router)
  if(isPlatformBrowser(id)){
    if(localStorage.getItem("usertoken") !==null ){
      _Router.navigate(['/home'])
      return false
    }
    else{
      return true
    }
  }
  else{
    return false
  }


};
