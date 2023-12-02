import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TramiteComponent } from './pages/tramite/tramite.component';

const routes:Routes = [
  

  { path : 'dashboard', component: HomeComponent, children : [

    { path : 'tramite', component: TramiteComponent },

    { path : '', redirectTo : 'tramite', pathMatch : 'full' }

  ]},
  { path : '', component: LoginComponent },
  { path : '**', component : NopagefoundComponent }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
