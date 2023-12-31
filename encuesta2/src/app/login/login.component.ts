import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router: Router) { }

   ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    // Lógica para manejar la subida del formulario
  }
  login(){
    this.http.get<any>("http://localhost:3000/Usuarios")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert(" Acceso exitoso !*u*!");
        this.loginForm.reset();
        this.router.navigate(['datos'])
      }else{
        alert('usuario no encontrario');
      }
    },err=>{
      alert("Algo salio mal||")
    }
      )
      this.router.navigate(['/principal/inicio']);
  }
  


}
