import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DatosComponent } from './datos/datos.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'datos', component: DatosComponent }, // Mueve esta ruta antes de la ruta loadChildren
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'principal', loadChildren: () => import('./modulos/user/user.module').then(m => m.UserModule)},
  { path: '**', redirectTo: '/login' } // Mueve esta ruta al final
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
