import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShowmoviesComponent } from './components/showmovies/showmovies.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {path: "checkout/:id", component: CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
