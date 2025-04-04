import { HttpInterceptorFn } from '@angular/common/http';

export const headrsInterceptor: HttpInterceptorFn = (req, next) => {
  // update req
  if(localStorage.getItem("usertoken")!== null ){
    req = req.clone( {
      setHeaders:{
        token:localStorage.getItem("usertoken")!
      }
    } )




  }

  return next(req);
};
