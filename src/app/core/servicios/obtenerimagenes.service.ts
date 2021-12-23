import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '@core/modelos/usuario';
//import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ObtenerimagenesService {
  arrUsuarios: Usuario[];

  constructor(private http: HttpClient) {
    this.arrUsuarios = [
      {
        nombres: 'Juana',
        apellidos: 'Paz',
        email: 'demo@hotmail.com',
        imagen:
          'https://i0.wp.com/fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg?resize=300%2C303',
        telefonos: [4545645, 78879789, 778787878],
      },
      {
        nombres: 'Carla',
        apellidos: 'Chicaiza',
        email: 'carla@hotmail.com',
        imagen:
          'https://www.eventosfilm.com/wp-content/uploads/2018/01/foto-carnet-se%C3%B1orita-355x337.gif',
        telefonos: [4545645, 78879789, 778787878],
      },
      {
        nombres: 'Fernanda',
        apellidos: 'paspuel',
        email: 'fercho@hotmail.com',
        imagen:
          'https://images.generated.photos/W40R89FyLOHGEumubgI-weWrXGjQvHpFF5mUPKQ_510/rs:fit:128:128/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjQ1OTUwLmpwZw.jpg',
        telefonos: [4545645, 78879789, 778787878],
      },
    ];
  }

  addUsuario(user: Usuario) {
    this.arrUsuarios.push(user);
  }
  getUsuarios(): Usuario[] {
    return this.arrUsuarios;
  }
}
