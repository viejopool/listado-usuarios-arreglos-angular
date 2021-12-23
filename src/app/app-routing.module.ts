import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@shared/dashboard/dashboard.component';
//import { DashboardComponent } from './shared/dashboard/dashboard.component';


const routes: Routes = [{path:'',component:DashboardComponent,loadChildren:()=>import('./shared/shared.module').then(m=>m.SharedModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
