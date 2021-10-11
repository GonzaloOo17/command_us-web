import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SensoresComponent } from '../../pages/sensores/sensores.component';
import { SensoresByIdComponent } from 'src/app/pages/sensores-by-id/sensores-by-id.component';
import { ListaSensoresComponent } from '../../pages/lista-sensores/lista-sensores.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
    
  ],
  declarations: [
    DashboardComponent,
    SensoresComponent,
    SensoresByIdComponent,
    ListaSensoresComponent
    // UserComponent,
    // TableComponent,
    // UpgradeComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
  ],
  exports:[
    FormsModule
  ]
})

export class AdminLayoutModule {}
