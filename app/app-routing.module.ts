import { ProjectsComponent } from './component/projects/projects.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './component/login/login.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'about-us', component: AboutUsComponent},
  {path : 'contact-us', component: ContactUsComponent},
  {path : 'login', component: LoginComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'projects', component: ProjectsComponent},
  {path : '**', component: ErrorComponent},
  {path : 'about-us/profile' , component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
