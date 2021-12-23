import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { ResgistroUsuarioComponent } from './resgistro-usuario/resgistro-usuario.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    ResgistroUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzGridModule
  ]
})
export class FormularioModule { }
