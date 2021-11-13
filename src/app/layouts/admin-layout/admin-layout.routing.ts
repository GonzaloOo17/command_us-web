import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AdminDashboardComponent } from 'src/app/pages/admin-dashboard/admin-dashboard.component';
import { RestaurantsListComponent } from 'src/app/pages/admin-dashboard/restaurants-list/restaurants-list.component';
import { CardEditComponent } from 'src/app/pages/admin-dashboard/card-edit/card-edit.component';
import { RestaurantAddComponent } from 'src/app/pages/admin-dashboard/restaurant-add/restaurant-add.component';
import { RestaurantsDetailComponent } from 'src/app/pages/admin-dashboard/restaurants-detail/restaurants-detail.component';
import { AuthGuard } from 'src/app/services/guards/auth.guard';
import { CardClientComponent } from 'src/app/pages/card-client/card-client.component';
import { CardAddComponent } from 'src/app/pages/admin-dashboard/card-add/card-add.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';

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
        path: 'card/:restaurantId/:cardId',
        component: CardClientComponent 
    },
    {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
    {
        path: 'admin',
        component: AdminDashboardComponent,
        canActivate: [AuthGuard],
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
                path: 'add-card/:restaurantId',
                component: CardAddComponent
            },
            {
                path: 'card-edit',
                component: CardEditComponent
            },
            {
                path: 'restaurant-detail/:restaurantId',
                component: RestaurantsDetailComponent
            },
            {
                path: 'restaurant-detail/:restaurantId/card-edit/:cardId',
                component: CardEditComponent
            }
    ]
      },
];
