import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GetintouchComponent } from './getintouch/getintouch.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  // {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: GetintouchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
