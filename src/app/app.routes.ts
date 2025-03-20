import { Routes } from '@angular/router';
import { HomeDemoFiveComponent } from './demos/home-demo-five/home-demo-five.component';
import { AllClientsComponent } from './components/all-clients/all-clients.component';

export const routes: Routes = [
    {path: '', component: HomeDemoFiveComponent},
    {path: 'all-clients', component: AllClientsComponent},
    {
        path: 'audit/:id',
        loadChildren: () => import('./pages/service-detail/service-detail.module').then(m => m.ServiceDetailModule)
    }
];