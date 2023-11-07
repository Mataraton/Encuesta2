import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ZurdoComponent } from './zurdo/zurdo.component';
import { PechoComponent } from './pecho/pecho.component';
import { DerechoComponent } from './derecho/derecho.component';
import { FrenteComponent } from './frente/frente.component';
import { PieComponent } from './pie/pie.component';
import { MuroComponent } from './muro/muro.component';


@NgModule({
  declarations: [
    UserComponent,
    ZurdoComponent,
    PechoComponent,
    DerechoComponent,
    FrenteComponent,
    PieComponent,
    MuroComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
