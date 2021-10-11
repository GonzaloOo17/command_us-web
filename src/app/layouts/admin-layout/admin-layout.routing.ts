import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SensoresComponent } from '../../pages/sensores/sensores.component';
import { SensoresByIdComponent } from 'src/app/pages/sensores-by-id/sensores-by-id.component';
import { ListaSensoresComponent } from '../../pages/lista-sensores/lista-sensores.component';
import { ConmutacionesComponent } from '../../pages/conmutaciones/conmutaciones.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard', 
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent 

    },
    { 
        path: 'sensors',
        component: SensoresComponent 
    },
    {
        path: 'sensorsbyid',
        component: SensoresByIdComponent
    },
    {
        path: 'listasensores/:panelId',
        component: ListaSensoresComponent
    },
    {
        path: 'listasensores/:panelId/conm/:sensorId',
        component: ConmutacionesComponent
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
