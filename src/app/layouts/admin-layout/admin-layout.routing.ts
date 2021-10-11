import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AdminDashboardComponent } from 'src/app/pages/admin-dashboard/admin-dashboard.component';
import { RestaurantsListComponent } from 'src/app/pages/admin-dashboard/restaurants-list/restaurants-list.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: DashboardComponent 

    },
    {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminDashboardComponent,
        children: [
            {
          path: '',
          component: RestaurantsListComponent
      }
    ]
      },

    // {
    //     path: '**',
    //     redirectTo: 'dashboard'
    //   }
    // { path: 'user',           component: UserComponent },
    // { path: 'table',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
