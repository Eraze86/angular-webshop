import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShowmoviesComponent } from './components/showmovies/showmovies.component';

const routes: Routes = [
  { path: "", component: ShowmoviesComponent},
  { path: "checkout", component: CheckoutComponent},
  { path: "admin", component: AdminComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
