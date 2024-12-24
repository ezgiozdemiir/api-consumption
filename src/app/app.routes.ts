import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiProductListComponent } from './pages/api-product-list/api-product-list.component';
import { LocalProductListComponent } from './pages/local-product-list/local-product-list.component';
import { ResponsiveImagesComponent } from './pages/responsive-images/responsive-images.component';

export const routes: Routes = [
  { path: 'api-product-list', component: ApiProductListComponent },
  { path: 'local-product-list', component: LocalProductListComponent },
  { path: 'responsive-image', component: ResponsiveImagesComponent },
  { path: '', redirectTo: '/api-product-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/api-product-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


