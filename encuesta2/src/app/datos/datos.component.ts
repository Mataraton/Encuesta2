import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatosModel } from './datos.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  formValue !: FormGroup;
  datosModelObje : DatosModel = new DatosModel();
  datosData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formbuilber: FormBuilder,
  private auth : AuthService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      nombre :[''],
      apellido :[''],
      correo :[''],
      celular :['']
    })
    this.getAllDatos();
    
  }
  clickAddDatos(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postDatosDetail(){
    this.datosModelObje.nombre = this.formValue.value.nombre;
    this.datosModelObje.apellido = this.formValue.value.apellido;
    this.datosModelObje.correo = this.formValue.value.correo;
    this.datosModelObje.celular = this.formValue.value.celular;

    this.auth.PostDatos(this.datosModelObje)
    .subscribe(res=>{
      console.log(res);
      alert("Usuario agregado correctamente")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllDatos();
    },
    err=>{
      alert("Ocurrio un erro ! (O n O !");
    })
  }
  getAllDatos(){
    this.auth.GetDatos()
    .subscribe(res=>{
      this.datosData = res;
    })
  }
  deleteDatos(row : any){
    this.auth.DeleteDatos(row.id)
    .subscribe(res=>{
      alert("Usuario eliminado");
      this.getAllDatos();
    },
    err => {
      console.error("Error al eliminar usuario:", err);
      alert("Ocurrió un error al eliminar el usuario");
    })
  };
  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.datosModelObje.id=row.id;
    this.formValue.controls['nombre'].setValue(row.nombre);
    this.formValue.controls['apellido'].setValue(row.apellido);
    this.formValue.controls['correo'].setValue(row.correo);
    this.formValue.controls['celular'].setValue(row.celular);
  }
  updateDatosDetail(){
    this.datosModelObje.nombre = this.formValue.value.nombre;
    this.datosModelObje.apellido = this.formValue.value.apellido;
    this.datosModelObje.correo = this.formValue.value.correo;
    this.datosModelObje.celular = this.formValue.value.celular;

    this.auth.UpdateDatos(this.datosModelObje,this.datosModelObje.id)
    .subscribe(res=>{
      alert("Actualizacion correcta");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllDatos();
    })
  }
}
