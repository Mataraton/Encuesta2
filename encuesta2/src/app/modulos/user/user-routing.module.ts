import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { PrincipalComponent } from './principal/principal.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';


const routes: Routes = [
  { path: '', component: UserComponent, children:[
  { path: 'inicio', component: PrincipalComponent},
  { path: 'encuesta', component: EncuestaComponent},
  { path: 'servicio', component: ServiciosComponent},
  { path: 'portafolio', component: PortafolioComponent},
  { path: 'contactanos', component: ContactanosComponent}
  ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
