import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headrsInterceptor } from './core/intercepteors/headrs/headrs.interceptor';
import { errorsInterceptor } from './core/intercepteors/headrs/errors/errors.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from './core/intercepteors/loading/loading.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './core/utilies/httploadfiles';




export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient(withFetch() , withInterceptors([headrsInterceptor , errorsInterceptor ,loadingInterceptor ]) ),provideAnimations(),
    provideToastr(),
    importProvidersFrom( NgxSpinnerModule , TranslateModule.forRoot({
      defaultLanguage:"en",
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }) )
    ]
};
