import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', loadChildren: () => import('./Module/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'Contact', loadChildren: () => import('./Module/contact/contact.module').then(m => m.ContactModule) },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
