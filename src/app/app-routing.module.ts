import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/components/home/home.component";
import { LoginComponent } from "src/app/components/user/login/login.component";
import { RegisterComponent } from "src/app/components/user/register/register.component";
import { RegisterUserComponent } from "src/app/components/user/register-user/register-user.component";
import { RegisterCompanyComponent } from "src/app/components/user/register-company/register-company.component";
import { ProfileComponent } from "src/app/components/user/profile/profile.component";
import { Page404Component } from "src/app/components/page404/page404.component";


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "register-user", component: RegisterUserComponent},
  {path: "register-company", component: RegisterCompanyComponent},
  {path: "profile", component: ProfileComponent},
  {path: "**", component: Page404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
