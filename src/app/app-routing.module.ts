import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShowmoviesComponent } from './components/showmovies/showmovies.component';

const routes: Routes = [
  { path: "", component: ShowmoviesComponent},
  { path: "checkout", component: CheckoutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
