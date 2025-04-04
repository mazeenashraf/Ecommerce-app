
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './pages/cart/card.component';
import { ProudctsComponent } from './pages/proudcts/proudcts.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CheckComponent } from './pages/check/check.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { authGuard } from './core/guards/auth.guard';
import { lockedGuard } from './core/guards/locked.guard';
import { DetailsComponent } from './pages/details/details/details.component';
import { ForgetpasswordComponent } from './shared/components/forgetpassword/forgetpassword.component';
import { AllordersComponent } from './pages/allorders/allorders.component';
import { CategoriesDeatilsComponent } from './pages/categories-deatils/categories-deatils.component';


export const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"",component:AuthLayoutComponent, canActivate:[lockedGuard]  ,children:[
    {path:"login",component:LoginComponent,title:"login"},
    {path:"register",component:RegisterComponent,title:"register"},
    {path:"forget",component:ForgetpasswordComponent,title:"forgetpass"},

  ]},
  {path:"",component:BlankLayoutComponent, canActivate:[authGuard] ,children:[
    {path:"home",component:HomeComponent,title:"home" , },
    {path:"cart",component:CardComponent,title:"cart" ,  },
    {path:"proudcts",component:ProudctsComponent,title:"proudcts" , },
    {path:"brands",component:BrandsComponent,title:"brands" , },
    {path:"categories",component:CategoriesComponent,title:"categories" , },
    {path:"categorydeatils/:id",component:CategoriesDeatilsComponent,title:"categorydeatils" , },
    {path:"checkout/:id",component:CheckComponent,title:"checkout" ,  },
    {path:"allorders",component:AllordersComponent,title:"allorders" ,  },
    {path:"details/:id",component:DetailsComponent,title:"details" ,  },
    {path:"**",component:NotfoundComponent,title:"notfound" },

  ]},


];
