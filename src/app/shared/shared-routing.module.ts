import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'ingreso',loadChildren:()=>import('@modules/formulario/formulario.module').then(m=>m.FormularioModule)},
 {path:'listado',loadChildren:()=>import('@modules/lista/lista.module').then(m=>m.ListaModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
