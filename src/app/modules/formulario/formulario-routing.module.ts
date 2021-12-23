import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgistroUsuarioComponent } from './resgistro-usuario/resgistro-usuario.component';
// import { ResgistroUsuarioComponent } from './';

const routes: Routes = [
  {path:'',component:ResgistroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  FormularioRoutingModule { }
