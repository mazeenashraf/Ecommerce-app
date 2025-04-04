import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2,  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class MytranslateService {
  private id=inject(PLATFORM_ID)

  private readonly renderer2= inject(RendererFactory2).createRenderer(null,null)
  constructor(private translateService:TranslateService ,
      )
      {


    if(isPlatformBrowser(this.id)){


      //logic translate
    //1-set default langauage
    this.translateService.setDefaultLang('en')
    // 2- get lang from locastorage
 let savedlang=   localStorage.getItem('lang')
 //3- used lang local
 if(savedlang)  {
  this.translateService.use(savedlang)

    }
    this.changeDirection()
 }


  }
  changeDirection():void{
    if(localStorage.getItem('lang' ) ==='en' ){ //dir ltr
      this.renderer2.setAttribute(document.documentElement , 'dir' , 'ltr' )
      this.renderer2.setAttribute(document.documentElement , 'lang' , 'en' )
    }
    else if (localStorage.getItem('lang') === 'ar' ){ //dir rtl
      this.renderer2.setAttribute(document.documentElement , 'dir' , 'rtl' )
      this.renderer2.setAttribute(document.documentElement , 'lang' , 'ar' )
    }
  }
  changeLangTranslate(lang:string):void{
     //1-save local
     localStorage.setItem('lang',lang)
    //2-use lang
    this.translateService.use(lang)
    //3-change direction
    this.changeDirection()

  }
}
