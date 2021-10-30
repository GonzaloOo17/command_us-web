import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AdminDashboardComponent } from 'src/app/pages/admin-dashboard/admin-dashboard.component';
import { RestaurantsListComponent } from 'src/app/pages/admin-dashboard/restaurants-list/restaurants-list.component';
import { CardEditComponent } from 'src/app/pages/admin-dashboard/card-edit/card-edit.component';
import { RestaurantAddComponent } from 'src/app/pages/admin-dashboard/restaurant-add/restaurant-add.component';
import { RestaurantsDetailComponent } from 'src/app/pages/admin-dashboard/restaurants-detail/restaurants-detail.component';

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
            },
            {
                path: 'add-restaurant',
                component: RestaurantAddComponent
            },
            {
                path: 'card-edit',
                component: CardEditComponent
            },
            {
                path: 'restaurant-detail/:id',
                component: RestaurantsDetailComponent
            }
    ]
      },
];
