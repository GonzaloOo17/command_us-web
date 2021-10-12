import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminDashboardComponent } from 'src/app/pages/admin-dashboard/admin-dashboard.component';
import { RestaurantsListComponent } from 'src/app/pages/admin-dashboard/restaurants-list/restaurants-list.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
    
  ],
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
    RestaurantsListComponent
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
