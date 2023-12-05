import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: [''],
      celular: [''],
      correo: [''],
      password: ['']
    });
  }

  register() {
    const formData = this.registerForm.value;
    this.http.post<any>("http://localhost:3000/Usuarios",this.registerForm.value)
    .subscribe(res=>{
      alert("Registro satisfactorio");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Algo ha salido mal")
    }
      )
  }
}
