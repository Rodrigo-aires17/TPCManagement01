import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'form01',
    loadChildren: () => import('./form01/form01.module').then( m => m.Form01PageModule)
  },
  {
    path: 'form02',
    loadChildren: () => import('./form02/form02.module').then( m => m.Form02PageModule)
  },
  
  {
    path: 'form03',
    loadChildren: () => import('./form03/form03.module').then( m => m.Form03PageModule)
  },
  {
    path: 'form04',
    loadChildren: () => import('./form04/form04.module').then( m => m.Form04PageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
