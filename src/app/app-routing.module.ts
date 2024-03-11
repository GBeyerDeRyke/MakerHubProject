import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Page404Component} from "./page404/page404.component";
import {PostitComponent} from "./postit/postit.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'postit', component:PostitComponent},
  {path:'login', component:LoginComponent},
  {path:'404', component: Page404Component},
  {path:'**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
