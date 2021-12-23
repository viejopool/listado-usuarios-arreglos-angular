import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObtenerimagenesService } from '@core/servicios/obtenerimagenes.service';


@Component({
  selector: 'app-resgistro-usuario',
  templateUrl: './resgistro-usuario.component.html',
  styleUrls: ['./resgistro-usuario.component.css']
})
export class ResgistroUsuarioComponent implements OnInit {
  registro:FormGroup;
  visible:boolean=false

  constructor(private fb:FormBuilder,private _imgSer:ObtenerimagenesService) { 
    this.registro= new FormGroup({})
  }

  ngOnInit(): void {
    this.registro=this.fb.group({
      nombres:['',Validators.required],
      apellidos:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.pattern("^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$")]],
      imagen:'https://images.generated.photos/W40R89FyLOHGEumubgI-weWrXGjQvHpFF5mUPKQ_510/rs:fit:128:128/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjQ1OTUwLmpwZw.jpg',
      telefonos:this.fb.array([
        this.fb.control(null,Validators.required)
      ])
    })
  }
  get telefonos(): FormArray {
    return <FormArray> this.registro.get('telefonos')
  }
  crearInputsTelefono(){
    return this.fb.control(null)
  }
  addNumerosTelefonicos(){
    this.telefonos.push(this.crearInputsTelefono())
    this.visible=true
  }
  eliminarTelefenos(index:number){
    this.telefonos.removeAt(index)
  }
  eliminarAllTelefenos(){
    
    for (let index = 0; index < this.telefonos.length; index++) {
       this.telefonos.removeAt(index);
      
    }
  }
  submitForm(){
    this._imgSer.addUsuario(this.registro.value)
    this.resetForm()
    this.eliminarAllTelefenos()
  }
  resetForm(){
    this.registro.reset()
  }
}