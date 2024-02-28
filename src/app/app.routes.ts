import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path:"search/:query",
    loadComponent:() => import ("./pages/search-result/search-result.component") 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
