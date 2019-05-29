import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ListOfCenterComponent } from './list-of-center/list-of-center.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'footer', component: FooterComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listOfCenter', component: ListOfCenterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
