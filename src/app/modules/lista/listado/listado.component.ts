import { Component, OnInit } from '@angular/core';
import { ObtenerimagenesService } from '@core/servicios/obtenerimagenes.service';
import{ Usuario} from '@core/modelos/usuario'


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  usuarios:Usuario[];

  constructor(private _listUsuarios:ObtenerimagenesService) { 
    this.usuarios=[]
  }

  ngOnInit(): void {
    this.usuarios=this._listUsuarios.getUsuarios()
  }

}
